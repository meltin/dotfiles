#!/bin/bash
# Claude Code の PreToolUse hook（matcher: Bash）。
# git commit の Co-Authored-By: Claude 行が「Claude <モデル名> <effort> <noreply@anthropic.com>」の形でなければ拒否する。
# モデル名はハーネスが渡す行に任せ、ここでは中身を検証しない（1 語以上あることだけ見る）。
# effort は stdin の .effort.level、無ければ $CLAUDE_EFFORT。どちらも無ければモデル名の有無だけ見る。
# 対象外: -F やエディタでのコミット、Co-Authored-By: Claude 行の無いコミット。
# 行頭に限らず照合するため、本文中で素の署名を引用したコミットも拒否される（安全側に倒している）。
# 動作確認: bash ~/.claude/hooks/commit-attribution-guard.test.sh
input=$(cat)
cmd=$(jq -r '.tool_input.command // ""' <<<"$input")
[[ "$cmd" =~ git[[:space:]].*commit ]] || exit 0

lines=$(grep -i 'co-authored-by:[[:space:]]*claude' <<<"$cmd") || exit 0

effort=$(jq -r '.effort.level // ""' <<<"$input")
effort=${effort:-${CLAUDE_EFFORT:-}}
effort_title="$(tr '[:lower:]' '[:upper:]' <<<"${effort:0:1}")${effort:1}"

shopt -s nocasematch
if [[ -n "$effort" ]]; then
  re="co-authored-by: claude [^<]+ ${effort} <noreply@anthropic\.com>"
  expected="ハーネスが渡した Co-Authored-By 行のモデル名の後ろに effort（${effort_title}）を足した形（Co-Authored-By: Claude <モデル名> ${effort_title} <noreply@anthropic.com>）"
else
  re="co-authored-by: claude [^<]+ <noreply@anthropic\.com>"
  expected="ハーネスが渡した Co-Authored-By 行のまま（モデル名を省かない形）"
fi

while IFS= read -r line; do
  [[ "$line" =~ $re ]] && continue
  jq -n --arg r "Co-Authored-By の行が規定の形になっていません: ${line}。${expected}に書き直してコミットし直してください。" \
    '{hookSpecificOutput:{hookEventName:"PreToolUse",permissionDecision:"deny",permissionDecisionReason:$r}}'
  exit 0
done <<<"$lines"
