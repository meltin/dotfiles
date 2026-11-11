#!/bin/bash
# Claude Code の PreToolUse hook（matcher: Bash）。
# hc keys と --force 付きの hc send を拒否する。司令塔が子の確認画面（許可の確認など）にキー操作で代わりに答えないようにするため。
# hc send（--force なし）、hc run、hc wait などは通す。
# 子の Bash のたびに走るので、jq と grep を 1 回ずつ呼ぶだけにしている。
# コマンド文字列のどこにあっても照合するため、コミットメッセージや hc send の本文で hc keys に触れただけでも拒否される（安全側に倒している）。
# 同じく、hc send より後ろに --force があれば、別のコマンドの --force（hc send ... && git push --force）でも拒否する。
# 改行は空白に置き換えてから照合する（複数行の本文の後ろに --force を付けた hc send を見逃さないため）。
# 動作確認: bash hc-keys-guard.test.sh <この hook のパス>
jq -r '.tool_input.command // "" | gsub("\n"; " ")' |
  grep -Eq '(^|[^[:alnum:]_-])hc[[:space:]]+(keys([[:space:]]|$)|send[[:space:]](.*[[:space:]])?--force([[:space:];&|)]|$))' ||
  exit 0
echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"子の確認画面に司令塔が代わりに答えない。どの子が何を待っているかを依頼者に伝え、依頼者にそのタブで答えてもらう。"}}'
