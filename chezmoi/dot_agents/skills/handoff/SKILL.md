---
name: handoff
description: 作業を新しい worktree（gh wt）と Herdr の新しいタブで動くエージェントに引き継ぐ。「新規ワークツリーで」「別のワークツリーで」「新しい worktree を切って」「別セッションで」「ここじゃなくて」「handoff」などと頼まれたときに使う。自分のセッションで作業を続けるのではなく、Herdr のそのプロジェクトの space にタブが増える形で渡す。
---

# handoff

「新規ワークツリーで」は、`gh wt` で worktree を作り、Herdr の新しいタブでエージェントを起動して作業を渡すこと。自分のセッションで worktree を作って作業を続けることではない。渡すのは基本的に Issue か PR。よくある流れは、このセッションで Issue を起票し、引数なしで呼ばれて、その Issue の作業を新しい worktree に振る形。

依頼者は、頼んだらすぐタブバーにタブが出ることを期待している。尋ねる前にコードを調べない。advisor ツールがあっても、このスキルの間は呼ばない（尋ねる前も、終える前も）。決めることは手順 1 で依頼者に尋ね、調べものや判断は引き継ぎ先に任せる。worktree の作成（`gh wt`）は新しいタブの中で走らせ、進み具合をそのタブで見せる。

Herdr の space はプロジェクト（リポジトリ）ごとに 1 つ。名前を付けていない space は、最初の terminal があるリポジトリの名前で呼ばれる。自分のいる space にタブを足す。Herdr の外から呼ばれたときは、リポジトリ名の space を探し、なければ space を作る。

Bash の呼び出しをまたぐとシェルの変数は消える。手順をまたぐ値（worktree のパス、タブの ID、terminal のアドレス）は出力を読み取り、次のコマンドに直接書く。

起動するのは自分と同じエージェント（例: Claude なら `claude`、Codex なら `codex`）。依頼者が相手を名指ししたらそれに従う。

## 何を渡すか決める

基本は Issue か PR を渡す。呼ばれたときの引数と直前の会話から特定する。よくある順に次の 3 つ。

1. **引数なし**: この会話で直前に起票した Issue を渡す。起票していなければ、直前に話していた Issue や PR を渡す。どれも特定できないときや一つに決まらないときは、何を渡すかを短く尋ねる。
2. **引数に Issue や PR の番号、URL がある**（例: `1222`、Issue の URL）: それを渡す。範囲の限定ややり方の指定など、引数に書かれたほかの言葉も一緒に渡す。
3. **引数に作業の中身だけが書かれている**（例: 「ほげのレスポンスにふがを足したい」）: Issue なしで、その指示を渡す。まれなケース。

Issue か PR かは、手順 1 の `gh issue view` が返す URL で分かる（`/issues/` か `/pull/`）。番号だけでは区別できない。PR なら手順 1 は未コミット・未追跡の変更だけ尋ね、手順 3 では `gh wt -p` を使う。

## 手順

### 1. 作る内容を依頼者に確かめる

worktree を作る前に、次のコマンドで案を集め、選択肢で尋ねるツールがあればそれで確かめる（例: Claude の AskUserQuestion、Codex の request_user_input）。なければ文章で尋ねる。答えをもらうまで作らない。

コードは新しく調べない。名前の案は Issue のタイトルから作る（3 のときは引数の指示から）。調べものは引き継ぎ先がやる。

```sh
git fetch origin
git symbolic-ref --short refs/remotes/origin/HEAD   # start-point の案。例: origin/dev
git branch --show-current                            # 今いるブランチ
git config --get wt.basedir                          # worktree の置き場所。{gitroot} はリポジトリ名
git status --short                                   # 今いる worktree の未コミット・未追跡
gh issue view <番号|URL> --json title,url           # 1 と 2。PR の番号でも成功し、url が /pull/ になる
```

1 回でまとめて次を尋ねる。

- **start-point**: 1 つ目の選択肢は `origin/<既定ブランチ>`、2 つ目は今いるローカルのブランチ。プロジェクトのメモリや指示に候補が書かれていれば、それも加える。
- **名前**: ブランチ名、worktree 名（フォルダー名）、worktree のパスを 1 組にして、案を 2 つ出す。パスは `<wt.basedir を展開したもの>/<フォルダー名>`。
  - ブランチ名は create-branch スキルと同じ `prefix/{issue-no}-summary`（例: `feat/1216-legend-number`）。3 のときは `{issue-no}-` を省いて `prefix/summary` にし、prefix と summary は引数の指示から決める（例: `feat/hoge-response-fuga`）。
  - フォルダー名は英数字の短い名前（例: `issue-1216-legend-number`。3 のときは `hoge-response-fuga`）。
- **未コミット・未追跡の変更**: `git status --short` が空でないときだけ尋ねる。質問文に該当するファイルを挙げ、新しい worktree に「写す」か「写さない」かを選んでもらう。

