#!/usr/bin/env bash
# Pre-populate caches that zsh startup would otherwise generate lazily.
set -euo pipefail

zshrc="${1:-$HOME/.zshrc}"
cache_home="${XDG_CACHE_HOME:-$HOME/.cache}"
zsh_cache_dir="$cache_home/zsh"

if [[ ! -r "$zshrc" ]]; then
  echo "missing zshrc: $zshrc" >&2
  exit 1
fi

mkdir -p "$zsh_cache_dir"

cache_eval_command_available() {
  local command_string="$1"
  local -a words

  read -r -a words <<< "$command_string"
  for word in "${words[@]}"; do
    if [[ "$word" =~ ^[A-Za-z_][A-Za-z0-9_]*= ]]; then
      continue
    fi

    if [[ "$word" == */* ]]; then
      [[ -x "$word" ]]
    else
      command -v "$word" >/dev/null 2>&1
    fi
    return
  done

  return 1
}

warm_cache_eval() {
  local command_string="$1"
  local cache_file="$zsh_cache_dir/$(printf '%s' "$command_string" | tr ' /' '_').zsh"
  local cache_tmp="$cache_file.tmp"

  if ! cache_eval_command_available "$command_string"; then
    echo "skipping unavailable zsh cache: $command_string"
    return
  fi

  if [[ ! -s "$cache_file" ]]; then
    echo "warming zsh cache: $command_string"
    eval "$command_string" > "$cache_tmp"
    mv "$cache_tmp" "$cache_file"
  fi
}

while IFS= read -r command_string; do
  [[ -n "$command_string" ]] || continue
  warm_cache_eval "$command_string"
done < <(sed -nE 's/^[[:space:]]*(zsh-defer[[:space:]]+)?cache_eval "([^"]+)".*$/\2/p' "$zshrc")
