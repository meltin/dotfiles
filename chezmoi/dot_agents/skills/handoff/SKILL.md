---
name: handoff
description: 作業を新しい worktree（gh wt）と Rex の新しいタブで動くエージェントに引き継ぐ。「新規ワークツリーで」「別のワークツリーで」「新しい worktree を切って」「別セッションで」「ここじゃなくて」「handoff」などと頼まれたときに使う。自分のセッションで作業を続けるのではなく、Rex のそのプロジェクトのセッションにタブが増える形で渡す。
---

# handoff

「新規ワークツリーで」は、`gh wt` で worktree を作り、Rex の新しいタブでエージェントを起動して作業を渡すこと。自分のセッションで worktree を作って作業を続けることではない。よくある流れは、このセッションで Issue を起票し、その Issue の作業を新しい worktree に振る形。

Rex のセッションはプロジェクト（リポジトリ）ごとに 1 つで、名前はリポジトリ名。そのプロジェクトのセッションがあればタブを足し、なければセッションを作る。

Bash の呼び出しをまたぐとシェルの変数は消える。手順をまたぐ値（worktree のパス、セッションやブロックの ID）は出力を読み取り、次のコマンドに直接書く。

起動するのは自分と同じエージェント（例: Claude なら `claude`、Codex なら `codex`）。依頼者が相手を名指ししたらそれに従う。

## 何を渡すか決める

- 引数に Issue や PR の番号、URL があれば、それを渡す。
- 引数がなければ、この会話で直前に起票したか話していた Issue を渡す。どれを指すか一つに決まらないときや、Issue がないときは、何を渡すかを短く尋ねる。

## 手順

### 1. 作る内容を依頼者に確かめる

worktree を作る前に、案を調べて、選択肢で尋ねるツールがあればそれで確かめる（例: Claude の AskUserQuestion、Codex の request_user_input）。なければ文章で尋ねる。答えをもらうまで作らない。

```sh
git fetch origin
git symbolic-ref --short refs/remotes/origin/HEAD   # start-point の案。例: origin/dev
git branch --show-current                            # 今いるブランチ
git config --get wt.basedir                          # worktree の置き場所。{gitroot} はリポジトリ名
git status --short                                   # 今いる worktree の未コミット・未追跡
```

1 回でまとめて次を尋ねる。

- **start-point**: 1 つ目の選択肢は `origin/<既定ブランチ>`、2 つ目は今いるローカルのブランチ。プロジェクトのメモリや指示に候補が書かれていれば、それも加える。
- **名前**: ブランチ名、worktree 名（フォルダー名）、worktree のパスを 1 組にして、案を 2 つ出す。パスは `<wt.basedir を展開したもの>/<フォルダー名>`。
  - ブランチ名は create-branch スキルと同じ `prefix/{issue-no}-summary`（例: `feat/1216-legend-number`）。
  - フォルダー名は英数字の短い名前（例: `issue-1216-legend-number`）。
- **未コミット・未追跡の変更**: `git status --short` が空でないときだけ尋ねる。質問文に該当するファイルを挙げ、新しい worktree に「写す」か「写さない」かを選んでもらう。

依頼者が頼むときに指定していた項目は、その値を 1 つ目の選択肢にする。

### 2. worktree を作る

手順 1 の答えで作る。`gh wt` は標準出力に worktree のパスだけを出すので、それを控える。

```sh
wt_dir=$(gh wt -b '<ブランチ名>' '<フォルダー名>' '<start-point>')
git -C "$wt_dir" branch --unset-upstream 2>/dev/null || true
echo "$wt_dir"
```

未コミット・未追跡の変更を「写さない」と答えられたら、`gh wt` の行だけ次の環境変数を前に付ける。無視ファイル（`.env` や依存など）は写る。

```sh
GIT_CONFIG_COUNT=2 GIT_CONFIG_KEY_0=wt.copymodified GIT_CONFIG_VALUE_0=false GIT_CONFIG_KEY_1=wt.copyuntracked GIT_CONFIG_VALUE_1=false gh wt ...
```