依頼者が頼むときに指定していた項目は、その値を 1 つ目の選択肢にする。

### 2. 渡す指示をファイルに書く

長い複数行の指示をシェルの引数に直接書くと壊れやすいので、一時ファイル（スクラッチパッドがあればそこ）に書く。worktree はまだないが、パスは手順 1 で決まっている。次を入れる。

- Issue や PR の番号と URL。まずそれを読んでから始めるよう書く
- 引数に書かれたほかの言葉（範囲の限定ややり方の指定）。要約せずにそのまま書き写す。3 のときは引数の指示全体を書き写す
- worktree のパス。PR を渡すときはパスが事前に分からないので、「起動したディレクトリが worktree」と書く
- この会話で決まったこと、すでに分かっていること、済んだ作業。会話にあることは省かずに書く。指示を詳しくするために新しく調べることはしない
- 未コミット・未追跡の変更を写すときは、手順 1 の `git status --short` に出たファイルを挙げ、worktree で `git status --short` を見て写ったか確かめるよう書く
- ブランチ名と切った元、upstream が未設定であること
- 残りの作業を順番に（Issue に書いてあれば、そちらを見るよう書けばよい）
- その作業で守る約束事（コミットメッセージ、PR の作り方、push とマージの扱い、レビューへの返信の仕方など。メモリや CLAUDE.md、AGENTS.md にあるものを書き写す）

引き継ぎ先はこの会話を見られない。3 のときは Issue がないので、指示ファイルだけで着手できるように、目的、範囲、終わりの条件も書く。

1 文字目を `-` や `/` にしない。エージェントがオプションやスラッシュコマンドと読む。

### 3. タブを開き、その中で worktree を作ってエージェントを起動する

worktree を作ってからタブを開くと、`gh wt`（無視ファイルのコピーと `wt.hook`）が終わるまでタブが出ない。先にタブを開き、そのタブの中で `gh wt` とエージェントを順に実行する。

起動スクリプトを指示ファイルと同じ場所に書く。値はそのまま書き込む。

```sh
wt_dir=$(gh wt -b '<ブランチ名>' '<フォルダー名>' '<start-point>') && [ -d "$wt_dir" ] || exit 1
git -C "$wt_dir" branch --unset-upstream 2>/dev/null
cd "$wt_dir" && exec <エージェントのコマンド> "$(cat '<指示ファイルのパス>')"
```

- `gh wt` は標準出力に worktree のパスだけを出し、進み具合とエラーは標準エラーに出す。`$(...)` で受けても、進み具合はタブに出る。
- `gh wt` が失敗したり、パスを返さなかったりしたら、そこで止める。Herdr はタブのコマンドが終わるとそのタブでシェルを開くので、エラーは画面に残る。PR や既存 worktree の形に 1 行目を替えるときも、`&& [ -d "$wt_dir" ] ||` 以降は残す。
- 2 行目は、`origin/...` から切ると upstream がベースブランチになるので外す行。初回の push は `git push -u origin HEAD`。
- start-point は必ず付ける。省いたり空だったりすると、タブの作業ディレクトリ（今いる worktree）の `HEAD` から切られる。手順 1 で `origin/HEAD` が未設定だったら `git remote set-head origin -a` で直す。
- 未コミット・未追跡の変更を「写さない」と答えられたら、1 行目の `gh wt` の前に次の環境変数を付ける。無視ファイル（`.env` や依存など）は写る。

  ```sh
  GIT_CONFIG_COUNT=2 GIT_CONFIG_KEY_0=wt.copymodified GIT_CONFIG_VALUE_0=false GIT_CONFIG_KEY_1=wt.copyuntracked GIT_CONFIG_VALUE_1=false gh wt ...
  ```

- PR を渡すときは 1 行目を `gh wt -p <番号|URL>` にし、2 行目は消す。ブランチも名前も PR で決まるので、手順 1 は未コミット・未追跡の変更だけ尋ねる。
- すでにある worktree に渡すときは、先に `gh wt -l` で名前を確かめ、1 行目を `gh wt <ブランチ|フォルダー名>` にして 2 行目は消す。一致する worktree がないと、その名前で `HEAD` から新しく作られてしまう。その worktree で別のエージェントが動いていないかも確かめる。
- この形は、エージェントのコマンドが最初の指示を引数で受け取る前提（`claude` と `codex` はそう）。受け取らないエージェントなら、そのエージェントの渡し方に合わせる。
- 変数名を `path` にしない。zsh では `PATH` と連動していて、代入すると以降のコマンドが見つからなくなる。
- シェルの位置引数（1 番目、2 番目を表す変数）を、このファイルにも起動スクリプトにも書かない。このファイルではスキルの引数に置き換わって壊れる。

