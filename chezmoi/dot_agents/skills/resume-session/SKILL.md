---
name: resume-session
description: 過去のエージェントのセッションを探して再開し、追加の指示を送る。「あのセッションに伝えて」「それやってるセッションを起動して指示を送って」「前のセッションを再開して」などと、既存・過去のセッションに作業を頼むよう言われたときに使う。相手が動いていればメッセージを送り、止まっていれば Herdr のタブで再開する。
---

# resume-session

すでにあるセッションに指示を届ける。相手が動いていればメッセージを送るだけで終え、止まっていれば Herdr のタブで再開して指示を渡す。新しい worktree を作って渡すのは handoff スキル。

動いているセッションを別のタブで再開すると、会話が 2 つに分かれる。再開する前に、相手が動いていないことを必ず確かめる。

Bash の呼び出しをまたぐとシェルの変数は消える。値は出力を読み取り、次のコマンドに直接書く。シェルの位置引数（1 番目、2 番目を表す変数）は、このファイルにも起動スクリプトにも書かない（スキルの引数に置き換わって壊れる）。

## 1. 相手を探す

Issue や PR の番号、ブランチ名、作業の内容など、相手の会話に出てきたはずの言葉で探す。

```sh
ccsession list --json --grep '<語>' --limit 5 | jq -r '.[] | [.id, .cwd, .last_activity, .label] | @tsv'
```

- Codex のセッションは `ccsession --codex list ...`。以降の `ccsession` にも `--codex` を付ける
- 自分のセッションも出る（cwd が今の作業フォルダーで、いちばん新しい行）。外す
- 見つからないときは、記録を直接探す。ccsession は、記録の末尾 64KB に人の発言がないセッションを一覧から外すため。ファイル名がセッション ID

  ```sh
  rg -l --fixed-strings '<語>' ~/.claude/projects/*/*.jsonl | rg -v "${CLAUDE_CODE_SESSION_ID:-no-session-id}" | head
  ```

- 候補が複数あって決まらなければ、依頼者に尋ねる。中身は `ccsession preview --no-color '<ID>'` で見る
- 他の terminal の画面を `hc read` で読んで探さない（依頼者のシェルに秘密情報が映っていることがある）

## 2. 相手が動いていないか確かめる

```sh
jq -r 'select(.sessionId == "<セッション ID>") | [.pid, .name, .status] | @tsv' ~/.claude/sessions/*.json
ps -p '<pid>'
```

- 行が出て、その pid が生きていれば動いている。再開しない。出た名前を宛先にして、メッセージを送る手段（Claude の SendMessage）で指示を送り、送った相手を伝えて終える
- 行が出ないか、プロセスがなければ動いていない。次へ進む
- Codex など、この登録がないエージェントは、確かめられなければ再開してよいか依頼者に尋ねる

## 3. 再開先を確かめる

```sh
ccsession resume-spec '<セッション ID>'   # cwd、cwd_exists、args
git -C '<cwd>' status -sb
jq -r 'select(.gitBranch) | .gitBranch' ~/.claude/projects/*/'<セッション ID>'.jsonl | tail -1   # 相手が最後にいたブランチ（Claude）
```

- 今のブランチが、相手が最後にいたブランチと違うとき、`cwd_exists` が `false` のときは、依頼者に尋ねる。自分でブランチを切り替えない
- 未コミットの変更があるときは、指示に書くか、依頼者に尋ねる

## 4. 指示ファイルと起動スクリプトを書く

再開だけ頼まれて、伝える指示がないときは、指示ファイルを作らない。

指示は一時ファイル（スクラッチパッドがあればそこ）に書く。相手は以前の会話を覚えているので、そのあとに変わったことを書く: この会話で決まったこととその理由、やること、再開先の今の状態で相手が知らないこと、守る約束事（メモリや CLAUDE.md、AGENTS.md から書き写す）。

起動スクリプトも同じ場所に書き、値をそのまま書き込む。

```sh
cd '<cwd>' && claude --resume '<セッション ID>' "$(cat '<指示ファイル>')"
exec "${SHELL:-/bin/zsh}" -l
```

- 再開のコマンドは `resume-spec` の `args` に合わせる（Codex なら `codex resume '<セッション ID>'`）
- 指示がないときは、`"$(cat ...)"` を消す
- `ccsession resume` は使わない（Bash の中で対話画面を起動するので、タブが開かず、指示も渡せない）
- 最後の行は、エージェントが終わったあとも、そのフォルダーにシェルを残すため

書いたら `sh -n '<起動スクリプト>'` で確かめる。

## 5. タブで再開する

起動の直前に、手順 2 をもう一度行う。開く場所は cwd の worktree にいる space のタブ（なければ新しい space）。

```sh
target=$(git -C '<cwd>' rev-parse --show-toplevel)
space=$(herdr-app ls | jq -r '.spaces[] | .id as $s | .tabs[].terminals[].terminal | "\($s) \(.)"' | while read -r s t; do
  cwd=$(hc get "$t" --json | jq -r '.foreground.cwd // .cwd')
  [ "$(git -C "$cwd" rev-parse --show-toplevel 2>/dev/null)" = "$target" ] && { echo "$s"; break; }
done)
if [ -n "$space" ]; then
  herdr-app do tab.new "$(jq -nc --arg s "$space" --arg f '<cwd>' --arg l '<起動スクリプト>' '{space: $s, folder: $f, argv: ["sh", $l]}')"
else
  herdr-app do space.new "$(jq -nc --arg f '<cwd>' --arg l '<起動スクリプト>' '{folder: $f, argv: ["sh", $l]}')"
fi
```

出力の `terminal`（`t1c` のような値）を控える。Herdr は開いたタブを表示する（元のタブには戻さない）。

## 6. 届いたか確かめる

```sh
hc wait '<terminal>' --timeout 10 >/dev/null; hc get '<terminal>' --json | jq -c '{app: .status.app, state: .status.state}'; hc read '<terminal>' | tail -30
```

- `app` が `claude-code`（Codex なら `codex`）になり、指示の本文が出ている: 渡せた。確認待ちで止まっていたら、依頼者にそのタブで答えてもらう
- シェルのプロンプトに戻っている: 起動に失敗した。画面のエラーを確かめ、セッション ID、cwd、指示ファイルのパスを見直す

再開したセッション ID、cwd、terminal のアドレスを伝えて終える。

## やらないこと

- 頼まれた作業を自分で進めない。相手の完了も待たない
- `herdr-app do` がエラーやタイムアウトで戻っても、すぐ作り直さない（同じセッションを 2 回再開すると会話が分かれる）。`herdr-app ls` で、タブや space ができていないか確かめる
