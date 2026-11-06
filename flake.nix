{
  description = "meltin's dotfiles";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    nix-darwin = {
      url = "github:LnL7/nix-darwin";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    nova = {
      url = "github:meltin/nova";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs =
    inputs@{
      nixpkgs,
      nix-darwin,
      ...
    }:
    let
      system = "aarch64-darwin";
      pkgs = nixpkgs.legacyPackages.${system};
      nixGithubTokenHelpers = ''
        export_nix_github_token() {
          local github_token
          case "''${NIX_CONFIG-}" in
            *"github.com="*)
              return
              ;;
          esac

          if ! github_token=$(${pkgs.gh}/bin/gh auth token 2>/dev/null) || [ -z "$github_token" ]; then
            return
          fi

          if [ -n "''${NIX_CONFIG-}" ]; then
            export NIX_CONFIG="$(printf '%s\n%s' "$NIX_CONFIG" "extra-access-tokens = github.com=$github_token")"
          else
            export NIX_CONFIG="extra-access-tokens = github.com=$github_token"
          fi
        }
      '';
      mkDarwinConfig =
        { hostName, username }:
        nix-darwin.lib.darwinSystem {
          specialArgs = { inherit inputs username; };
          modules = [
            {
              networking.hostName = hostName;
              networking.computerName = hostName;
              nixpkgs.hostPlatform = system;
            }
            ./hosts/common
            ./hosts/${hostName}
          ];
        };
    in
    {
      darwinConfigurations."M4Pro" = mkDarwinConfig {
        hostName = "M4Pro";
        username = "t1190078";
      };
      darwinConfigurations."M4Air" = mkDarwinConfig {
        hostName = "M4Air";
        username = "u";
      };
      formatter.${system} = pkgs.nixfmt-tree;

      apps.${system} = {
        update = {
          type = "app";
          program = toString (
            pkgs.writeShellScript "flake-update" ''
              set -e
              ${nixGithubTokenHelpers}
              export_nix_github_token
              echo "Updating flake.lock..."
              nix flake update --flake "$HOME/.dotfiles"
              echo "Done! Run 'nix run .#switch' to apply changes."
            ''
          );
        };
        switch = {
          type = "app";
          program = toString (
            pkgs.writeShellScript "darwin-switch" ''
              set -eo pipefail
              HOST_NAME=$(scutil --get LocalHostName)
              echo "Updating Homebrew..."
              /opt/homebrew/bin/brew update
              echo "Building and switching to darwin configuration for $HOST_NAME..."
              ${nixGithubTokenHelpers}
              export_nix_github_token
              sudo -H --preserve-env=NIX_CONFIG nix run nix-darwin -- switch --flake "$HOME/.dotfiles#$HOST_NAME"
              echo "Done!"
            ''
          );
        };
        build = {
          type = "app";
          program = toString (
            pkgs.writeShellScript "darwin-build" ''
              set -e
              HOST_NAME=$(scutil --get LocalHostName)
              echo "Building darwin configuration for $HOST_NAME..."
              ${pkgs.nix-output-monitor}/bin/nom build "$HOME/.dotfiles#darwinConfigurations.$HOST_NAME.system"
              echo "Build successful! Run 'nix run .#switch' to apply."
            ''
          );
        };
      };
    };
}
