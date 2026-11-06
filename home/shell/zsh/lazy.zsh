# widget definitions (moved from nonlazy.zsh to reduce synchronous startup cost)
function _backward-delete-char-clear() {
  zle backward-delete-char
  zle reset-prompt
}
zle -N _backward-delete-char-clear
bindkey '^?' _backward-delete-char-clear

function _history-beginning-search-backward-end {
  if [[ $BUFFER != "${_hbs_expected:-}" ]]; then
    _hbs_prefix_len=$CURSOR
  fi
  CURSOR=$_hbs_prefix_len
  zle .history-beginning-search-backward
  CURSOR=$#BUFFER
  _hbs_expected=$BUFFER
  unset POSTDISPLAY
}
zle -N _history-beginning-search-backward-end

function _history-beginning-search-forward-end {
  if [[ $BUFFER != "${_hbs_expected:-}" ]]; then
    _hbs_prefix_len=$CURSOR
  fi
  CURSOR=$_hbs_prefix_len
  zle .history-beginning-search-forward
  CURSOR=$#BUFFER
  _hbs_expected=$BUFFER
  unset POSTDISPLAY
}
zle -N _history-beginning-search-forward-end

bindkey "^[[A" _history-beginning-search-backward-end
bindkey "^[[B" _history-beginning-search-forward-end

# custom functions
chpwd() {
  if [[ $PWD != $HOME ]]; then
    ls
  fi
}

tp() {
  if [ -z "$1" ]; then
    printf "Command: \e[90mtp\e[0m\n"
    printf "Description: \e[32mCreate a file and its parent directories in one step if they don't exist.\e[0m\n"
    printf "Usage: \e[90mtp <file-path>\e[0m\n"
    printf "Example: \e[90mtp /path/to/your/file.txt\e[0m\n"
  else
    mkdir -p -- "$(dirname -- "$1")" && touch -- "$1"
  fi
}

mcd() {
  if [ -z "$1" ]; then
    printf "Command: \e[90mmcd\e[0m\n"
    printf "Description: \e[32mCreate a directory and move into it in one step.\e[0m\n"
    printf "Usage: \e[90mmcd <dir-name>\e[0m\n"
    printf "Example: \e[90mmcd /path/to/your/directory\e[0m\n"
  else
    mkdir -p -- "$1" && cd -- "$1"
  fi
}

toggle-env() {
  local dir="${1:-.}"
  if [ -f "$dir/.env.stg" ]; then
    mv "$dir/.env.local" "$dir/.env.dev"
    mv "$dir/.env.stg"   "$dir/.env.local"
    echo "DEV -> STG"
  elif [ -f "$dir/.env.dev" ]; then
    mv "$dir/.env.local" "$dir/.env.stg"
    mv "$dir/.env.dev"   "$dir/.env.local"
    echo "STG -> DEV"
  else
    echo "error: .env.stg / .env.dev が見つかりません" >&2
  fi
}

codex-exec-fast() {
  codex exec \
    -m gpt-5.4-mini \
    -c 'model_reasoning_effort="low"' \
    -c 'web_search="disabled"' \
    --disable image_generation \
    "$@"
}

codex:commit() {
  codex-exec-fast 'Use the `commit` skill.'
}

codex:create-pr() {
  codex-exec-fast 'Use the `create-pr` skill.'
}

# interactive-only aliases
[[ -o interactive ]] && alias cd='z'
[[ -o interactive ]] && alias cdi='zi'

if (( $+commands[awsctx] )); then
  source <(awsctx activate zsh --aws-wrapper)
fi

# gh-wt (meltin/gh-wt): gh wt は移動先のパスを出すだけなので、cd はこの関数が行う。
# -l / --help 以外の gh wt を横取りし、出力の最後の行がディレクトリならそこへ移動する
gh() {
  if [[ $1 == wt && $2 != (-l|--list|-h|--help) ]]; then
    local out rc last
    out=$(command gh "$@"); rc=$?
    last=${out##*$'\n'}
    if [[ -d $last ]]; then
      [[ $out == *$'\n'* ]] && print -r -- "${out%$'\n'*}"
      cd -- "$last"
    elif [[ -n $out ]]; then
      print -r -- "$out"
    fi
    return $rc
  else
    command gh "$@"
  fi
}

# Orca のコマンド付きターミナル（Setup など）では __orca_prompt_mark が add-zle-hook-widget の
# ディスパッチャから呼ばれ、さらに直前の zle-line-init としてディスパッチャを呼び返して循環する
# （_zsh_autosuggest_widget_modify の FUNCNEST エラー）。呼び返し先を空にして1周で止める
if [[ $TERM_PROGRAM == Orca ]]; then
  _orca_break_line_init_loop() {
    [[ ${__orca_prev_line_init_fn-} == azhw:zle-line-init ]] || return 0
    local -a hooks
    zstyle -a zle-line-init widgets hooks
    (( ${hooks[(I)*:user:__orca_prompt_mark]} )) && __orca_prev_line_init_fn=
  }
  precmd_functions+=(_orca_break_line_init_loop)
fi