書いたら `sh -n <起動スクリプトのパス>` で構文を確かめる。次に、タブを足す space を決めてタブを開く。自分の terminal（`HC_TERMINAL_ID`）がある space を使い、Herdr の外から呼ばれたときはリポジトリ名の space、それもなければ space を作る。タブの作業ディレクトリは今いる worktree のルートにする。`gh wt` は実行した worktree から未コミットの変更や無視ファイルを写すので、ここを変えると写す元が変わる。

```sh
launcher='<起動スクリプトのパス>'
repo_root=$(git rev-parse --show-toplevel)
repo=$(basename "$(dirname "$(git rev-parse --path-format=absolute --git-common-dir)")")
ls_json=$(herdr-app ls)
prev_tab=$(printf '%s' "$ls_json" | jq -r 'first(.spaces[] | select(.active) | .tabs[] | select(.active) | .id) // empty')
space=$(printf '%s' "$ls_json" | jq -r --arg t "${HC_TERMINAL_ID-}" --arg r "$repo" 'first((.spaces[] | select(any(.tabs[].terminals[]; .terminal == $t))), (.spaces[] | select(.machine == null and .name == $r)) | .id) // empty')
if [ -n "$space" ]; then
  herdr-app do tab.new "$(jq -nc --arg s "$space" --arg f "$repo_root" --arg l "$launcher" '{space: $s, folder: $f, argv: ["sh", $l]}')"
else
  herdr-app do space.new "$(jq -nc --arg f "$repo_root" --arg l "$launcher" '{folder: $f, argv: ["sh", $l]}')"
fi
[ -z "$prev_tab" ] || herdr-app do tab.select "$(jq -nc --arg i "$prev_tab" '{id: $i}')"
```

- `space` と `folder` は必ず渡す。省くと、依頼者がいま見ている space と、フォーカスのある terminal のフォルダーが使われる。
- `argv` は `["sh", 起動スクリプト]` だけにする。Herdr はこれを対話シェル（`zsh -lic`）の中で動かし、終わるとそのタブでシェルを開く。
- Herdr は新しいタブにフォーカスを移すので、最後の行で、開く前に表示していたタブを選び直す（space も一緒に戻る）。
- 出力の `terminal`（`t1c` のようなアドレス）と `tab` を控える。新しいタブは自分の子にならない（`parent` なし）ので、自分が終わっても止まらない。

### 4. 届いたか確かめて終える

タブを開けたら、まずそのことを依頼者に一言伝える（terminal のアドレスと、そのタブで worktree を作っていること）。依頼者はそのタブで進み具合を見られる。

指示はエージェントの起動時に届く。エージェントは `gh wt` が終わってから起動し、`gh wt` は依存のインストールを含めて 1〜2 分かかることがある。次のコマンドを、指示の本文かエラーが画面に出るまで繰り返す。5 分たっても `gh wt` が終わらなければ、画面の様子を依頼者に伝えて終える。

```sh
hc wait '<terminal>' --timeout 30 >/dev/null; herdr-app ls | jq -c --arg t '<terminal>' '.spaces[].tabs[].terminals[] | select(.terminal == $t) | {app, status}'; hc read '<terminal>' | tail -40
```

`hc wait` は、タブのコマンドが動いている間は 30 秒待って戻る。エージェントが動き始めると、作業が止まった時点で早めに戻ることもある。どちらも正常。terminal のアドレスは必ず付ける（省くと、どの terminal かを尋ねるエラーになる）。

画面ごとの判断:

- `app` が `null` で、`gh wt` の進み具合が出ている: まだ作っている。繰り返す。
- `app` がエージェントの名前（Claude なら `claude-code`）になり、指示の本文が出て動き始めている: 渡せた。フォルダーを信頼するかの確認などで止まっていたら、依頼者にそのタブで答えてもらうよう伝える。
- `app` が `null` のままシェルのプロンプトに戻っている: `gh wt` かエージェントの起動が失敗した。画面のエラーを依頼者に伝える。`gh wt` は成功してエージェントだけ失敗したときは、起動スクリプトの 1 行目を `gh wt <フォルダー名>` にして 2 行目を消す。指示ファイルのパスとエージェントのコマンドを確かめてから、同じタブで `hc send '<terminal>' "sh '<起動スクリプトのパス>'"` を実行して起動し直す。

渡せたら、worktree のパス、ブランチ名、terminal のアドレスを依頼者に伝えて終える。

## やらないこと

- 尋ねる前や指示を書く前に、コードを新しく調べない。調べものは引き継ぎ先に任せる。
- 引き継いだ作業を自分で続けない。相手の完了も待たない。
- 引き継ぎ先を `hc run` で起動しない。自分の子になり、自分が終わると一緒に止まり、相手の様子が自分に届き続ける。
- `herdr-app do tab.new` や `space.new` がエラーやタイムアウトで戻っても、すぐ作り直さない。`herdr-app ls` で、タブや space ができていないか確かめてからにする。
