# dotfiles

macOS dotfiles managed with Nix flakes, nix-darwin, and home-manager.

## Initial Setup

1. Install Xcode Command Line Tools and [Homebrew](https://brew.sh) (if not already installed):

   ```bash
   xcode-select --install
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Install [Determinate Nix](https://github.com/DeterminateSystems/nix-installer) (if not already installed) [^1]:

   ```bash
   curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install
   ```

3. Clone this repository:

   ```bash
   git clone https://github.com/unmett/dotfiles.git ~/.dotfiles
   ```

4. Configure chezmoi to use the source directory inside this repository:

   ```bash
   mkdir -p ~/.config/chezmoi
   printf '%s\n' 'sourceDir = "~/.dotfiles/chezmoi"' > ~/.config/chezmoi/chezmoi.toml
   ```

   This local config is intentionally not tracked by this repository.

5. Apply the nix-darwin configuration [^2] [^3]:

   ```bash
   # Replace <hostname> with your machine name (M4Pro, M4Air, etc.)
   sudo nix run nix-darwin -- switch --flake ~/.dotfiles#<hostname>
   ```

6. Apply mutable dotfiles managed by chezmoi:

   ```bash
   chezmoi apply
   ```

7. Reload your shell:

   ```bash
   exec zsh
   ```

[^1]: The first run may fail. If it does, just run the same command again and it should succeed.

[^2]: This sets `LocalHostName` and `ComputerName` via `scutil`, so it works as the initial hostname setup even if the machine has no custom hostname configured yet.

[^3]: If Homebrew is not installed, the command will fail with an installation prompt. Install Homebrew first (see step 1), then re-run this command.

## Daily Usage

Run these commands from the dotfiles directory (`~/.dotfiles`):

```bash
# Update flake.lock (fetch latest nixpkgs, nix-darwin, home-manager)
nix run .#update

# Build and apply configuration (Homebrew is also updated automatically)
nix run .#switch

# Dry run (build without applying)
nix run .#build

# Inspect mutable dotfiles managed by chezmoi
chezmoi diff

# Apply mutable dotfiles managed by chezmoi
chezmoi apply
```

> [!NOTE]
> If running from outside the dotfiles directory, replace `.` with the path to the repository (e.g., `nix run ~/.dotfiles#update`).

## SidePulse

[SidePulse settings and customizations](sidepulse/README.md) documents the default
and current LED behavior, restart / OFF / ON commands, and chezmoi-managed settings
and Python files. Git records the upstream files before the local customizations.

## Benchmark

Zsh startup time is continuously tracked in CI. Every push to main runs 50 iterations with [hyperfine](https://github.com/sharkdp/hyperfine) and records the results.

https://bench.ve62ca.me

> [!NOTE]
> These numbers are from GitHub Actions runners and may not reflect local performance. Use the trend to catch regressions, not as absolute measurements.
