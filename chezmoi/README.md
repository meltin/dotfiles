# chezmoi source

This directory is the chezmoi source tree for mutable dotfiles.

Nix owns packages, system settings, and stable Home Manager modules. chezmoi owns files that are edited by app UIs or day-to-day commands, such as Codex, Claude, SidePulse, Karabiner, Ghostty, mise, VS Code, and Cursor settings.

Meltype's user dictionary is managed at `private_Library/private_Application Support/Meltype/userdict.txt`. Each UTF-8 line contains a hiragana reading and its replacement, separated by a tab. Apply only the dictionary with `chezmoi apply --exclude scripts "$HOME/Library/Application Support/Meltype/userdict.txt"`, then restart Meltype to reload it.

After the user dictionary changes on this Mac, capture it with `chezmoi add "$HOME/Library/Application Support/Meltype/userdict.txt"` before applying dotfiles again.

SidePulse's six customized Python files are also managed here, under `dot_local/share/sidepulse/venv/lib/python3.13/site-packages/sidepulse`. Git records the upstream files before the customizations. See [SidePulse](../sidepulse/README.md) for the matching CLI version, LED settings, agent hooks, and restart / OFF / ON commands. `chezmoi apply` restores both settings and these Python files after installing that version.

## Local Setup

chezmoi normally creates its source tree at `~/.local/share/chezmoi`, but this repository keeps it under `~/.dotfiles/chezmoi`.

Configure that once per machine:

```sh
mkdir -p ~/.config/chezmoi
printf 'sourceDir = "%s"\n' "$HOME/.dotfiles/chezmoi" > ~/.config/chezmoi/chezmoi.toml
```

`~/.config/chezmoi/chezmoi.toml` is intentionally local and not managed by this repository. Without it, chezmoi will use the default source directory instead.

## Daily Usage

Check local changes before applying them:

```sh
chezmoi diff
```

Apply the files in this source tree to `$HOME`:

```sh
chezmoi apply
```

Capture changes made from app UIs:

```sh
chezmoi add ~/.codex/config.toml
chezmoi add ~/.config/karabiner/karabiner.json
chezmoi add ~/.config/mise/config.toml
```

## Switching Meltype distributions

`hosts/common/homebrew.nix` selects the upstream `yksr-melt/meltype/meltype` cask. Other distributions, such as `whitewater-png/meltype-for-mac`, install the same `~/Library/Input Methods/Meltype.app` and share `~/Library/Application Support/Meltype/`. Git tracks the Homebrew configuration and user dictionary; it does not track the installed app, preferences, or learning data. Back up that directory and `~/Library/Preferences/io.github.yksr-melt.inputmethod.Meltype.plist` under `~/Library/Application Support/Meltype-backups/` before switching; Nix and chezmoi do not create these snapshots automatically.

To switch:

1. Select ABC or Apple's Japanese input source.
2. Change the tap and cask entries in `hosts/common/homebrew.nix`.
3. Remove only the old cask, without `--zap`, then apply dotfiles to install the new one:

   ```sh
   brew uninstall --cask <old-cask>
   nix run .#switch
   ```

Run the uninstall before `nix run .#switch`: this repository uses Homebrew cleanup `zap`, which deletes the shared data directory when it removes the old cask. If the input source does not appear, run `"$HOME/Library/Input Methods/Meltype.app/Contents/MacOS/MeltypeRegisterInputSource" "$HOME/Library/Input Methods/Meltype.app"`, or log out and log back in.

## Notes

`README.md` is listed in `.chezmoiignore`, so this file is documentation for the source tree only and is not written to `$HOME`.
