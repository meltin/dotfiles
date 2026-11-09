{ inputs, pkgs, ... }:
let
  # Remove these overrides once nixpkgs includes awscli2 >= 2.37.2.
  awsCrt = pkgs.python3Packages.awscrt.overridePythonAttrs (old: rec {
    version = "0.37.0";
    src = pkgs.fetchPypi {
      inherit (old) pname;
      inherit version;
      hash = "sha256-ni3a3GCQhLX2Cv+4uH53ME/tZOJx4rK3VYGGz2XYHlo=";
    };
  });
  awsCli = pkgs.awscli2.overridePythonAttrs (old: rec {
    version = "2.37.3";
    src = old.src.override {
      tag = version;
      hash = "sha256-1T1EhgZmRcUFKc1DNNXTjFAPIvVOMimYwsZ/EPuUzRI=";
    };
    dependencies = map (
      dependency: if (dependency.pname or "") == "awscrt" then awsCrt else dependency
    ) old.dependencies;
  });
in
{
  # zoxide, eza, fzf, direnv are managed by programs.* modules (home/shell/*.nix)
  # nova is managed by home/shell/nova.nix
  # gh is managed by programs.gh (home/gh.nix)
  home.packages = with pkgs; [
    # Language runtimes & package managers
    # node is provided by mise (programs.mise) — keep nodejs OUT of nix
    go
    fish
    pnpm
    yarn
    bun
    deno
    uv
    # CLI tools
    actionlint
    awsCli
    bat
    chezmoi
    fd
    ripgrep
    ni
    turbo
    fastfetch
    hyperfine
    lefthook
    inputs.ccsession.packages.${stdenv.hostPlatform.system}.default
  ];
}
