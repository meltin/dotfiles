---
name: resume-session
description: 過去のエージェントのセッションを探して再開し、追加の指示を送る。「あのセッションに伝えて」「それやってるセッションを起動して指示を送って」「前のセッションを再開して」などと、既存・過去のセッションに作業を頼むよう言われたときに使う。相手が動いていればメッセージを送り、止まっていれば Herdr の新しいタブで再開する。
---

# resume-session

すでにあるセッションに追加の指示を届ける。相手が動いていればメッセージを送るだけで終え、止まっていれば Herdr の新しいタブで再開して指示を渡す。記録の検索には `ccsession` を使う。新しい worktree を作って作業を渡すのは handoff スキル。

動いているセッションを別のタブで再開すると、会話が 2 つに分かれる。再開する前に、相手が動いていないことを必ず確かめる。

Bash の呼び出しをまたぐとシェルの変数は消える。手順をまたぐ値（セッション ID、フォルダー、terminal のアドレス）は出力を読み取り、次のコマンドに直接書く。

## 手順

### 1. 相手を探す

記録を `ccsession` で検索する。Issue や PR の番号、ブランチ名、作業の内容など、相手の会話に出てきたはずの言葉で探す。結果は新しい順に並ぶ。

```sh
ccsession list --json --grep '<検索語>' --limit 5 \
  | jq -r '.[] | [.id, .cwd, .cwd_exists, .last_activity, .label] | @tsv'
```

- Codex のセッションを探すときは `ccsession --codex list ...`。以降の `ccsession` にも同じ `--codex` を付ける。
- 自分のセッションも検索に掛かる（検索語を打った時点で自分の記録に入る）。フォルダーが今の作業フォルダーで、いちばん新しい行が自分。候補から外す。
- 候補が複数あって決まらなければ、候補を並べて依頼者に尋ねる。選択肢で尋ねるツールがあればそれを使う（例: Claude の AskUserQuestion、Codex の request_user_input）。中身を見て見分けたいときは `ccsession preview --no-color <ID>`。
- 他のタブの画面を `hc read` で読んで探さない。依頼者のシェルの出力に秘密情報が映っていることがある。

### 2. 相手が動いていないか確かめる

Claude の稼働中のセッションは `~/.claude/sessions/` に登録されている。セッション ID で突き合わせる。

```sh
jq -r 'select(.sessionId == "<セッション ID>") | [.pid, .name, .status] | @tsv' ~/.claude/sessions/*.json
ps -p <pid>
```

- 行が出て、その pid のプロセスが生きていれば、相手は動いている。再開しない。出た名前を宛先にして、メッセージを送る手段（例: Claude の SendMessage）で指示を送り、送った相手を依頼者に伝えて終える。手順 3 以降はやらない。
- 行が出ないか、プロセスがなければ動いていない。次へ進む。
- Codex など、この登録がないエージェントは、稼働中のセッションの一覧を見る手段があればそれで確かめる。確かめられなければ、再開してよいか依頼者に尋ねる。

### 3. 再開先を確かめる

フォルダーと起動するコマンドは `resume-spec` で得る。`~/.claude/projects/` のフォルダー名からは求めない（`/` と `.` が `-` に置き換わっていて、元のパスに戻せない）。

```sh
ccsession resume-spec '<セッション ID>'          # cwd、cwd_exists、args
git -C '<cwd>' status -sb                         # 今のブランチと未コミットの変更
jq -r 'select(.gitBranch) | .gitBranch' ~/.claude/projects/*/'<セッション ID>'.jsonl | tail -1   # 相手が最後にいたブランチ（Claude）
```

- 今のブランチが、相手が最後にいたブランチや作業対象のブランチと違うときは、依頼者に尋ねる。自分でブランチを切り替えない。
- 未コミットの変更があるときは、指示に書くか、依頼者に尋ねる。
- `cwd_exists` が `false` のとき（worktree を消したなど）は、依頼者に尋ねる。

### 4. 渡す指示をファイルに書く

再開だけ頼まれて、伝える指示がないときは、この手順を飛ばす。指示を作り上げない。

長い複数行の指示をシェルの引数に直接書くと壊れやすいので、一時ファイル（スクラッチパッドがあればそこ）に書く。相手は以前の会話を覚えているので、そのあとに変わったことを中心に書く。次を入れる。

