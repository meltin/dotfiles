---
name: handoff
description: 作業を worktree（gh wt）と Herdr のタブで動く新しいエージェントに引き継ぐ。「新規ワークツリーで」「別のワークツリーで」「新しい worktree を切って」「別セッションで」「ここじゃなくて」「handoff」などと頼まれたときに使う。自分では作業を続けず、渡した相手と依頼者が直接話す形にする。
---

# handoff

`gh wt` で worktree を用意し、Herdr のタブでエージェントを起動して作業を渡す。渡すのは基本的に Issue か PR。尋ねる前にコードを調べない。advisor ツールは、このスキルの間は呼ばない。

Bash の呼び出しをまたぐとシェルの変数は消える。値は出力を読み取り、次のコマンドに直接書く。シェルの位置引数（1 番目、2 番目を表す変数）は、このファイルにも起動スクリプトにも書かない（スキルの引数に置き換わって壊れる）。変数名を `path` にしない（zsh の `PATH` と連動する）。

起動するのは自分と同じエージェント（Claude なら `claude`、Codex なら `codex`）。依頼者が名指ししたらそれに従う。

## 1. 何を渡すか決める

- 引数なし: この会話で直前に起票した Issue。なければ直前に話していた Issue か PR。決まらなければ短く尋ねる
- 引数に Issue や PR の番号、URL: それを渡す。引数のほかの言葉も一緒に渡す
- 引数に作業の中身だけ: Issue なしで、その指示を渡す

```sh
gh issue view '<番号|URL>' --json title,url   # PR の番号でも成功し、url が /pull/ になる
```

## 2. 依頼者に確かめる

```sh
git fetch origin
git symbolic-ref --short refs/remotes/origin/HEAD   # start-point の案（例: origin/main）。未設定なら git remote set-head origin -a
git branch --show-current
git config --get wt.basedir                          # {gitroot} はリポジトリ名
git status --short                                   # 未コミット・未追跡の変更
git rev-parse --show-toplevel                        # 今いる worktree のルート
git worktree list --porcelain                        # すでにある worktree（絶対パスとブランチ）
```

選択肢で尋ねるツール（Claude の AskUserQuestion、Codex の request_user_input）で、1 回にまとめて尋ねる。答えをもらうまで作らない。依頼者が指定していた値は 1 つ目の選択肢にする。

- start-point: `origin/<既定ブランチ>` と、今いるブランチ
- 名前: ブランチ名（`prefix/{issue-no}-summary`。Issue がなければ `prefix/summary`）、フォルダー名（英数字の短い名前）、パス（`<wt.basedir を展開したもの>/<フォルダー名>`）の組を 2 案
- 未コミット・未追跡の変更: `git status --short` が空でないときだけ。ファイルを挙げて「写す」か「写さない」か
- PR なら名前と start-point は尋ねない（PR で決まる）

## 3. 指示ファイルと起動スクリプトを書く

指示は一時ファイル（スクラッチパッドがあればそこ）に書く。1 文字目を `-` や `/` にしない。入れるもの:

- Issue や PR の番号と URL（まず読むよう書く）
- 引数のほかの言葉（要約せずに書き写す）。Issue がなければ目的、範囲、終わりの条件
- この会話で決まったこと、分かっていること、済んだこと（新しく調べない）
- ブランチ名と切った元、upstream が未設定であること
- 写した未コミットの変更（あれば、worktree で `git status --short` を見るよう書く）
- 守る約束事（コミット、PR、push、レビューへの返信。メモリや CLAUDE.md、AGENTS.md から書き写す）

起動スクリプトも同じ場所に書き、値をそのまま書き込む。

```sh
wt_dir=$(gh wt -b '<ブランチ名>' '<フォルダー名>' '<start-point>') && [ -d "$wt_dir" ] || exit 1
git -C "$wt_dir" branch --unset-upstream 2>/dev/null
cd "$wt_dir" && claude "$(cat '<指示ファイル>')"
exec "${SHELL:-/bin/zsh}" -l
```