- 変数名を `path` にしない。zsh では `PATH` と連動していて、代入すると以降のコマンドが見つからなくなる。
- start-point は必ず付ける。省いたり空だったりすると `gh wt` を実行した場所の `HEAD`（今いるブランチ）から切られる。手順 1 で `origin/HEAD` が未設定だったら `git remote set-head origin -a` で直す。
- `origin/...` から切ると upstream がベースブランチになるので外しておく。初回の push は `git push -u origin HEAD`。
- `wt.hook`（依存のインストールなど）がその場で走るので、Bash のタイムアウトを長めにする（5 分以上）。
- 変更を写したときは `git -C <worktree のパス> status --short` で確かめ、写ったものを指示に書く。
- PR を渡すときは `gh wt -p <番号|URL>`。ブランチも名前も PR で決まるので、手順 1 は未コミット・未追跡の変更だけ尋ねる。
- すでにある worktree に渡すときは、先に `gh wt -l` で名前を確かめてから `gh wt <ブランチ|フォルダー名>`。一致する worktree がないと、その名前で `HEAD` から新しく作られてしまう。その worktree で別のエージェントが動いていないかも確かめる。

### 3. 渡す指示をファイルに書く

長い複数行の指示をシェルの引数に直接書くと壊れやすいので、一時ファイル（スクラッチパッドがあればそこ）に書く。次を入れる。

- Issue の番号と URL。まず Issue を読んでから始めるよう書く
- この会話で決まったこと、調べて分かったこと、済んだ作業（未コミットの変更があればファイルと内容）
- ブランチ名と切った元、upstream が未設定であること
- 残りの作業を順番に（Issue に書いてあれば、そちらを見るよう書けばよい）
- その作業で守る約束事（コミットメッセージ、PR の作り方、push とマージの扱い、レビューへの返信の仕方など。メモリや CLAUDE.md、AGENTS.md にあるものを書き写す）

### 4. Rex のタブでエージェントを起動する

リポジトリ名のセッションを探し、あればタブを足し、なければセッションを作る。

```sh
wt_dir='<worktree のパス>'
prompt_file='<指示ファイルのパス>'
agent='<エージェントのコマンド。例: claude、codex>'
repo=$(basename "$(dirname "$(git -C "$wt_dir" rev-parse --path-format=absolute --git-common-dir)")")
sid=$(rex ls --json | jq -r --arg l "$repo" 'first(.sessions[] | select(.label == $l) | .session_id) // empty')
if [ -n "$sid" ]; then
  echo "$sid"
  rex window new -s "$sid" -c "$wt_dir" --focus=false --json -- env AGENT="$agent" PROMPT_FILE="$prompt_file" sh -c '"$AGENT" "$(cat "$PROMPT_FILE")"'
else
  rex new "$repo" -c "$wt_dir" --json -- env AGENT="$agent" PROMPT_FILE="$prompt_file" sh -c '"$AGENT" "$(cat "$PROMPT_FILE")"'
fi
```

- この形は、コマンドが最初の指示を引数で受け取る前提（`claude` と `codex` はそう）。受け取らないエージェントなら、そのエージェントの渡し方に合わせる。
- 値は環境変数で渡す。シェルの位置引数（1 番目、2 番目を表す変数）をこのファイルに書くと、スキルの引数に置き換わって壊れる。
- タブに名前（`rex window new` の LABEL、`rex new` の `--window`）を付けない。付けるとサイドバーがその名前で固定され、エージェントが付ける要約のタイトルが出なくなる。
- セッション ID とブロック ID を控える。タブを足したときは出力した `sid` と `.block_ids[0]`、セッションを作ったときは `.session_id` と `.initial_windows[0].block_ids[0]`。
- セッション名は SessionStart フックがリポジトリ名に付け替えるので、Issue 名を付けても残らない。

### 5. 届いたか確かめて終える

Rex は指示が届いたかを返さないので、10 秒待って画面を読む。エージェントが動いていれば `rex wait` は `wait timed out` のエラーで戻る。これが正常。`rex wait` がエラーなしですぐ戻り、`rex capture` が `not found` になったら、エージェントが起動に失敗してタブが閉じている。指示ファイルのパスとエージェントのコマンドを確かめてから手順 4 をやり直す。

```sh
rex wait -s <session_id> <block_id> --for 10s; rex capture -s <session_id> -b <block_id> --trim | tail -40
```

指示の本文が表示され、エージェントが動き始めていれば渡せている。フォルダーを信頼するかの確認などで止まっていたら、依頼者にそのタブで答えてもらうよう伝える。worktree のパス、ブランチ名、セッション ID を依頼者に伝えて終える。

## やらないこと

- 引き継いだ作業を自分で続けない。相手の完了も待たない。
- `rex new` や `rex window new` がタイムアウトしても、すぐ作り直さない。`rex ls --json` と `rex session inspect <session_id> --json` で、セッションやタブができていないか確かめてからにする。
