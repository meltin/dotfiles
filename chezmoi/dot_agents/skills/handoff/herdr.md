# handoff: Herdr

## 起動スクリプト

```sh
wt_dir=$(gh wt -b '<ブランチ名>' '<フォルダー名>' '<start-point>') && [ -d "$wt_dir" ] || exit 1
git -C "$wt_dir" branch --unset-upstream 2>/dev/null
cd "$wt_dir" && claude "$(cat '<指示ファイル>')"
exec "${SHELL:-/bin/zsh}" -l
```

- 最後の行は、エージェントが終わったあとも worktree の中にシェルを残すため（残さないと、space が space を作ったフォルダーに戻る）

## タブを開く

開く場所は worktree で決める。新しく作る worktree は新しい space。すでにある worktree は、その worktree にいる space のタブ（なければ新しい space）。

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

## 届いたか確かめる

```sh
hc wait '<terminal>' --timeout 30 >/dev/null; hc get '<terminal>' --json | jq -c '{app: .status.app, state: .status.state}'; hc read '<terminal>' | tail -30
```

- `app` が `null` で、`gh wt` の進み具合が出ている: まだ作っている。繰り返す
- `app` が `claude-code`（Codex なら `codex`）になり、指示の本文が出ている: 渡せた。確認待ちで止まっていたら、依頼者にそのタブで答えてもらう
- `app` が `null` のまま、画面に質問（フォルダーを信頼するかなど）が出ている: 依頼者にそのタブで答えてもらう
- シェルのプロンプトに戻っている: `gh wt` かエージェントの起動に失敗した。画面のエラーを伝える

伝える ID は terminal のアドレス。

## やらないこと

- 相手を `hc run` で起動しない（自分の子になり、自分が終わると一緒に止まる）
- `herdr-app do` がエラーやタイムアウトで戻っても、すぐ作り直さない。`herdr-app ls` で、タブや space ができていないか確かめる