- 未コミットの変更を写さないときは、`gh wt` の前に `GIT_CONFIG_COUNT=2 GIT_CONFIG_KEY_0=wt.copymodified GIT_CONFIG_VALUE_0=false GIT_CONFIG_KEY_1=wt.copyuntracked GIT_CONFIG_VALUE_1=false` を付ける
- PR: 1 行目を `wt_dir=$(gh wt -p '<番号|URL>') && [ -d "$wt_dir" ] || exit 1` にし、2 行目を消す
- すでにある worktree: 1 行目を `wt_dir='<worktree のルート>'` にし、2 行目を消す
- 最後の行は、エージェントが終わったあとも worktree の中にシェルを残すため（残さないと、space が space を作ったフォルダーに戻る）

書いたら `sh -n '<起動スクリプト>'` で確かめる。

## 4. タブを開く

開く場所は worktree で決める。新しく作る worktree は新しい space。すでにある worktree は、その worktree にいる space のタブ（なければ新しい space）。すでにある worktree は、そこで別のエージェントが動いていないかも確かめる。

PR は、そのブランチの worktree があれば「すでにある worktree」、なければ「新しく作る worktree」として扱う。

```sh
gh pr view '<番号|URL>' --json headRefName --jq .headRefName
git worktree list --porcelain | rg -B2 '^branch refs/heads/<ブランチ名>$' | sed -n 's/^worktree //p'   # 出れば、それが worktree のルート
```

新しく作る worktree（folder は今いる worktree のルート。`gh wt` はそこから未コミットの変更を写す）:

```sh
herdr-app do space.new "$(jq -nc --arg f '<今いる worktree のルート>' --arg l '<起動スクリプト>' '{folder: $f, argv: ["sh", $l]}')"
```

すでにある worktree:

```sh
target='<worktree のルート>'
space=$(herdr-app ls | jq -r '.spaces[] | .id as $s | .tabs[].terminals[].terminal | "\($s) \(.)"' | while read -r s t; do
  cwd=$(hc get "$t" --json | jq -r '.foreground.cwd // .cwd')
  [ "$(git -C "$cwd" rev-parse --show-toplevel 2>/dev/null || echo "$cwd")" = "$target" ] && { echo "$s"; break; }
done)
if [ -n "$space" ]; then
  herdr-app do tab.new "$(jq -nc --arg s "$space" --arg f "$target" --arg l '<起動スクリプト>' '{space: $s, folder: $f, argv: ["sh", $l]}')"
else
  herdr-app do space.new "$(jq -nc --arg f "$target" --arg l '<起動スクリプト>' '{folder: $f, argv: ["sh", $l]}')"
fi
```

出力の `terminal`（`t1c` のような値）を控える。Herdr は開いたタブを表示する（元のタブには戻さない）。

## 5. 届いたか確かめる

タブを開いたら、依頼者にそう伝える。次を、指示の本文かエラーが画面に出るまで繰り返す。`gh wt` は依存のインストールで 1〜2 分かかることがある。5 分たっても終わらなければ、画面の様子を伝えて終える。

```sh
hc wait '<terminal>' --timeout 30 >/dev/null; hc get '<terminal>' --json | jq -c '{app: .status.app, state: .status.state}'; hc read '<terminal>' | tail -30
```

- `app` が `null` で、`gh wt` の進み具合が出ている: まだ作っている。繰り返す
- `app` が `claude-code`（Codex なら `codex`）になり、指示の本文が出ている: 渡せた。確認待ちで止まっていたら、依頼者にそのタブで答えてもらう
- `app` が `null` のまま、画面に質問（フォルダーを信頼するかなど）が出ている: 依頼者にそのタブで答えてもらう
- シェルのプロンプトに戻っている: `gh wt` かエージェントの起動に失敗した。画面のエラーを伝える

渡せたら、worktree のパス、ブランチ名、terminal のアドレスを伝えて終える。

## やらないこと

- 引き継いだ作業を自分で続けない。相手の完了も待たない
- 相手を `hc run` で起動しない（自分の子になり、自分が終わると一緒に止まる）
- `herdr-app do` がエラーやタイムアウトで戻っても、すぐ作り直さない。`herdr-app ls` で、タブや space ができていないか確かめる
