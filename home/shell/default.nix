{ ... }:
{
  imports = [
    ./zsh.nix
    ./nova.nix
    ./zoxide.nix
    ./direnv.nix
    ./mise.nix
    ./eza.nix
    ./fzf.nix
  ];

  # Hardcoded output of `brew shellenv` to avoid spawning brew binary (~15ms).
  # The output is constant on Apple Silicon, so safe to inline.
  programs.zsh.envExtra = ''
    # cmux restores scrollback by replaying a temp file during shell bootstrap.
    # Drop that replay so a restored terminal starts at the live prompt.
    if [[ -n "''${CMUX_RESTORE_SCROLLBACK_FILE:-}" && -n "''${CMUX_SHELL_INTEGRATION_DIR:-}" ]]; then
      /bin/rm -f -- "$CMUX_RESTORE_SCROLLBACK_FILE" >/dev/null 2>&1 || true
      unset CMUX_RESTORE_SCROLLBACK_FILE
    fi

    # Rex prepends REX_BIN_DIR to PATH for its terminals, but nix-darwin's /etc/zshenv
    # rebuilds PATH from scratch and drops it. Put it back so `rex` resolves inside Rex.
    if [[ -n "''${REX_BIN_DIR-}" && ":$PATH:" != *":$REX_BIN_DIR:"* ]]; then
      path=("$REX_BIN_DIR" $path)
    fi
  '';

  programs.zsh.profileExtra = ''
    export HOMEBREW_PREFIX="/opt/homebrew"
    export HOMEBREW_CELLAR="/opt/homebrew/Cellar"
    export HOMEBREW_REPOSITORY="/opt/homebrew"
    export PATH="/opt/homebrew/bin:/opt/homebrew/sbin''${PATH:+:''${PATH}}"
    export MANPATH="/opt/homebrew/share/man''${MANPATH:+:''${MANPATH}}:"
    export INFOPATH="/opt/homebrew/share/info:''${INFOPATH:-}"
  '';

  home.sessionPath = [
    "$HOME/bin"
    "$HOME/.local/bin"
    "$HOME/.local/share/mise/shims"
    "$HOME/.bun/bin"
  ];

  home.sessionVariables = {
    LANG = "en_US.UTF-8";
    EDITOR = "vim";
    GH_PAGER = "less -RFX";
    PAGER = "less -RFX";
    PINACT_KEYRING_ENABLED = "true";
    HOMEBREW_FORBIDDEN_FORMULAE = "node npm pnpm yarn bun deno go awscli bat chezmoi direnv eza fastfetch fd fzf gh lefthook mise starship turbo zoxide claude ripgrep";
    ZENO_HOME = "$HOME/.config/zeno";
  };
}
