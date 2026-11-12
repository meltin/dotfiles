# resume-session: Rex

## 起動スクリプト

```sh
cd '<cwd>' && exec claude --resume '<セッション ID>' "$(cat '<指示ファイル>')"
```

## タブで再開する

リポジトリ名の Rex のセッションを探し、あればタブを足し、なければセッションを作る。タブの作業ディレクトリは cwd にする（別のフォルダーからだと、セッションが見つからないか、別の場所で作業が進む）。

```sh
launcher='<起動スクリプト>'
dir='<cwd>'
repo=$(basename "$(dirname "$(git -C "$dir" rev-parse --path-format=absolute --git-common-dir)")")
sid=$(rex ls --json | jq -r --arg l "$repo" 'first(.sessions[] | select(.label == $l) | .session_id) // empty')
if [ -n "$sid" ]; then
  echo "$sid"
  rex window new -s "$sid" -c "$dir" --focus=false --json -- sh "$launcher"
else
  rex new "$repo" -c "$dir" --json -- sh "$launcher"
fi
```

- タブに名前（`rex window new` の LABEL、`rex new` の `--window`、`rex window rename`）を付けない（サイドバーがその名前で固定され、エージェントが付ける要約が出なくなる）
- セッション ID とブロック ID を控える。タブを足したときは出力した `sid` と `.block_ids[0]`、セッションを作ったときは `.session_id` と `.initial_windows[0].block_ids[0]`

## 届いたか確かめる

読むのは起動したそのタブだけ。`-s` と `-b` を必ず付ける（省くとフォーカスのあるブロック、つまり依頼者のシェルを読むことがある）。

```sh
rex wait -s '<session_id>' '<block_id>' --for 10s; rex capture -s '<session_id>' -b '<block_id>' --trim | tail -40
```

- `rex wait` が `wait timed out` のエラーで戻り、指示の本文が出ている: 渡せた。フォルダーを信頼するかの確認などで止まっていたら、依頼者にそのタブで答えてもらう
- `rex wait` がエラーなしですぐ戻り、`rex capture` が `not found` になる: 起動に失敗してタブが閉じた。セッション ID、cwd、指示ファイルのパスを確かめてから、タブを開き直す

伝える ID は Rex のセッション ID。

## やらないこと

- `rex new` や `rex window new` がタイムアウトしても、すぐ作り直さない（同じセッションを 2 回再開すると会話が分かれる）。`rex ls --json` と `rex session inspect '<session_id>' --json` で、セッションやタブができていないか確かめる
