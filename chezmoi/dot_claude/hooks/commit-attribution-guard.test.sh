#!/bin/bash
# commit-attribution-guard.sh の動作確認。bash で実行し、FAIL が出なければよい。
H="$(dirname "$0")/commit-attribution-guard.sh"
fail=0
t() { # 名前, effort の JSON, コマンド, 期待値(deny|pass)
  out=$(jq -n --arg c "$3" --argjson e "$2" '{tool_input:{command:$c}} + $e' | env -u CLAUDE_EFFORT bash "$H")
  got=$([[ -n "$out" ]] && echo deny || echo pass)
  [[ $got == "$4" ]] && echo "ok   $1" || { echo "FAIL $1 ($got)"; fail=1; }
}
E='{"effort":{"level":"high"}}'
t bare         "$E" $'git commit -m "x\n\nCo-Authored-By: Claude <noreply@anthropic.com>"' deny
t effort-only  "$E" $'git commit -m "x\n\nCo-Authored-By: Claude High <noreply@anthropic.com>"' deny
t no-effort    "$E" $'git commit -m "x\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"' deny
t wrong-effort "$E" $'git commit -m "x\n\nCo-Authored-By: Claude Opus 5.5 Low <noreply@anthropic.com>"' deny
t good         "$E" $'git commit -m "$(cat <<\'EOF\'\nx\n\nCo-Authored-By: Claude Opus 5.5 High <noreply@anthropic.com>\nEOF\n)"' pass
t unknown-eff  '{}' $'git commit -m "x\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"' pass
t unknown-bare '{}' $'git commit -m "x\n\nCo-Authored-By: Claude <noreply@anthropic.com>"' deny
t non-commit   "$E" 'echo Co-Authored-By: Claude <noreply@anthropic.com>' pass
t no-trailer   "$E" 'git commit --amend --no-edit' pass
exit $fail
