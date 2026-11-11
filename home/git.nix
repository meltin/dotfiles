{
  config,
  lib,
  pkgs,
  ...
}:
let
  gitVersion = "2.56.0";

  userEmail = "83203852+meltin@users.noreply.github.com";
  # 改名前に署名したコミットもローカルで検証できるようにする。
  previousUserEmails = [
    "83203852+unmett@users.noreply.github.com"
    "83203852+ixxq@users.noreply.github.com"
  ];

  # ローカルで `git log --show-signature` を通すための信頼済み公開鍵。
  # 鍵の実体は不要なので、そのホストに存在しない鍵も載せてよい。
  # 新しい鍵を作ったらここに追記する。ローカルで過去のコミットを検証するため、
  # 退役鍵は削除せず、必要なら `valid-before` で有効期間を制限する。
  # ローテーション手順は docs/secure-enclave-signing.md を参照。
  allowedSignerKeys = [
    # 1Password (移行前の M4Air / M4Pro) — SHA256:G/X9g4PrQznsy2+Qx5MUbI7X1e3ZT1G6KT2CTMP3m3k
    "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIF+zJB91Fifv36IetC+AhWcBE+a9poI/U+A6MlLfABoa"
    # Secure Enclave (M4Pro) — SHA256:AsbsNi30tI7r4kUqNSHew9DI86raUYeHeYP3MLCjpck
    "sk-ecdsa-sha2-nistp256@openssh.com AAAAInNrLWVjZHNhLXNoYTItbmlzdHAyNTZAb3BlbnNzaC5jb20AAAAIbmlzdHAyNTYAAABBBE3fdVRsCoAJtcjjG+is4FILynjzM42+czwaeQfBiuP+8Kr/8YGe/zh/6pYG2v7ARKrywp+XHcv+d7Y1+E7wSOIAAAAEc3NoOg=="
    # Secure Enclave (M4Air) — SHA256:1ByRGYz/aH3EATzuqXW4ILVyhuDL8VpsPzKIKeGnjmY
    "sk-ecdsa-sha2-nistp256@openssh.com AAAAInNrLWVjZHNhLXNoYTItbmlzdHAyNTZAb3BlbnNzaC5jb20AAAAIbmlzdHAyNTYAAABBBC81X+w5FX+C+U1hBdITtASqaACDh3CJc4bciFffS8utlurYslKPg+uBknGBDwIVYtTjUotYtE+NqiFJow/vJpIAAAAEc3NoOg=="
  ];
  allowedSignersFile = "${config.home.homeDirectory}/.ssh/allowed_signers";
in
{
  home.file.".ssh/allowed_signers".text = lib.concatMapStrings (
    key: "${lib.concatStringsSep "," ([ userEmail ] ++ previousUserEmails)} ${key}\n"
  ) allowedSignerKeys;

  # Orca のワークツリー setup フック。各リポジトリの orca.yaml（グローバル ignore）から呼ぶ。
  # Orca は orca.yaml を新しいワークツリー側から読むため、.worktreeinclude（これもグローバル ignore）に
  # orca.yaml を書いて運ばせる
  home.file.".local/bin/orca-wt-setup" = {
    source = ./orca-wt-setup.sh;
    executable = true;
  };

  programs.git = {
    enable = true;
    package = pkgs.git.overrideAttrs (oldAttrs: {
      version = gitVersion;
      src = pkgs.fetchurl {
        url = "https://www.kernel.org/pub/software/scm/git/git-${gitVersion}.tar.xz";
        hash = "sha256-JsVsKWs4wGlbJvqV9HXx0BcE0tOOc0ZcowsLL13HidM=";
      };
      patches = builtins.filter (
        patch:
        !(pkgs.lib.hasInfix "expect-gui--askyesno-failure-in-t1517.patch" "${patch}")
        && !(pkgs.lib.hasInfix "osxkeychain-link-rust_lib.patch" "${patch}")
        && !(pkgs.lib.hasInfix "darwin-unicode-filename-fix.patch" "${patch}")
      ) oldAttrs.patches;
      meta = oldAttrs.meta // {
        changelog = "https://github.com/git/git/blob/v${gitVersion}/Documentation/RelNotes/${gitVersion}.adoc";
      };
    });

    # 既定は 1Password の SSH agent。Secure Enclave に移行済みのホストは
    # hosts/<hostname>/default.nix で key/signer を上書きする。
    # 詳細は docs/secure-enclave-signing.md
    signing = {
      key = lib.mkDefault "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIF+zJB91Fifv36IetC+AhWcBE+a9poI/U+A6MlLfABoa";
      signByDefault = true;
      format = "ssh";
      signer = lib.mkDefault "/Applications/1Password.app/Contents/MacOS/op-ssh-sign";
    };

    settings = {
      user = {
        name = "meltin";
        email = userEmail;
      };
      gpg.ssh.allowedSignersFile = allowedSignersFile;
      init.defaultBranch = "main";
      pull.ff = "only";
      push.autoSetupRemote = true;
      wt = {
        basedir = "${config.home.homeDirectory}/dev/worktrees/{gitroot}";
        copyignored = true;
        copyuntracked = true;
        copymodified = true;
        hook = "test ! -f package.json || ni";
      };
    };

    ignores = [
      ".DS_Store"
      "*.log"
      "node_modules/"
      "dist/"
      "*.swp"
      "**/.claude/settings.local.json"
      "**/.codex/"
      "**/CLAUDE.local.md"
      "**/.serena/"
      "**/.review/"
      "**/.docs/"
      "**/.env.stg"
      "**/.env.dev"
      "**/.pnpm-store/"
      "**/.envrc"
      "**/.playwright-mcp/"
      "**/mise.local.toml"
      "orca.yaml"
      ".worktreeinclude"
    ];
  };
}
