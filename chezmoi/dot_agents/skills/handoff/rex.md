# handoff: Rex

## 起動スクリプト

```sh
wt_dir=$(gh wt -b '<ブランチ名>' '<フォルダー名>' '<start-point>') && [ -d "$wt_dir" ] || exec "${SHELL:-/bin/zsh}" -l
git -C "$wt_dir" branch --unset-upstream 2>/dev/null
cd "$wt_dir" && exec claude "$(cat '<指示ファイル>')"
```

- 1 行目の `|| exec ...` は、`gh wt` が失敗したときにエラーを画面に残したままシェルを開くため（Rex はコマンドが終わるとタブを閉じる）

## タブを開く

Rex のセッションはリポジトリごとに 1 つで、名前はリポジトリ名。あればタブを足し、なければセッションを作る。タブの作業ディレクトリは今いる worktree のルート（`gh wt` はそこから未コミットの変更を写す）。

```sh
launcher='<起動スクリプト>'
repo_root='<今いる worktree のルート>'
repo=$(basename "$(dirname "$(git rev-parse --path-format=absolute --git-common-dir)")")
sid=$(rex ls --json | jq -r --arg l "$repo" 'first(.sessions[] | select(.label == $l) | .session_id) // empty')
if [ -n "$sid" ]; then
  echo "$sid"
  rex window new -s "$sid" -c "$repo_root" --focus=false --json -- sh "$launcher"
else
  rex new "$repo" -c "$repo_root" --json -- sh "$launcher"
fi
```

- タブに名前（`rex window new` の LABEL、`rex new` の `--window`）を付けない（サイドバーがその名前で固定され、エージェントが付ける要約が出なくなる）
- セッション ID とブロック ID を控える。タブを足したときは出力した `sid` と `.block_ids[0]`、セッションを作ったときは `.session_id` と `.initial_windows[0].block_ids[0]`

## 届いたか確かめる

```sh
rex wait -s '<session_id>' '<block_id>' --for 30s; rex capture -s '<session_id>' -b '<block_id>' --trim | tail -40
```

- `rex wait` が `wait timed out` のエラーで戻る: 正常。タブのコマンドがまだ動いている
- `gh wt` の進み具合が出ている: まだ作っている。繰り返す
- 指示の本文が出て、エージェントが動き始めている: 渡せた。フォルダーを信頼するかの確認などで止まっていたら、依頼者にそのタブで答えてもらう
- `gh wt` のエラーのあとにシェルのプロンプトが出ている: `gh wt` が失敗した。画面のエラーを伝える
- `rex wait` がエラーなしですぐ戻り、`rex capture` が `not found` になる: タブが閉じた。エージェントの起動に失敗した。worktree はできているので、起動スクリプトを「すでにある worktree」の形に直し、指示ファイルのパスとエージェントのコマンドを確かめてから、タブを開き直す

伝える ID はセッション ID。

## やらないこと

- `rex new` や `rex window new` がタイムアウトしても、すぐ作り直さない。`rex ls --json` と `rex session inspect '<session_id>' --json` で、セッションやタブができていないか確かめる
