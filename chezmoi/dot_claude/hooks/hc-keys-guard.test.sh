#!/bin/bash
# hc-keys-guard.sh の動作確認。bash hc-keys-guard.test.sh <hook のパス> で実行し、FAIL が出なければよい。
H="${1:-$(dirname "$0")/hc-keys-guard.sh}"
reason='子の確認画面に司令塔が代わりに答えない。どの子が何を待っているかを依頼者に伝え、依頼者にそのタブで答えてもらう。'
fail=0
t() { # 期待値(deny|pass), コマンド
  out=$(jq -n --arg c "$2" '{tool_name:"Bash",tool_input:{command:$c}}' | bash "$H")
  if [[ -z "$out" ]]; then
    got=pass
  elif [[ $(jq -r '.hookSpecificOutput | select(.permissionDecision == "deny") | .permissionDecisionReason' <<<"$out") == "$reason" ]]; then
    got=deny
  else
    got="bad output: $out"
  fi
  [[ $got == "$1" ]] && echo "ok   $1  $2" || { echo "FAIL $1  $2 ($got)"; fail=1; }
}
t deny 'hc keys t7 enter'
t deny 'hc send --force t7 "x"'
t deny 'hc send t7 "1" --force'
t deny 'hc send t7 "1" --force; hc wait t7'
t deny 'hc read t7 && hc keys t7 enter'
t deny 'for t in t7 t8; do hc keys $t enter; done'
t deny '/abs/path/hc keys t7 1'
t deny 'hc send t7 "a; b" --force'
t deny 'hc send t7 "a & b | c" --force'
t deny $'hc send t7 "line1\nline2" --force'
t deny $'hc read t7\nhc keys t7 enter'
t deny 'hc send t7 "x" && git push --force'
t pass 'hc send t7 "x"'
t pass $'hc send t7 "line1\nline2"'
t pass 'hc run --bg "npm test"'
t pass 'hc wait t7'
t pass 'hc send t7 "git push --force-with-lease で"'
t pass 'rhc keys x'
exit $fail