- この会話で決まったことと、その理由
- やることを順番に
- 再開先の今の状態で相手が知らないこと（ブランチが変わっている、未コミットの変更があるなど）
- その作業で守る約束事（コミットメッセージ、PR の作り方、push とマージの扱い、レビューへの返信の仕方など。メモリや CLAUDE.md、AGENTS.md にあるものを書き写す）

### 5. Herdr のタブで再開する

起動スクリプトを指示ファイルと同じ場所に書く。値はそのまま書き込む。

```sh
cd '<resume-spec の cwd>' && exec claude --resume '<セッション ID>' "$(cat '<指示ファイルのパス>')"
```

- 再開のコマンドは `resume-spec` の `args` に合わせる。Codex のセッションなら `claude --resume` を `codex resume` に変える。
- 伝える指示がなく、再開だけ頼まれたときは、`exec` のあとを `claude --resume '<セッション ID>'` だけにする。手順 4 は飛ばす。
- シェルの位置引数（1 番目、2 番目を表す変数）を、このファイルにも起動スクリプトにも書かない。このファイルではスキルの引数に置き換わって壊れる。
- `ccsession resume` は使わない。実行したその場（Bash の中）で対話画面を起動するので、Herdr のタブが開かず、最初の指示も渡せない。
- 再開先のフォルダーを cwd にする。別のフォルダーからだと、セッションが見つからないか、別の場所で作業が進む。

書いたら `sh -n <起動スクリプトのパス>` で構文を確かめる。起動の直前に手順 2 をもう一度行い、相手が動いていないことを確かめる。それから、リポジトリ名の space を探し、あればタブを足し、なければ space を作る。

```sh
launcher='<起動スクリプトのパス>'
dir='<resume-spec の cwd>'
repo=$(basename "$(dirname "$(git -C "$dir" rev-parse --path-format=absolute --git-common-dir)")")
space=$(herdr-app ls | jq -r --arg r "$repo" 'first(.spaces[] | select(.machine == null and .name == $r) | .id) // empty')
if [ -n "$space" ]; then
  herdr-app do tab.new "$(jq -nc --arg s "$space" --arg f "$dir" --arg l "$launcher" '{space: $s, folder: $f, argv: ["sh", $l]}')"
else
  herdr-app do space.new "$(jq -nc --arg f "$dir" --arg l "$launcher" '{folder: $f, argv: ["sh", $l]}')"
fi
```

- `space` と `folder` は必ず渡す。省くと、依頼者がいま見ている space と、フォーカスのある terminal のフォルダーが使われる。
- `argv` は `["sh", 起動スクリプト]` だけにする。Herdr はこれを対話シェル（`zsh -lic`）の中で動かし、終わるとそのタブでシェルを開く。
- Herdr は新しいタブを表示する。依頼者がそのまま進み具合を見られるので、元のタブには戻さない。
- 出力の `terminal`（`t1c` のようなアドレス）を控える。

### 6. 届いたか確かめて終える

Herdr は指示が届いたかを返さないので、10 秒待って画面を読む。読むのは起動したその terminal だけ。アドレスを必ず付ける（省くと、どの terminal かを尋ねるエラーになる）。

```sh
hc wait '<terminal>' --timeout 10 >/dev/null; herdr-app ls | jq -c --arg t '<terminal>' '.spaces[].tabs[].terminals[] | select(.terminal == $t) | {app, status}'; hc read '<terminal>' | tail -40
```

`app` がエージェントの名前（Claude なら `claude-code`）になり、指示の本文が表示されてエージェントが動き始めていれば渡せている。フォルダーを信頼するかの確認などで止まっていたら、依頼者にそのタブで答えてもらうよう伝える。再開したセッション ID、フォルダー、指示ファイルのパスを依頼者に伝えて終える。

`app` が `null` のままシェルのプロンプトに戻っていたら、起動に失敗している。画面のエラーを確かめ、セッション ID、フォルダー、指示ファイルのパスを確かめてから、同じタブで `hc send '<terminal>' "sh '<起動スクリプトのパス>'"` を実行して起動し直す。

## やらないこと

- 頼まれた作業を自分で進めない。相手の完了も待たない。
- `herdr-app do tab.new` や `space.new` がエラーやタイムアウトで戻っても、すぐ作り直さない。同じセッションを 2 回再開すると会話が分かれる。`herdr-app ls` で、タブや space ができていないか確かめてからにする。
