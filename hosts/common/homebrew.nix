{ username, ... }:
let
  # Third-party taps. Homebrew 6.0+ refuses to load formulae/casks from these
  # unless they are trusted, so this list is also the source of truth for the
  # generated ~/.homebrew/trust.json below.
  taps = [
    "dimentium/autoraise"
    "k1low/tap"
    "kayac/tap"
    "unmett/tap"
    "manaflow-ai/cmux"
    "productdevbook/tap"
    "stablyai/orca"
    "watrix811/tap"
    "fif7y/tap"
    {
      name = "yksr-melt/meltype";
      clone_target = "https://github.com/yksr-melt/Meltype.git";
    }
  ];
  # Trusting a whole tap covers every formula and cask it provides.
  trustJson = builtins.toJSON {
    trustedtaps = map (tap: if builtins.isString tap then tap else tap.name) taps;
  };
in
{
  homebrew = {
    enable = true;
    onActivation = {
      cleanup = "zap";
      autoUpdate = true;
      upgrade = true;
      extraFlags = [ "--force-cleanup" ];
    };
    inherit taps;
    brews = [
      "create-dmg"
      "tree"
      "k1low/tap/git-wt"
      "k1low/tap/mo"
      "kayac/tap/ecspresso"
      "unmett/tap/muu"
    ];
    casks = [
      "1password@beta"
      "adobe-creative-cloud"
      "alt-tab"
      "arc"
      "dimentium/autoraise/autoraiseapp"
      "azookey"
      "codex"
      "cursor"
      "dbeaver-community"
      "docker-desktop"
      "figma"
      "font-udev-gothic"
      "font-udev-gothic-nf"
      "ghostty"
      "google-chrome"
      "karabiner-elements"
      "logi-options+"
      "microsoft-office"
      "notion"
      "postman"
      "raycast"
      "rectangle"
      "session-manager-plugin"
      "slack"
      "visual-studio-code"
      "zed"
      "zoom"
      "codexbar"
      "manaflow-ai/cmux/cmux"
      "productdevbook/tap/portkiller"
      "stablyai/orca/orca"
      "t3-code"
      "capsomnia"
      "watrix811/tap/pieto-timer"
      "fif7y/tap/dimble"
      "yksr-melt/meltype/meltype"
    ];
  };

  # Write the trust file before the homebrew bundle runs (preActivation precedes
  # the homebrew activation script). The activation runs as root, so the file is
  # chowned back to the primary user that actually invokes `brew`.
  system.activationScripts.preActivation.text = ''
    homebrewDir="/Users/${username}/.homebrew"
    mkdir -p "$homebrewDir"
    printf '%s\n' '${trustJson}' > "$homebrewDir/trust.json"
    chown ${username} "$homebrewDir" "$homebrewDir/trust.json"
    chmod 600 "$homebrewDir/trust.json"
  '';
}
