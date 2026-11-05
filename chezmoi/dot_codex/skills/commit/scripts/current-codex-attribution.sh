#!/usr/bin/env bash

set -euo pipefail

codex_home="${CODEX_HOME:-$HOME/.codex}"
model=""
effort=""

fail_provenance() {
  printf 'Unable to confirm Codex provenance: %s. Commit aborted.\n' "$1" >&2
  exit 1
}

[[ -n "${CODEX_THREAD_ID:-}" ]] || fail_provenance 'CODEX_THREAD_ID is not set'
command -v rg >/dev/null 2>&1 || fail_provenance 'rg is not available'
command -v jq >/dev/null 2>&1 || fail_provenance 'jq is not available'

session_file="$(
  {
    rg --files "$codex_home/sessions" 2>/dev/null |
      rg "/rollout-[^/]*-${CODEX_THREAD_ID}(_[[:xdigit:]-]+)?\.jsonl$" |
      sort |
      tail -n 1
  } || true
)"

[[ -n "$session_file" ]] || fail_provenance 'the current session JSONL was not found'

# Resumed desktop rollouts can have a session-id suffix; verify the owner too.
head -n 1 "$session_file" |
  jq -e --arg thread "$CODEX_THREAD_ID" '.type == "session_meta" and .payload.id == $thread' >/dev/null ||
  fail_provenance 'the selected session does not belong to the current thread'

session_values="$(
  {
    jq -r '
      select(.type == "turn_context")
      | [.payload.model // "", (.payload.effort // .payload.collaboration_mode.settings.reasoning_effort // "")]
      | @tsv
    ' "$session_file" |
    tail -n 1
  } || true
)"

[[ -n "$session_values" ]] || fail_provenance 'the current session has no turn_context record'

IFS=$'\t' read -r model effort <<< "$session_values"
[[ -n "$model" ]] || fail_provenance 'the latest turn_context has no model'

title_case() {
  printf '%s\n' "$1" |
    tr '_-' '  ' |
    awk '{ for (i = 1; i <= NF; i++) $i = toupper(substr($i, 1, 1)) tolower(substr($i, 2)); print }'
}

format_model() {
  local value="$1"

  if [[ "$value" == gpt-* ]]; then
    local remainder="${value#gpt-}"
    local version="${remainder%%-*}"
    local suffix=""

    if [[ "$remainder" == *-* ]]; then
      suffix="${remainder#*-}"
    fi

    printf 'GPT-%s' "$version"
    if [[ -n "$suffix" ]]; then
      printf ' %s' "$(title_case "$suffix")"
    fi
  else
    title_case "$value"
  fi
}

formatted_model="$(format_model "$model")"
formatted_effort="$(title_case "$effort")"

if [[ -n "$formatted_effort" ]]; then
  printf 'Co-authored-by: Codex %s %s <noreply@openai.com>\n' "$formatted_model" "$formatted_effort"
else
  printf 'Co-authored-by: Codex %s <noreply@openai.com>\n' "$formatted_model"
fi
