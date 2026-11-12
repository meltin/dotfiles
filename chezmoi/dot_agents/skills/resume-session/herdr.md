# resume-session: Herdr

## 起動スクリプト

```sh
cd '<cwd>' && claude --resume '<セッション ID>' "$(cat '<指示ファイル>')"
exec "${SHELL:-/bin/zsh}" -l
```

- 最後の行は、エージェントが終わったあとも、そのフォルダーにシェルを残すため

## タブで再開する

開く場所は cwd の worktree にいる space のタブ（なければ新しい space）。

```sh
target=$(git -C '<cwd>' rev-parse --show-toplevel 2>/dev/null || echo '<cwd>')
space=$(herdr-app ls | jq -r '.spaces[] | .id as $s | .tabs[].terminals[].terminal | "\($s) \(.)"' | while read -r s t; do
  cwd=$(hc get "$t" --json | jq -r '.foreground.cwd // .cwd')
  [ "$(git -C "$cwd" rev-parse --show-toplevel 2>/dev/null || echo "$cwd")" = "$target" ] && { echo "$s"; break; }
done)
if [ -n "$space" ]; then
  herdr-app do tab.new "$(jq -nc --arg s "$space" --arg f '<cwd>' --arg l '<起動スクリプト>' '{space: $s, folder: $f, argv: ["sh", $l]}')"
else
  herdr-app do space.new "$(jq -nc --arg f '<cwd>' --arg l '<起動スクリプト>' '{folder: $f, argv: ["sh", $l]}')"
fi
```

出力の `terminal`（`t1c` のような値）を控える。Herdr は開いたタブを表示する（元のタブには戻さない）。

## 届いたか確かめる

```sh
hc wait '<terminal>' --timeout 10 >/dev/null; hc get '<terminal>' --json | jq -c '{app: .status.app, state: .status.state}'; hc read '<terminal>' | tail -30
```

- `app` が `claude-code`（Codex なら `codex`）になり、指示の本文が出ている: 渡せた。確認待ちで止まっていたら、依頼者にそのタブで答えてもらう
- `app` が `null` のまま、画面に質問（フォルダーを信頼するかなど）が出ている: 依頼者にそのタブで答えてもらう
- シェルのプロンプトに戻っている: 起動に失敗した。画面のエラーを確かめ、セッション ID、cwd、指示ファイルのパスを見直す

伝える ID は terminal のアドレス。

## やらないこと

- `herdr-app do` がエラーやタイムアウトで戻っても、すぐ作り直さない（同じセッションを 2 回再開すると会話が分かれる）。`herdr-app ls` で、タブや space ができていないか確かめる
