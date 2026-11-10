---
name: resume-session
description: 過去のエージェントのセッションを探して再開し、追加の指示を送る。「あのセッションに伝えて」「それやってるセッションを起動して指示を送って」「前のセッションを再開して」などと、既存・過去のセッションに作業を頼むよう言われたときに使う。相手が動いていればメッセージを送り、止まっていれば Rex の新しいタブで再開する。
---

# resume-session

すでにあるセッションに追加の指示を届ける。相手が動いていればメッセージを送るだけで終え、止まっていれば Rex の新しいタブで再開して指示を渡す。新しい worktree を作って作業を渡すのは handoff スキル。

動いているセッションを別のタブで再開すると、会話が 2 つに分かれる。再開する前に、相手が動いていないことを必ず確かめる。

Bash の呼び出しをまたぐとシェルの変数は消える。手順をまたぐ値（セッション ID、フォルダー、ブロックの ID）は出力を読み取り、次のコマンドに直接書く。

## 手順

### 1. 相手を探す

まず稼働中のセッションの一覧を見る（例: Claude の ListAgents）。一覧に出るのは名前と状態だけなので、名前（フォルダー名や要約のタイトル）で相手を見分ける。

- 相手が動いていれば（`idle` や `busy`）、再開しない。メッセージを送る手段（例: Claude の SendMessage）で指示を送り、送った相手を依頼者に伝えて終える。手順 2 以降はやらない。
- `offline` は動いていない。一覧に出ないものも同じ。記録から探す。

記録はブランチ名や PR 番号で検索し、更新日時の新しい順に並べる。

```sh
cd ~/.claude/projects
rg -lF '"gitBranch":"<ブランチ名>"' --glob '*.jsonl' --max-depth 2 . \
  | xargs stat -f '%m %N' | sort -rn | head -5 \
  | while read -r _ f; do
      jq -r 'select(.cwd) | [.sessionId, .cwd, .gitBranch, .timestamp] | @tsv' "$f" | tail -1
    done
```

- PR 番号や Issue 番号で探すときは、検索語を `pull/1251` や `#1251` のようにする。
- 自分のセッションも検索に掛かる（検索語を打った時点で自分の記録に入る）。自分のセッション ID は候補から外す。
- 出力するのはセッション ID、フォルダー、ブランチ、日時だけにする。記録の本文を表示しない。
- 候補が複数あって決まらなければ、候補を並べて依頼者に尋ねる。選択肢で尋ねるツールがあればそれを使う（例: Claude の AskUserQuestion、Codex の request_user_input）。
- Codex の記録は `~/.codex/sessions/` 以下の `rollout-*.jsonl`。1 行目の `.payload` に `id`、`cwd`、`git.branch` がある。
- 他のタブの画面を `rex capture` で読んで探さない。依頼者のシェルの出力に秘密情報が映っていることがある。

### 2. 再開先を確かめる

フォルダーは記録の `cwd` から取る。`~/.claude/projects/` のフォルダー名は `/` と `.` が `-` に置き換わっていて、元のパスに戻せない。

```sh
dir='<記録の cwd>'
git -C "$dir" status -sb
```

- 今のブランチが記録の `gitBranch` や作業対象のブランチと違うときは、依頼者に尋ねる。自分でブランチを切り替えない。
- 未コミットの変更があるときは、指示に書くか、依頼者に尋ねる。
- フォルダーがなくなっているとき（worktree を消したなど）は、依頼者に尋ねる。
- 起動の直前に、もう一度稼働中のセッションの一覧を見て、相手が動いていないことを確かめる。

### 3. 渡す指示をファイルに書く

長い複数行の指示をシェルの引数に直接書くと壊れやすいので、一時ファイル（スクラッチパッドがあればそこ）に書く。相手は以前の会話を覚えているので、そのあとに変わったことを中心に書く。次を入れる。

- この会話で決まったことと、その理由
- やることを順番に
- 再開先の今の状態で相手が知らないこと（ブランチが変わっている、未コミットの変更があるなど）
- その作業で守る約束事（コミットメッセージ、PR の作り方、push とマージの扱い、レビューへの返信の仕方など。メモリや CLAUDE.md、AGENTS.md にあるものを書き写す）

### 4. Rex のタブで再開する

リポジトリ名のセッションを探し、あればタブを足し、なければセッションを作る。

```sh
dir='<再開先のフォルダー>'
session='<再開するセッション ID>'
prompt_file='<指示ファイルのパス>'
repo=$(basename "$(dirname "$(git -C "$dir" rev-parse --path-format=absolute --git-common-dir)")")
sid=$(rex ls --json | jq -r --arg l "$repo" 'first(.sessions[] | select(.label == $l) | .session_id) // empty')
if [ -n "$sid" ]; then
  echo "$sid"
  rex window new -s "$sid" -c "$dir" --focus=false --json -- sh -c 'claude --resume "$1" "$(cat "$2")"' sh "$session" "$prompt_file"
else
  rex new "$repo" -c "$dir" --json -- sh -c 'claude --resume "$1" "$(cat "$2")"' sh "$session" "$prompt_file"
fi
```

- Codex のセッションなら `claude --resume "$1"` を `codex resume "$1"` に変える。
- 再開先のフォルダーを cwd にする。別のフォルダーからだと、セッションが見つからないか、別の場所で作業が進む。
- タブに名前（`rex window new` の LABEL、`rex new` の `--window`、`rex window rename`）を付けない。付けるとサイドバーがその名前で固定され、エージェントが付ける要約のタイトルが出なくなる。
- Rex のセッション ID とブロック ID を控える。タブを足したときは出力した `sid` と `.block_ids[0]`、セッションを作ったときは `.session_id` と `.initial_windows[0].block_ids[0]`。

### 5. 届いたか確かめて終える

Rex は指示が届いたかを返さないので、10 秒待って画面を読む。読むのは起動したそのタブだけ。`-s` と `-b` を必ず付ける（省くとフォーカスのあるブロック、つまり依頼者のシェルを読むことがある）。

```sh
rex wait -s <session_id> <block_id> --for 10s; rex capture -s <session_id> -b <block_id> --trim | tail -40
```

エージェントが動いていれば `rex wait` は `wait timed out` のエラーで戻る。これが正常。`rex wait` がエラーなしですぐ戻り、`rex capture` が `not found` になったら、起動に失敗してタブが閉じている。セッション ID、フォルダー、指示ファイルのパスを確かめてから手順 4 をやり直す。

指示の本文が表示され、エージェントが動き始めていれば渡せている。フォルダーを信頼するかの確認などで止まっていたら、依頼者にそのタブで答えてもらうよう伝える。再開したセッション ID、フォルダー、指示ファイルのパスを依頼者に伝えて終える。

## やらないこと

- 頼まれた作業を自分で進めない。相手の完了も待たない。
- `rex new` や `rex window new` がタイムアウトしても、すぐ作り直さない。同じセッションを 2 回再開すると会話が分かれる。`rex ls --json` と `rex session inspect <session_id> --json` で、セッションやタブができていないか確かめてからにする。
