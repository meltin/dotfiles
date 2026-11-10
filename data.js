window.BENCHMARK_DATA = {
  "lastUpdate": 1794287502349,
  "repoUrl": "https://github.com/meltin/dotfiles",
  "entries": {
    "Zsh Startup Time": [
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "f69c702fd4a5f0395a5cc32e1decf7b381acc654",
          "message": "chore(ci): serve benchmark results from root of gh-pages",
          "timestamp": "2026-02-25T16:40:09+09:00",
          "tree_id": "ab05845e7367ee9816c4d0440f9854fe142f58db",
          "url": "https://github.com/mfyuu/dotfiles/commit/f69c702fd4a5f0395a5cc32e1decf7b381acc654"
        },
        "date": 1772005381566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 38.96,
            "range": "6.48 ms",
            "unit": "ms",
            "extra": "median: 38.96 ms\nmin: 37.21 ms\nmax: 67.3 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "4dd71448e3663a58f6ca2e34aded1ef89e2d8e5e",
          "message": "docs: add benchmark section to README",
          "timestamp": "2026-02-25T16:44:54+09:00",
          "tree_id": "8db9f9604ecb307fa3cddfdd74556c817c277803",
          "url": "https://github.com/mfyuu/dotfiles/commit/4dd71448e3663a58f6ca2e34aded1ef89e2d8e5e"
        },
        "date": 1772005657156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 44.69,
            "range": "16.13 ms",
            "unit": "ms",
            "extra": "median: 44.69 ms\nmin: 35.74 ms\nmax: 119.95 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0ae1f89d186d03bc3f31781eb4a70300d3cc36b",
          "message": "fix(shell): retain prefix during up-arrow history search (#3)\n\n* fix(shell): retain prefix during up-arrow history search (#2)\n\nfast-syntax-highlighting rewrites $LASTWIDGET, causing\nup-line-or-beginning-search to lose the original prefix on\nconsecutive invocations.\n\nReplace it with a custom wrapper around the builtin\n.history-beginning-search-backward that:\n- tracks continuation via $BUFFER comparison instead of $LASTWIDGET\n- moves cursor to end-of-line after each match\n- clears stale POSTDISPLAY left by zsh-autosuggestions\n\n* feat(ci): add PR benchmark workflow with composite actions\n\n- extract common steps into reusable composite actions\n- create setup-bench-env action for Nix install and environment setup\n- create run-benchmark action for hyperfine execution\n- add benchmark-pr.yml to run benchmarks on pull requests\n- refactor benchmark.yml to use composite actions\n- remove redundant zsh warmup (hyperfine --warmup handles it)\n\n* fix(ci): disable git commit signing in PR benchmark workflow\n\n- benchmark-action internally commits to gh-pages even with\n  save-data-file: false, causing failure due to missing 1Password\n  SSH signer in CI",
          "timestamp": "2026-02-26T08:20:02+09:00",
          "tree_id": "efa42bd2a01026ace59abf132eff5db16fddc18b",
          "url": "https://github.com/mfyuu/dotfiles/commit/c0ae1f89d186d03bc3f31781eb4a70300d3cc36b"
        },
        "date": 1772061766013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 45.51,
            "range": "9.24 ms",
            "unit": "ms",
            "extra": "median: 45.51 ms\nmin: 35.96 ms\nmax: 68.04 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e6f0f71c81d29c9173473495a5c6a053382c648",
          "message": "fix(M4Pro): add corporate SSL certificate config (#5)\n\n* fix(M4Pro): add corporate SSL certificate config for deno, node, and git\n\n* fix(ci): use GIT_SSL_CAINFO env var instead of git config sslCAInfo\n\n- programs.git.settings.http.sslCAInfo writes to .config/git/config\n- CI symlinks home-manager output, so sslCAInfo leaks into the runner\n- runner has no cert file at that path, causing git fetch to fail\n- use GIT_SSL_CAINFO env var instead (not written to git config)",
          "timestamp": "2026-02-27T11:47:53+09:00",
          "tree_id": "49689f4e53917b07c1e6c5328b35b049282b8f02",
          "url": "https://github.com/mfyuu/dotfiles/commit/4e6f0f71c81d29c9173473495a5c6a053382c648"
        },
        "date": 1772160865580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 37.2,
            "range": "2.41 ms",
            "unit": "ms",
            "extra": "median: 37.2 ms\nmin: 35.57 ms\nmax: 49.75 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b16e0a3bd748071f2ae62a2a085c4f8b3ac31ce",
          "message": "fix(M4Pro): add AWS_CA_BUNDLE for corporate SSL proxy (#7)\n\n- AWS CLI (Python-based) uses AWS_CA_BUNDLE env var to specify the CA certificate path\n- SSL_CERT_FILE also works, but AWS_CA_BUNDLE is preferred per AWS official documentation",
          "timestamp": "2026-02-27T12:24:25+09:00",
          "tree_id": "e2aa793da9e83b93ee5366f7de558fa5eba9cebf",
          "url": "https://github.com/mfyuu/dotfiles/commit/7b16e0a3bd748071f2ae62a2a085c4f8b3ac31ce"
        },
        "date": 1772162827759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 41.19,
            "range": "4.19 ms",
            "unit": "ms",
            "extra": "median: 41.19 ms\nmin: 39.76 ms\nmax: 59.57 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b14e393815e97ed1dc237298563a36efcc3a3843",
          "message": "feat: migrate repo path from ~/dev/dotfiles to ~/.dotfiles (#9)",
          "timestamp": "2026-02-27T12:45:50+09:00",
          "tree_id": "ba7a78cffd93ad083ca9259281e9853200bad240",
          "url": "https://github.com/mfyuu/dotfiles/commit/b14e393815e97ed1dc237298563a36efcc3a3843"
        },
        "date": 1772164144711,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 62.68,
            "range": "16.96 ms",
            "unit": "ms",
            "extra": "median: 62.68 ms\nmin: 31.53 ms\nmax: 102.27 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b14e393815e97ed1dc237298563a36efcc3a3843",
          "message": "feat: migrate repo path from ~/dev/dotfiles to ~/.dotfiles (#9)",
          "timestamp": "2026-02-27T12:45:50+09:00",
          "tree_id": "ba7a78cffd93ad083ca9259281e9853200bad240",
          "url": "https://github.com/mfyuu/dotfiles/commit/b14e393815e97ed1dc237298563a36efcc3a3843"
        },
        "date": 1772164923617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 38.92,
            "range": "3.72 ms",
            "unit": "ms",
            "extra": "median: 38.92 ms\nmin: 37.64 ms\nmax: 53.62 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a59e5da0dd8724790100c4fc78fe2f9998fa9a79",
          "message": "refactor(claude): update PR verification to focus on manual checks\n\n- change Verification section from CI checklist to acceptance criteria\n- remove auto-verified items (tests, lint, type checks) from template\n- add guidance for repository-specific verification sections\n- update parallel-review and review-merge to use `bunx ulid`",
          "timestamp": "2026-03-06T12:17:42+09:00",
          "tree_id": "0b7ba0303d45ee33a0279d583ff90821220a62bc",
          "url": "https://github.com/mfyuu/dotfiles/commit/a59e5da0dd8724790100c4fc78fe2f9998fa9a79"
        },
        "date": 1772767260481,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 54.02,
            "range": "10.94 ms",
            "unit": "ms",
            "extra": "median: 54.02 ms\nmin: 42.15 ms\nmax: 82.69 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a59e5da0dd8724790100c4fc78fe2f9998fa9a79",
          "message": "refactor(claude): update PR verification to focus on manual checks\n\n- change Verification section from CI checklist to acceptance criteria\n- remove auto-verified items (tests, lint, type checks) from template\n- add guidance for repository-specific verification sections\n- update parallel-review and review-merge to use `bunx ulid`",
          "timestamp": "2026-03-06T12:17:42+09:00",
          "tree_id": "0b7ba0303d45ee33a0279d583ff90821220a62bc",
          "url": "https://github.com/mfyuu/dotfiles/commit/a59e5da0dd8724790100c4fc78fe2f9998fa9a79"
        },
        "date": 1772767802120,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 62.51,
            "range": "27.72 ms",
            "unit": "ms",
            "extra": "median: 62.51 ms\nmin: 22.18 ms\nmax: 158.48 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a59e5da0dd8724790100c4fc78fe2f9998fa9a79",
          "message": "refactor(claude): update PR verification to focus on manual checks\n\n- change Verification section from CI checklist to acceptance criteria\n- remove auto-verified items (tests, lint, type checks) from template\n- add guidance for repository-specific verification sections\n- update parallel-review and review-merge to use `bunx ulid`",
          "timestamp": "2026-03-06T12:17:42+09:00",
          "tree_id": "0b7ba0303d45ee33a0279d583ff90821220a62bc",
          "url": "https://github.com/mfyuu/dotfiles/commit/a59e5da0dd8724790100c4fc78fe2f9998fa9a79"
        },
        "date": 1772768081183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 46.57,
            "range": "14.21 ms",
            "unit": "ms",
            "extra": "median: 46.57 ms\nmin: 40.66 ms\nmax: 97.32 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "6ceb5d0c43f7078b15ed4a8bbc316dbd7b312fb7",
          "message": "chore: update flake dependencies and add dbeaver-community\n\n- update home-manager, nix-darwin, and nixpkgs\n- add dbeaver-community to homebrew casks",
          "timestamp": "2026-03-06T13:03:50+09:00",
          "tree_id": "637cd05cc805f1b196e89d1f7f4dab47a61186d2",
          "url": "https://github.com/mfyuu/dotfiles/commit/6ceb5d0c43f7078b15ed4a8bbc316dbd7b312fb7"
        },
        "date": 1772770034389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 53.93,
            "range": "9.14 ms",
            "unit": "ms",
            "extra": "median: 53.93 ms\nmin: 43.43 ms\nmax: 92.83 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "6892d02e9471654f50b0d11156605f57d356df32",
          "message": "chore: update flake dependencies and add aqua-voice\n\n- update home-manager, nix-darwin, and nixpkgs dependencies\n- add aqua-voice cask to homebrew packages",
          "timestamp": "2026-03-10T10:22:05+09:00",
          "tree_id": "0ee80b6e2a6b6ed250150e8689b0589c19d260a2",
          "url": "https://github.com/mfyuu/dotfiles/commit/6892d02e9471654f50b0d11156605f57d356df32"
        },
        "date": 1773105917105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 57.31,
            "range": "14.88 ms",
            "unit": "ms",
            "extra": "median: 57.31 ms\nmin: 42.42 ms\nmax: 108.28 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a94aca94cca839032e6b9bb74bb46bed33283e64",
          "message": "chore: update flake dependencies and add fish shell\n\n- update home-manager and nixpkgs in flake.lock\n- add fish shell to home packages\n- add opencode tool from anomalyco/tap to homebrew",
          "timestamp": "2026-03-12T00:13:48+09:00",
          "tree_id": "a2fd68753554a0545c5c5eed535ab9fd87989935",
          "url": "https://github.com/mfyuu/dotfiles/commit/a94aca94cca839032e6b9bb74bb46bed33283e64"
        },
        "date": 1773242218649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 49.72,
            "range": "15.11 ms",
            "unit": "ms",
            "extra": "median: 49.72 ms\nmin: 36.74 ms\nmax: 96.29 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "6f672544858decd67927bf9cc453837b0e7b3294",
          "message": "chore: update flake dependencies\n\n- update home-manager to rev 57d5560\n- update nixpkgs to rev a07d4ce",
          "timestamp": "2026-03-18T01:51:25+09:00",
          "tree_id": "03c77855d868c850b785c9c3eaab90368a01cafb",
          "url": "https://github.com/mfyuu/dotfiles/commit/6f672544858decd67927bf9cc453837b0e7b3294"
        },
        "date": 1773766519222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 64.47,
            "range": "19.58 ms",
            "unit": "ms",
            "extra": "median: 64.47 ms\nmin: 38.81 ms\nmax: 131.24 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "c4d4c1b3b21631b9a75816052f6815d2b00c475a",
          "message": "chore: update flake dependencies",
          "timestamp": "2026-03-23T08:32:36+09:00",
          "tree_id": "fb22a37384669d04ae2a23d194efcb214f1dce6e",
          "url": "https://github.com/mfyuu/dotfiles/commit/c4d4c1b3b21631b9a75816052f6815d2b00c475a"
        },
        "date": 1774223258611,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 58.91,
            "range": "7.43 ms",
            "unit": "ms",
            "extra": "median: 58.91 ms\nmin: 50.65 ms\nmax: 85.37 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "b0f221f8f1dda9141cb62344ec3299209ab14b09",
          "message": "feat(skills): improve parallel-review and review-merge skills\n\n- add session resume hint after parallel-review completes (shows /rename {ulid})\n- add session resume hint after review-merge completes (shows /rename {ulid})\n- normalize numeric/hash-prefixed arguments in review-merge to pr-{n} prefix",
          "timestamp": "2026-03-25T13:29:28+09:00",
          "tree_id": "d3966c7416072b3b7d2e9c1370fee198e95f2ec1",
          "url": "https://github.com/mfyuu/dotfiles/commit/b0f221f8f1dda9141cb62344ec3299209ab14b09"
        },
        "date": 1774414099892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 63.35,
            "range": "11.52 ms",
            "unit": "ms",
            "extra": "median: 63.35 ms\nmin: 47.4 ms\nmax: 102.94 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "11ca993de8fcc992dd293561ff25b037f2cc377c",
          "message": "chore: update flake dependencies\n\n- add overlay to fix direnv 2.37.1 build (CGO_ENABLED mismatch in nixpkgs)",
          "timestamp": "2026-03-25T13:57:52+09:00",
          "tree_id": "1005420f38e4eb521d1075483ed20d54b0e352df",
          "url": "https://github.com/mfyuu/dotfiles/commit/11ca993de8fcc992dd293561ff25b037f2cc377c"
        },
        "date": 1774414838923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 43.28,
            "range": "12.84 ms",
            "unit": "ms",
            "extra": "median: 43.28 ms\nmin: 36.45 ms\nmax: 93.26 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "4e92eea70cec441e1ae98edbd72fde307ab17016",
          "message": "chore: update flake dependencies",
          "timestamp": "2026-03-26T23:20:40+09:00",
          "tree_id": "311ad006097627c588d73b20e2e9d9c59b8c8ed3",
          "url": "https://github.com/mfyuu/dotfiles/commit/4e92eea70cec441e1ae98edbd72fde307ab17016"
        },
        "date": 1774535028709,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 56.55,
            "range": "18.51 ms",
            "unit": "ms",
            "extra": "median: 56.55 ms\nmin: 40.48 ms\nmax: 111.13 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "fd3240887079165593db399a22a7262d09ac9b34",
          "message": "chore: update flake dependencies",
          "timestamp": "2026-04-08T22:39:57+09:00",
          "tree_id": "c3d7321ca95ae65685a1122b1b522b076dfb5dfa",
          "url": "https://github.com/mfyuu/dotfiles/commit/fd3240887079165593db399a22a7262d09ac9b34"
        },
        "date": 1775656408729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 55.43,
            "range": "7.3 ms",
            "unit": "ms",
            "extra": "median: 55.43 ms\nmin: 39.01 ms\nmax: 75.47 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a9c6c2f1e2a458ca80b50c9d8b8b12e442d1c515",
          "message": "chore(skills): fix .review/ output dir and allowed-tools in parallel-review and review-merge\n\n- resolve repository root via git rev-parse --show-toplevel instead of relative path to stabilize .review/ location in monorepos\n- add Bash(git rev-parse:*) to allowed-tools in both skills\n- add Agent to parallel-review allowed-tools to prevent permission prompts when spawning 4 parallel review agents",
          "timestamp": "2026-04-09T21:06:35+09:00",
          "tree_id": "d048d17a27876f26776aba8e79108fc679e3dd78",
          "url": "https://github.com/mfyuu/dotfiles/commit/a9c6c2f1e2a458ca80b50c9d8b8b12e442d1c515"
        },
        "date": 1775736594308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 49.47,
            "range": "16.85 ms",
            "unit": "ms",
            "extra": "median: 49.47 ms\nmin: 40.06 ms\nmax: 89.27 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "09fa97635f7cc9a80b4034404e529f4fd2f088b6",
          "message": "chore: update flake dependencies\n\n- bump home-manager to 7ba4ee4228ed36123c7cb75d50524b43514ef992\n- bump nixpkgs to 456e8a9468b9d46bd8c9524425026c00745bc4d2",
          "timestamp": "2026-04-09T21:12:23+09:00",
          "tree_id": "959a0f74423049a45e35caccb9e7b631facb899c",
          "url": "https://github.com/mfyuu/dotfiles/commit/09fa97635f7cc9a80b4034404e529f4fd2f088b6"
        },
        "date": 1775737013752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 81.99,
            "range": "12.21 ms",
            "unit": "ms",
            "extra": "median: 81.99 ms\nmin: 62.18 ms\nmax: 112.91 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "09fa97635f7cc9a80b4034404e529f4fd2f088b6",
          "message": "chore: update flake dependencies\n\n- bump home-manager to 7ba4ee4228ed36123c7cb75d50524b43514ef992\n- bump nixpkgs to 456e8a9468b9d46bd8c9524425026c00745bc4d2",
          "timestamp": "2026-04-09T21:12:23+09:00",
          "tree_id": "959a0f74423049a45e35caccb9e7b631facb899c",
          "url": "https://github.com/mfyuu/dotfiles/commit/09fa97635f7cc9a80b4034404e529f4fd2f088b6"
        },
        "date": 1776039028253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 41.66,
            "range": "2.24 ms",
            "unit": "ms",
            "extra": "median: 41.66 ms\nmin: 36.9 ms\nmax: 47.91 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "27b08634a4ba9935112ce33e4e449f375ac5b5c8",
          "message": "fix: pin nixpkgs to avoid vscode glibc evaluation error on darwin",
          "timestamp": "2026-04-13T09:08:52+09:00",
          "tree_id": "258a05b2e3332e085367225f08fe6ac7d34fedce",
          "url": "https://github.com/mfyuu/dotfiles/commit/27b08634a4ba9935112ce33e4e449f375ac5b5c8"
        },
        "date": 1776039219584,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 38.25,
            "range": "2.03 ms",
            "unit": "ms",
            "extra": "median: 38.25 ms\nmin: 35.97 ms\nmax: 48.27 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "91454992805b9af663145fc968b907f916f1875e",
          "message": "chore(claude): add model and outputStyle settings\n\n- set model to claude-sonnet-4-6 for explicit model pinning\n- add outputStyle as Explanatory for verbose response formatting",
          "timestamp": "2026-04-15T10:26:21+09:00",
          "tree_id": "4872e7ff46dbdd8122cb0de72793a9d6e3e46619",
          "url": "https://github.com/mfyuu/dotfiles/commit/91454992805b9af663145fc968b907f916f1875e"
        },
        "date": 1776216593179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 51.42,
            "range": "13.68 ms",
            "unit": "ms",
            "extra": "median: 51.42 ms\nmin: 39.03 ms\nmax: 97.12 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "562fdb7cbab22acdde79903e4be702ab9f58235f",
          "message": "chore: update flake dependencies",
          "timestamp": "2026-04-20T09:23:55+09:00",
          "tree_id": "e9424c5285f83158f590c45f7c1526bf056e306d",
          "url": "https://github.com/mfyuu/dotfiles/commit/562fdb7cbab22acdde79903e4be702ab9f58235f"
        },
        "date": 1776644838166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 60.05,
            "range": "9.06 ms",
            "unit": "ms",
            "extra": "median: 60.05 ms\nmin: 46.49 ms\nmax: 91.88 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "1ace628b0492ec495823c84e14256e7524118c3f",
          "message": "chore(claude): refine skills and switch statusline\n\n- switch statusline from ccusage to ccstatusline with zero padding\n- add issue-start skill symlink in claude.nix\n- drop model pinning from commit and create-pr skills\n- require bullet-pointed body in every commit with no exceptions\n- add scope-language rule so Japanese scopes are allowed for Japanese commits and PRs\n- document HEREDOC quoting pitfalls and recommend `<<'EOF'` when messages contain backticks",
          "timestamp": "2026-04-23T02:03:23+09:00",
          "tree_id": "db92c5628c323733827341411de8f4a279676aa6",
          "url": "https://github.com/mfyuu/dotfiles/commit/1ace628b0492ec495823c84e14256e7524118c3f"
        },
        "date": 1776877823868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 62.46,
            "range": "12.64 ms",
            "unit": "ms",
            "extra": "median: 62.46 ms\nmin: 41.81 ms\nmax: 105.57 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "3dd4c0d3af7c50666f8cec7a905545f4036488b3",
          "message": "chore: update flake dependencies\n\n- bump home-manager to 936d579f53afa05fc2939c18541e4c9982421e0a",
          "timestamp": "2026-04-23T02:04:31+09:00",
          "tree_id": "4e88d0687900f2050dbfb01ce7582089e7a5f8c4",
          "url": "https://github.com/mfyuu/dotfiles/commit/3dd4c0d3af7c50666f8cec7a905545f4036488b3"
        },
        "date": 1776878199321,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 69.57,
            "range": "16.84 ms",
            "unit": "ms",
            "extra": "median: 69.57 ms\nmin: 44.22 ms\nmax: 140.29 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "904f34fe29bbbb907f2dbd759b5e940fdbb57969",
          "message": "feat(claude): add create-branch skill\n\n- add SKILL.md describing the `prefix/{issue-no}-summary` branch naming convention\n- classify input as issue reference, free-form description, or empty\n- fetch issue metadata via `gh issue view` to derive number, title, and prefix\n- map issue labels and Japanese keywords to Conventional Commits prefixes\n- generate English kebab-case slugs even for Japanese descriptions\n- confirm the proposed branch name via `AskUserQuestion` before creating\n- run pre-flight checks for name collision, working tree state, and base branch\n- register the new skill file in home/claude.nix",
          "timestamp": "2026-05-01T10:37:35+09:00",
          "tree_id": "1dcf88550a18d602dc2229d283b221ae965179fb",
          "url": "https://github.com/mfyuu/dotfiles/commit/904f34fe29bbbb907f2dbd759b5e940fdbb57969"
        },
        "date": 1777599664593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 36.66,
            "range": "2.34 ms",
            "unit": "ms",
            "extra": "median: 36.66 ms\nmin: 36.22 ms\nmax: 45.7 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "13b8170e6deae3f61826e2563654fb5a0bd1bd9d",
          "message": "chore(brew): add k1low/tap/mo",
          "timestamp": "2026-05-14T10:32:36+09:00",
          "tree_id": "b42817a20cbc304129c198666398c3b7a3246218",
          "url": "https://github.com/mfyuu/dotfiles/commit/13b8170e6deae3f61826e2563654fb5a0bd1bd9d"
        },
        "date": 1778722925752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 42.39,
            "range": "12.5 ms",
            "unit": "ms",
            "extra": "median: 42.39 ms\nmin: 34.13 ms\nmax: 90.39 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "b7cdbb0fd0b681354fe93c0a77df6939359824c1",
          "message": "chore: update flake dependencies",
          "timestamp": "2026-05-18T20:28:10+09:00",
          "tree_id": "df8b3e34949ec4947de277374f9695d46f087c87",
          "url": "https://github.com/mfyuu/dotfiles/commit/b7cdbb0fd0b681354fe93c0a77df6939359824c1"
        },
        "date": 1779103922937,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 44,
            "range": "5.19 ms",
            "unit": "ms",
            "extra": "median: 44 ms\nmin: 35.08 ms\nmax: 54.42 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "ea7d8cc781cf6a5a43ffa38ec717de684441012c",
          "message": "chore: update home-manager flake input\n\n- bump home-manager to 736c2084ea750a049ecdbdd7ff5817d2eeeef444\n- refresh narHash and lastModified for the new revision",
          "timestamp": "2026-05-19T09:15:42+09:00",
          "tree_id": "0b00cd944c34710a175f6e2003fecddb82bd4996",
          "url": "https://github.com/mfyuu/dotfiles/commit/ea7d8cc781cf6a5a43ffa38ec717de684441012c"
        },
        "date": 1779149927232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 37.01,
            "range": "0.56 ms",
            "unit": "ms",
            "extra": "median: 37.01 ms\nmin: 36.51 ms\nmax: 38.86 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "d243301bba0ccc906b348e60978fe2b272eadc6a",
          "message": "perf(shell): use precompiled mise binary to skip Rust source build\n\nnixpkgs.mise and the official mise-flake both rely on rustPlatform.buildRustPackage,\nwhich expands into 800+ derivations and consistently misses cache.nixos.org for\naarch64-darwin. CI hit the 30-minute job timeout while compiling mise from source\non every push.\n\nWrap the upstream macOS arm64 release tarball with fetchurl + stdenv.mkDerivation\nand inject it via programs.mise.package. The same activationPackage build that\npreviously enqueued 805 derivations now requires 9 and completes in under 10\nseconds.",
          "timestamp": "2026-05-20T16:29:41+09:00",
          "tree_id": "edc34d96c8165732f7a7cab91ddd4487106aa024",
          "url": "https://github.com/lemtoc/dotfiles/commit/d243301bba0ccc906b348e60978fe2b272eadc6a"
        },
        "date": 1779262473939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 44.38,
            "range": "6.57 ms",
            "unit": "ms",
            "extra": "median: 44.38 ms\nmin: 39.69 ms\nmax: 63.68 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "5c26ef6848ab49e6e3a8511e88dfe74f79a29179",
          "message": "chore(scripts): add rename-claude-projects utility\n\nSibling utility to scripts/rewrite-gh-remotes.sh. Migrates\n~/.claude/projects/-Users-<old>-* directories to <new> after a macOS\nshortname change, so /resume continues to find past sessions.",
          "timestamp": "2026-05-22T15:10:14+09:00",
          "tree_id": "0cc7ce2e5fff0ce143104435fc0215dd9be3bfd9",
          "url": "https://github.com/lemtoc/dotfiles/commit/5c26ef6848ab49e6e3a8511e88dfe74f79a29179"
        },
        "date": 1779431981076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 38.88,
            "range": "3.94 ms",
            "unit": "ms",
            "extra": "median: 38.88 ms\nmin: 35.65 ms\nmax: 54.61 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "ac570a88b739ddbf57f5842288def58bc8d13f68",
          "message": "chore(scripts): add rewrite-zoxide-history utility\n\nRewrites zoxide's db.zo to remap user home prefixes (e.g. mfyuu/lemtoc\nto t1190078) after the macOS short name change, with rank merging and\noptional pruning of missing dirs.",
          "timestamp": "2026-05-22T16:01:25+09:00",
          "tree_id": "146e1f7e9714de066a36e8eb80186c7bf0575212",
          "url": "https://github.com/lemtoc/dotfiles/commit/ac570a88b739ddbf57f5842288def58bc8d13f68"
        },
        "date": 1779433492181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 52.25,
            "range": "7.35 ms",
            "unit": "ms",
            "extra": "median: 52.25 ms\nmin: 46.69 ms\nmax: 81.27 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "82f7ccb9a2b807049cf4f49c9a4705bcce55c1eb",
          "message": "chore(claude): extend session retention to 365 days\n\nClaude Code's default `cleanupPeriodDays` of 30 days silently prunes\ntop-level session jsonl files older than that window, which is how a\nfew months of koutei history vanished after the macOS user rename\neven though the per-uuid subagent directories remained. Bump retention\nto a year so resume stays useful across longer rename / cleanup gaps.",
          "timestamp": "2026-05-22T16:27:19+09:00",
          "tree_id": "7d51b55d1879fcd72175eb5cb4091a01dae108b8",
          "url": "https://github.com/lemtoc/dotfiles/commit/82f7ccb9a2b807049cf4f49c9a4705bcce55c1eb"
        },
        "date": 1779435443060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 88.96,
            "range": "30.39 ms",
            "unit": "ms",
            "extra": "median: 88.96 ms\nmin: 49.11 ms\nmax: 197.58 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "d7874736b6534d1570467137f9c511d9862dd8b7",
          "message": "chore(claude): default to sonnet instead of opus\n\nMost day-to-day coding tasks don't need opus-level reasoning, and sonnet\nis meaningfully faster / cheaper. Use the unversioned alias so future\nsonnet releases pick up automatically.",
          "timestamp": "2026-05-22T16:30:22+09:00",
          "tree_id": "cc06bc02e490926a02a9bcc852d5136edb9b7f6a",
          "url": "https://github.com/lemtoc/dotfiles/commit/d7874736b6534d1570467137f9c511d9862dd8b7"
        },
        "date": 1779435630176,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 39.32,
            "range": "13.73 ms",
            "unit": "ms",
            "extra": "median: 39.32 ms\nmin: 36.04 ms\nmax: 119 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "ed2d7cc704f2552ae00191edef9ab2a7d6a3d51e",
          "message": "chore: update flake.lock\n\nBump home-manager 2026-05-19 -> 2026-05-21 (bd868f7 -> 928d723)\nand nixpkgs 2026-05-15 -> 2026-05-21 (d233902 -> 4a29d73).",
          "timestamp": "2026-05-22T16:46:41+09:00",
          "tree_id": "4080088c077618e0bb4cd0baede574ec63fe7222",
          "url": "https://github.com/lemtoc/dotfiles/commit/ed2d7cc704f2552ae00191edef9ab2a7d6a3d51e"
        },
        "date": 1779436256996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 65.2,
            "range": "32.18 ms",
            "unit": "ms",
            "extra": "median: 65.2 ms\nmin: 32.47 ms\nmax: 208.31 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "007ec2856e6afb9b1116e48f0c2126e0cda9db0b",
          "message": "refactor(nix): parameterize username via specialArgs per host\n\n- add `username` arg to `mkDarwinConfig` and thread through `specialArgs`\n- add `home-manager.extraSpecialArgs` to propagate `username` into home modules\n- replace hardcoded `t1190078` with `${username}` in common/default.nix and M4Pro config\n- declare M4Pro username as `t1190078`, M4Air as `lemtoc` in flake.nix",
          "timestamp": "2026-05-22T17:32:32+09:00",
          "tree_id": "bff6340c092f93e4665454cb0c43773e6f96a7c3",
          "url": "https://github.com/lemtoc/dotfiles/commit/007ec2856e6afb9b1116e48f0c2126e0cda9db0b"
        },
        "date": 1779438960695,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 74.87,
            "range": "19.47 ms",
            "unit": "ms",
            "extra": "median: 74.87 ms\nmin: 38.81 ms\nmax: 139.78 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "007ec2856e6afb9b1116e48f0c2126e0cda9db0b",
          "message": "refactor(nix): parameterize username via specialArgs per host\n\n- add `username` arg to `mkDarwinConfig` and thread through `specialArgs`\n- add `home-manager.extraSpecialArgs` to propagate `username` into home modules\n- replace hardcoded `t1190078` with `${username}` in common/default.nix and M4Pro config\n- declare M4Pro username as `t1190078`, M4Air as `lemtoc` in flake.nix",
          "timestamp": "2026-05-22T17:32:32+09:00",
          "tree_id": "bff6340c092f93e4665454cb0c43773e6f96a7c3",
          "url": "https://github.com/lemtoc/dotfiles/commit/007ec2856e6afb9b1116e48f0c2126e0cda9db0b"
        },
        "date": 1779439349871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 74.99,
            "range": "14.25 ms",
            "unit": "ms",
            "extra": "median: 74.99 ms\nmin: 50.81 ms\nmax: 100.11 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "4b50c57137e781ae5c3c1dc251e165b387db2657",
          "message": "refactor(nix): migrate bun and pnpm from nix to mise globalConfig\n\n- remove bun and pnpm from home.packages (home/pkgs.nix)\n- add node (lts), bun (latest), pnpm (latest) to mise globalConfig\n- update comment in pkgs.nix to reflect the new managed tools",
          "timestamp": "2026-05-26T08:49:12+09:00",
          "tree_id": "7b458352328f18eb33eed96fffaebbd059b442ac",
          "url": "https://github.com/lemtoc/dotfiles/commit/4b50c57137e781ae5c3c1dc251e165b387db2657"
        },
        "date": 1779753156891,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 37.14,
            "range": "1.35 ms",
            "unit": "ms",
            "extra": "median: 37.14 ms\nmin: 36.41 ms\nmax: 43.57 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "a91ffa23b65c1245337a5f043294efe5d5398726",
          "message": "chore(codex): migrate prompts to skills\n\n- move commit and create-pr prompts into Codex skill directories\n- install skills through .agents/skills so Codex discovers folder symlinks\n- add OpenAI agent metadata for skill picker display",
          "timestamp": "2026-05-27T17:29:29+09:00",
          "tree_id": "ee82f842e7e9f00e3211e83f2e4746c74032fe94",
          "url": "https://github.com/lemtoc/dotfiles/commit/a91ffa23b65c1245337a5f043294efe5d5398726"
        },
        "date": 1779870764007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 42.44,
            "range": "2.14 ms",
            "unit": "ms",
            "extra": "median: 42.44 ms\nmin: 41.23 ms\nmax: 49.61 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "ea8b2bd3782ddae85c00a002af47407f2709d0d6",
          "message": "docs(codex): document JavaScript toolchain usage\n\n- require JavaScript and TypeScript commands to use the project toolchain\n- prefer `mise exec` when running package managers or Node-dependent commands\n- document package manager detection from `package.json` and lockfiles",
          "timestamp": "2026-05-27T17:50:56+09:00",
          "tree_id": "47ffd94fb6d9a2cdeac92f81e95b3f8c4e8abd8d",
          "url": "https://github.com/lemtoc/dotfiles/commit/ea8b2bd3782ddae85c00a002af47407f2709d0d6"
        },
        "date": 1779872060876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 35.93,
            "range": "2.94 ms",
            "unit": "ms",
            "extra": "median: 35.93 ms\nmin: 34.47 ms\nmax: 47.37 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "b4d856cf1c8b9f83459b79af158081ca297c3cda",
          "message": "docs(codex): simplify commit and PR instructions\n\n- remove Claude Code-specific AskUserQuestion guidance\n- replace commit and PR skills with compact Codex workflows\n- ignore local .codex directories in global git excludes\n\nCo-authored-by: Codex <codex@openai.com>",
          "timestamp": "2026-05-28T11:15:12+09:00",
          "tree_id": "1d7a2d0cc69c5480feb6616996e77782c79de9a6",
          "url": "https://github.com/lemtoc/dotfiles/commit/b4d856cf1c8b9f83459b79af158081ca297c3cda"
        },
        "date": 1779934760834,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 42.28,
            "range": "3.13 ms",
            "unit": "ms",
            "extra": "median: 42.28 ms\nmin: 38.19 ms\nmax: 53.12 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "27503022273811a228d45e0bcb727f61299f7865",
          "message": "fix(mise): configure default Node.js runtime\n\n- set Node.js LTS as the default mise-managed runtime\n- ensure Home Manager writes the mise global tools config\n\nCo-authored-by: Codex <codex@openai.com>",
          "timestamp": "2026-05-28T11:26:00+09:00",
          "tree_id": "e02d5b90254ece0483ec10572116ba8aecc60848",
          "url": "https://github.com/lemtoc/dotfiles/commit/27503022273811a228d45e0bcb727f61299f7865"
        },
        "date": 1779935351527,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 35.34,
            "range": "5.68 ms",
            "unit": "ms",
            "extra": "median: 35.34 ms\nmin: 34.43 ms\nmax: 58.55 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "22706e10258d2fa75eee86d28d642903510d1933",
          "message": "chore(shell): update prompt colors and git ignores\n\n- Set modified and untracked Starship git status colors to match cmd duration yellow\n- Ignore local .pnpm-store directories globally\n\nCo-authored-by: Codex <codex@openai.com>",
          "timestamp": "2026-05-28T17:00:44+09:00",
          "tree_id": "f65d10fb1a1a05ceddd1f0456b0406df3ee8dd06",
          "url": "https://github.com/lemtoc/dotfiles/commit/22706e10258d2fa75eee86d28d642903510d1933"
        },
        "date": 1779955437073,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 42.68,
            "range": "5.11 ms",
            "unit": "ms",
            "extra": "median: 42.68 ms\nmin: 39.83 ms\nmax: 63.59 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "8cfccf76df69ec84f0677a5d3b4d4cd86634d0de",
          "message": "feat(shell): restore zsh as default shell\n\n- Switch nix-darwin and Home Manager shell wiring from fish to zsh\n- Port zsh snippets and Codex helper commands from fish\n- Update shell benchmark workflows and editor defaults for zsh\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-02T14:23:12+09:00",
          "tree_id": "47cdd921b40eb38060ccccf2c866a63927b9bacc",
          "url": "https://github.com/lemtoc/dotfiles/commit/8cfccf76df69ec84f0677a5d3b4d4cd86634d0de"
        },
        "date": 1782971173950,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 77.48,
            "range": "15.98 ms",
            "unit": "ms",
            "extra": "median: 77.48 ms\nmin: 47.47 ms\nmax: 122.02 ms\nruns: 50"
          }
        ]
      }
    ],
    "Fish Startup Time": [
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "e81429e553d71b67820c475fe5977207ce803bc0",
          "message": "fix(ci): switch benchmark from zsh to fish\n\n- remove sheldon cache pre-population (sheldon no longer installed since zsh.nix is not imported)\n- remove zsh dotfile symlinks (.zshrc, .zshenv, .zprofile) no longer generated\n- propagate home-manager bin path via GITHUB_PATH for cross-step availability\n- change hyperfine target from 'zsh -i -c exit' to 'fish -i -c exit'\n- remove unused hm_gen input from run-benchmark action\n- rename workflow/job names from \"Zsh Startup *\" to \"Fish Startup *\"",
          "timestamp": "2026-06-04T13:12:21+09:00",
          "tree_id": "839cb3b87f029e5277f9edfd384f7f26b13fe0ee",
          "url": "https://github.com/lemtoc/dotfiles/commit/e81429e553d71b67820c475fe5977207ce803bc0"
        },
        "date": 1780546658626,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 223.86,
            "range": "13.75 ms",
            "unit": "ms",
            "extra": "median: 223.86 ms\nmin: 208.67 ms\nmax: 267.5 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "0402942e81c5118e4713816fec69dfc84ff0bd75",
          "message": "chore(claude): remove default model setting",
          "timestamp": "2026-06-04T13:35:39+09:00",
          "tree_id": "b7d37189c59d5935c0c99e58e05ee9c45bab7a98",
          "url": "https://github.com/lemtoc/dotfiles/commit/0402942e81c5118e4713816fec69dfc84ff0bd75"
        },
        "date": 1780548564629,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 208.32,
            "range": "4.71 ms",
            "unit": "ms",
            "extra": "median: 208.32 ms\nmin: 200.53 ms\nmax: 226.45 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "a2d4c49c5b8f0114ea0812ab1a9300d001497235",
          "message": "chore(git): ignore playwright-mcp directories\n\n- add **/.playwright-mcp/ to the global git ignore list\n- keep Playwright MCP working directories out of all repos\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-06-04T15:24:56+09:00",
          "tree_id": "d2d284f5f4fb645122240e999d04d0bc401e6a7f",
          "url": "https://github.com/lemtoc/dotfiles/commit/a2d4c49c5b8f0114ea0812ab1a9300d001497235"
        },
        "date": 1780554534032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 550.31,
            "range": "61.04 ms",
            "unit": "ms",
            "extra": "median: 550.31 ms\nmin: 498.39 ms\nmax: 883.62 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "eeea5a986cc827feed1435c11c96f3b225d0f705",
          "message": "chore(nix): update flake inputs\n\n- bump home-manager to 447fd9f\n- bump nixpkgs to ffa10e2",
          "timestamp": "2026-06-05T16:01:44+09:00",
          "tree_id": "9e1cc66201ed046dd030f2c4bb68ecb481a447e6",
          "url": "https://github.com/lemtoc/dotfiles/commit/eeea5a986cc827feed1435c11c96f3b225d0f705"
        },
        "date": 1780643429789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 87.31,
            "range": "18.89 ms",
            "unit": "ms",
            "extra": "median: 87.31 ms\nmin: 53.93 ms\nmax: 137.18 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "e1d4e6f326b8afcb4c18662d6393c9bace8f7ac6",
          "message": "chore(nix): update home-manager input\n\n- bump home-manager to b2b7db4 (2026-06-05)\n- refresh narHash for the new revision\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-06T18:49:29+09:00",
          "tree_id": "a6fa649d286b30cbf912911b9d9fff40a2291aa0",
          "url": "https://github.com/lemtoc/dotfiles/commit/e1d4e6f326b8afcb4c18662d6393c9bace8f7ac6"
        },
        "date": 1780739607664,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 600.64,
            "range": "11.84 ms",
            "unit": "ms",
            "extra": "median: 600.64 ms\nmin: 562.14 ms\nmax: 632.06 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "e7bd4d250e0375bee2eba6e95cffed893dd46c9a",
          "message": "chore(nix): update flake inputs\n\n- bump nix-darwin to 6a77112\n- bump nixpkgs to cbb5cf3",
          "timestamp": "2026-06-08T10:32:49+09:00",
          "tree_id": "c9ec9b5832a619d8e8b1e4bb78781affdb28657b",
          "url": "https://github.com/lemtoc/dotfiles/commit/e7bd4d250e0375bee2eba6e95cffed893dd46c9a"
        },
        "date": 1780882608045,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 217.25,
            "range": "14.25 ms",
            "unit": "ms",
            "extra": "median: 217.25 ms\nmin: 206.91 ms\nmax: 274.34 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "fe2ee36f3a0db6f0fecd942dc70db66b9f9dcc9b",
          "message": "docs(readme): update benchmark URL to new domain\n\n- replace bench.mfyuu.dev with bench.lemtoc.me\n- reflect Cloudflare domain migration from mfyuu.dev to lemtoc.me",
          "timestamp": "2026-06-08T11:13:48+09:00",
          "tree_id": "ca20970e853538de5c8f724964774cc1006568c1",
          "url": "https://github.com/lemtoc/dotfiles/commit/fe2ee36f3a0db6f0fecd942dc70db66b9f9dcc9b"
        },
        "date": 1780885337494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 55.59,
            "range": "5.73 ms",
            "unit": "ms",
            "extra": "median: 55.59 ms\nmin: 47.34 ms\nmax: 72.32 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "d3ac1d2754f654bb6c8263a21b919948c5dea419",
          "message": "chore(nix): update home-manager input\n\n- bump home-manager to df391424 from nix-community\n- refresh lastModified and narHash for the new revision",
          "timestamp": "2026-06-09T11:02:46+09:00",
          "tree_id": "970eae6ef93901175efb3277dda4d34f906567e8",
          "url": "https://github.com/lemtoc/dotfiles/commit/d3ac1d2754f654bb6c8263a21b919948c5dea419"
        },
        "date": 1780970811291,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 69.02,
            "range": "18.34 ms",
            "unit": "ms",
            "extra": "median: 69.02 ms\nmin: 57.55 ms\nmax: 141.18 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "f8687fcf2ffb4be3e9f4cf7c0b305f2e79ada53b",
          "message": "chore(nix): update flake inputs\n\n- bump home-manager to bd42777\n- bump nixpkgs to 8c3cede",
          "timestamp": "2026-06-10T10:31:59+09:00",
          "tree_id": "fc20dec61a580869287035af95d2aa489141b24c",
          "url": "https://github.com/lemtoc/dotfiles/commit/f8687fcf2ffb4be3e9f4cf7c0b305f2e79ada53b"
        },
        "date": 1781055353209,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 72.95,
            "range": "21.43 ms",
            "unit": "ms",
            "extra": "median: 72.95 ms\nmin: 59.94 ms\nmax: 168.13 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "6a2e94b3a09e28b2f0050eab62ecf670542e63b3",
          "message": "chore(nix): add zed editor to homebrew casks\n\n- install zed editor via homebrew cask\n- keep casks list in alphabetical order",
          "timestamp": "2026-06-10T11:44:27+09:00",
          "tree_id": "88a1eb30ee6c3c4f8b62c7032a99d3efa58488a6",
          "url": "https://github.com/lemtoc/dotfiles/commit/6a2e94b3a09e28b2f0050eab62ecf670542e63b3"
        },
        "date": 1781059699286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 67.65,
            "range": "2.79 ms",
            "unit": "ms",
            "extra": "median: 67.65 ms\nmin: 62.69 ms\nmax: 76.98 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "0bc6e20e8f77ecf79c0259fd121e55b4d597e96d",
          "message": "fix(nix): use GitHub token for API requests\n\n- Configure mise to resolve GitHub credentials via gh auth token.\n- Pass gh's token to Nix update and switch operations through NIX_CONFIG.\n- Preserve existing GitHub token configuration and avoid storing token values.\n\nCo-authored-by: Codex <codex@openai.com>",
          "timestamp": "2026-06-10T20:47:27+09:00",
          "tree_id": "04d1306199d58299ece7ca2e04220a1414933b34",
          "url": "https://github.com/lemtoc/dotfiles/commit/0bc6e20e8f77ecf79c0259fd121e55b4d597e96d"
        },
        "date": 1781105837329,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 635,
            "range": "34.17 ms",
            "unit": "ms",
            "extra": "median: 635 ms\nmin: 605.84 ms\nmax: 781.99 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "3855697db3b4964ff479a4c8bbade9a12a254d6d",
          "message": "chore(vscode): consolidate import settings and set fish profile\n\n- replace separate javascript/typescript updateImportsOnFileMove with the unified js/ts setting\n- set fish as the default macOS terminal profile\n- expand presentation-mode command arrays to multi-line formatting",
          "timestamp": "2026-06-11T08:25:09+09:00",
          "tree_id": "00e4a0afbcd5530c8a91273155b035c7b370cd7e",
          "url": "https://github.com/lemtoc/dotfiles/commit/3855697db3b4964ff479a4c8bbade9a12a254d6d"
        },
        "date": 1781134145375,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 84.07,
            "range": "30.77 ms",
            "unit": "ms",
            "extra": "median: 84.07 ms\nmin: 56.73 ms\nmax: 187.3 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "99c5744f2daa79f6667b31784e92b302158c9f2c",
          "message": "chore(claude): drop pinned model from skill definitions\n\n- remove the model field from issue-start, parallel-review and review-merge\n- let these skills inherit the session model instead of pinning older opus builds\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-17T10:21:14+09:00",
          "tree_id": "08f960c884f5a4baadcfe70b8f2c420f1b314052",
          "url": "https://github.com/lemtoc/dotfiles/commit/99c5744f2daa79f6667b31784e92b302158c9f2c"
        },
        "date": 1781659531263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 656.31,
            "range": "29.28 ms",
            "unit": "ms",
            "extra": "median: 656.31 ms\nmin: 626.57 ms\nmax: 770.99 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "3aaeb1a1339e3a86c77ac1bbbffd699df3fa48d9",
          "message": "feat(dpca-ide): add EC2 access tooling via SSO and SSM\n\n- add dpca-ide SSO profile with the DPCa-IDE-User role in aws.nix\n- generalize mkSsoProfile into mkSsoProfileWithRole to allow custom roles\n- add dpca-ide ssh host using SSM start-session as ProxyCommand\n- include git-ignored ~/.ssh/config.d/dpca-ide.conf to keep instance id private\n- add mise tasks for aws login/whoami and ec2 start/stop/ssh/connect/status\n- read the instance id from ~/.config/dpca/instance-id to avoid hardcoding it\n- unpin pnpm back to latest in mise.nix",
          "timestamp": "2026-06-18T09:55:03+09:00",
          "tree_id": "e0228924e36591b1803f14e4d6bad863fbf47831",
          "url": "https://github.com/lemtoc/dotfiles/commit/3aaeb1a1339e3a86c77ac1bbbffd699df3fa48d9"
        },
        "date": 1781744361447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 289.17,
            "range": "11.51 ms",
            "unit": "ms",
            "extra": "median: 289.17 ms\nmin: 276.24 ms\nmax: 315.47 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "f42ba0da8f6338b7afff40afcdc1e96cf24b3c01",
          "message": "chore(nix): update flake inputs\n\n- bump home-manager to c187002 (nix-community)\n- bump nix-darwin to ee9c7b9 (LnL7)",
          "timestamp": "2026-06-18T09:56:40+09:00",
          "tree_id": "320b25435f6283a308d06ee13b4821e2f2b906ab",
          "url": "https://github.com/lemtoc/dotfiles/commit/f42ba0da8f6338b7afff40afcdc1e96cf24b3c01"
        },
        "date": 1781744609246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 757.72,
            "range": "42.33 ms",
            "unit": "ms",
            "extra": "median: 757.72 ms\nmin: 673.53 ms\nmax: 851.55 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "0c8d65e6044b4d94f3d5e25d6b190bcc8ee765c3",
          "message": "chore(nix): add actionlint to packages\n\n- manage actionlint declaratively via home.packages\n- enables linting GitHub Actions workflows and composite actions locally",
          "timestamp": "2026-06-18T10:58:08+09:00",
          "tree_id": "ab323c36bc04cea7c9b641c6c2998ebe040561b6",
          "url": "https://github.com/lemtoc/dotfiles/commit/0c8d65e6044b4d94f3d5e25d6b190bcc8ee765c3"
        },
        "date": 1781748106682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 55.24,
            "range": "10.68 ms",
            "unit": "ms",
            "extra": "median: 55.24 ms\nmin: 49.54 ms\nmax: 102.81 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "9b06fff0a8a3022e2e717182f6d6f9f5c1c8275a",
          "message": "feat(aws): switch SSO profiles to awsctx with per-role granularity\n\n- add `github:lemtoc/awsctx` as a mise tool and source its fish wrapper\n- generate readOnly and admin profiles per account via `mkAccount`\n- add a powerUser profile for niyarepo (readOnly -> powerUser -> admin)\n- keep dpca-ide on its dedicated role without a readOnly profile\n- point amplify-toda credential_process at the toda/readOnly profile",
          "timestamp": "2026-06-19T10:58:11+09:00",
          "tree_id": "c1b231d55eba49e9db421aae733587410de5cae8",
          "url": "https://github.com/lemtoc/dotfiles/commit/9b06fff0a8a3022e2e717182f6d6f9f5c1c8275a"
        },
        "date": 1781834904462,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 76.99,
            "range": "20.52 ms",
            "unit": "ms",
            "extra": "median: 76.99 ms\nmin: 63.47 ms\nmax: 133.4 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "12877b9a1a7d0aee3a324774c398d944ef9e532f",
          "message": "feat(aws): split admin SSO profiles into a dedicated session\n\n- thread a `sessionName` arg through `mkSsoProfileWithRole`\n- generalize the fixed `ssoSession` into a reusable `mkSsoSession`\n- emit both `default` and `admin` sso-session blocks in the config\n- bind admin profiles to the `admin` session, others to `default`\n- require a separate login when assuming administrator access\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-19T13:03:22+09:00",
          "tree_id": "6118a62f9de33e9a0e53d09b357cb0cf0db44003",
          "url": "https://github.com/lemtoc/dotfiles/commit/12877b9a1a7d0aee3a324774c398d944ef9e532f"
        },
        "date": 1781842000651,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 66.65,
            "range": "3.8 ms",
            "unit": "ms",
            "extra": "median: 66.65 ms\nmin: 65.16 ms\nmax: 87.57 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "c1b756255049857859458cf431186d336b77dede",
          "message": "chore(nix): update home-manager flake input\n\n- bump home-manager to revision 37f21df\n- pull in latest upstream module fixes from nix-community",
          "timestamp": "2026-06-21T01:08:05+09:00",
          "tree_id": "b583e1147bc13a546e3c2d2b51af26b229368e59",
          "url": "https://github.com/lemtoc/dotfiles/commit/c1b756255049857859458cf431186d336b77dede"
        },
        "date": 1781971924049,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 91.62,
            "range": "19.8 ms",
            "unit": "ms",
            "extra": "median: 91.62 ms\nmin: 83.67 ms\nmax: 172.31 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "9e3ff9d8c299612bb107f5d8ce25b4a42630d936",
          "message": "chore(nix): bump home-manager flake input\n\n- Update home-manager from 37f21dfa5d27e71b75bacd9418b156f9265e312e to d1ccd0721ec599866622665f3651e19e6e2d4c6a.\n- Refresh the locked nar hash and timestamp for the new input revision.\n\nCo-authored-by: Codex GPT-5 <codex@openai.com>",
          "timestamp": "2026-06-22T09:04:34+09:00",
          "tree_id": "932ced16bee55dea496ae95c0c59d41ae158a797",
          "url": "https://github.com/lemtoc/dotfiles/commit/9e3ff9d8c299612bb107f5d8ce25b4a42630d936"
        },
        "date": 1782086909365,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 94.78,
            "range": "21.58 ms",
            "unit": "ms",
            "extra": "median: 94.78 ms\nmin: 79.38 ms\nmax: 160.2 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "bb8703ad9d344f5babd2b0c94e3f17e52c42c4cd",
          "message": "chore(nix): update home-manager flake input",
          "timestamp": "2026-06-23T15:43:31+09:00",
          "tree_id": "cd9f0a8068eae70896532227a30a3dcf7c6e198c",
          "url": "https://github.com/lemtoc/dotfiles/commit/bb8703ad9d344f5babd2b0c94e3f17e52c42c4cd"
        },
        "date": 1782197236917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 107.67,
            "range": "12.47 ms",
            "unit": "ms",
            "extra": "median: 107.67 ms\nmin: 89.3 ms\nmax: 135.74 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "5b7e5e885b672b1c14c5fb2d4f8daffd4f836e71",
          "message": "feat(fish): add git commit abbreviation\n\n- Add a git ci abbreviation that expands to git commit in Fish shell setup.\n\nCo-authored-by: Codex GPT-5 <codex@openai.com>",
          "timestamp": "2026-06-23T15:48:14+09:00",
          "tree_id": "edd5b88b40616bfb54bee15d3e221e549633891a",
          "url": "https://github.com/lemtoc/dotfiles/commit/5b7e5e885b672b1c14c5fb2d4f8daffd4f836e71"
        },
        "date": 1782197574172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 86.02,
            "range": "12.71 ms",
            "unit": "ms",
            "extra": "median: 86.02 ms\nmin: 64.13 ms\nmax: 118.15 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "f59840c16d19334f2d373439cca0f05a7bda68d5",
          "message": "fix(fish): raise codex helper reasoning effort\n\n- Set codex-exec-fast to low reasoning effort so commit/create-pr helpers better follow skill workflows.\n- Keep web_search and image_generation disabled to avoid unnecessary tools while preserving lightweight execution.\n- Background: none was faster but missed commit skill requirements such as commit body/trailer and final status verification.\n\nCo-authored-by: Codex GPT-5 <codex@openai.com>",
          "timestamp": "2026-06-24T09:07:33+09:00",
          "tree_id": "575c4ab37d191f0cd4a9b929f7ac4fab2a23f24c",
          "url": "https://github.com/lemtoc/dotfiles/commit/f59840c16d19334f2d373439cca0f05a7bda68d5"
        },
        "date": 1782260113027,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 77.66,
            "range": "7.88 ms",
            "unit": "ms",
            "extra": "median: 77.66 ms\nmin: 69.81 ms\nmax: 121.74 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "4da38f13a7e1612c26e967acc7f6c5f4cfc5cc48",
          "message": "chore(nix): update flake input pin\n\n- Refresh the locked nixpkgs revision in flake.lock.\n- Keep the rest of the flake inputs unchanged.\n\nCo-authored-by: Codex <codex@openai.com>",
          "timestamp": "2026-06-25T09:41:52+09:00",
          "tree_id": "7d08f2a9e44730c2c502de27610bf41b71872f53",
          "url": "https://github.com/lemtoc/dotfiles/commit/4da38f13a7e1612c26e967acc7f6c5f4cfc5cc48"
        },
        "date": 1782348366758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 85.91,
            "range": "23 ms",
            "unit": "ms",
            "extra": "median: 85.91 ms\nmin: 66.66 ms\nmax: 152.04 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "0ae966d445e11548112fabf6726e1e4692134169",
          "message": "feat(aws): align SSO redirect and SSH forwarding\n\n- add a fixed AWS CLI SSO redirect port to match the local SSH tunnel\n- forward the same localhost port through the dpca-ide SSH config\n- prepend the local aws-cli virtualenv bin directory on M4Pro\n\nCo-authored-by: Codex GPT-5.5 <codex@openai.com>",
          "timestamp": "2026-06-25T16:31:45+09:00",
          "tree_id": "d4a33f73e4bc3113fe1f51fc76da75cc5d6b12c3",
          "url": "https://github.com/lemtoc/dotfiles/commit/0ae966d445e11548112fabf6726e1e4692134169"
        },
        "date": 1782372956166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 87.3,
            "range": "8.06 ms",
            "unit": "ms",
            "extra": "median: 87.3 ms\nmin: 81.24 ms\nmax: 118.11 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "948fdb84748d1a1c93049deb640374b8115f7193",
          "message": "chore(nix): bump home-manager flake input\n\n- Update the pinned home-manager revision in flake.lock.\n- Refresh the corresponding narHash and lastModified metadata.\n\nCo-authored-by: Codex GPT-5.5 <codex@openai.com>",
          "timestamp": "2026-06-26T08:15:03+09:00",
          "tree_id": "d2b86a518f9071ad872b1b7251f951d6149d8304",
          "url": "https://github.com/lemtoc/dotfiles/commit/948fdb84748d1a1c93049deb640374b8115f7193"
        },
        "date": 1782429534007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 83.26,
            "range": "12.26 ms",
            "unit": "ms",
            "extra": "median: 83.26 ms\nmin: 67.77 ms\nmax: 128.18 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "22c0516611eba495964079ab005208ece424517f",
          "message": "chore(nix): bump home-manager flake input\n- Update the home-manager lock entry to revision `8d8a6cc50ddc60748791a14ee1163c865ec57635`.\n- Refresh the recorded `lastModified` and `narHash` values in `flake.lock`.\n\nCo-authored-by: Codex GPT-5.5 <codex@openai.com>",
          "timestamp": "2026-06-28T00:53:40+09:00",
          "tree_id": "3aef2bc5c368d5164a58c5f34d562111ab3192c5",
          "url": "https://github.com/lemtoc/dotfiles/commit/22c0516611eba495964079ab005208ece424517f"
        },
        "date": 1782575872940,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 79.23,
            "range": "9.3 ms",
            "unit": "ms",
            "extra": "median: 79.23 ms\nmin: 69.54 ms\nmax: 119.11 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "120bc5a8cb672f53af5f5b107abdb1fc58734156",
          "message": "chore(nix): bump home-manager flake input\n\n- Update the home-manager and nixpkgs lock entries to the latest recorded revisions.\n- Refresh the corresponding `lastModified` and `narHash` values in `flake.lock`.\n\nCo-authored-by: Codex GPT-5.4-Mini <codex@openai.com>",
          "timestamp": "2026-06-29T09:56:50+09:00",
          "tree_id": "475ae2315163280ad831a29c2c759af7dabaf416",
          "url": "https://github.com/lemtoc/dotfiles/commit/120bc5a8cb672f53af5f5b107abdb1fc58734156"
        },
        "date": 1782694848781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 81.62,
            "range": "2.75 ms",
            "unit": "ms",
            "extra": "median: 81.62 ms\nmin: 73.66 ms\nmax: 88.97 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "6ad4d4f1335c20da6081c23443f95b77c87044da",
          "message": "chore(shell): show mise env status\n\n- Enable `status.show_env` in the mise configuration so the active environment is visible in shell status output.\n\nCo-authored-by: Codex GPT-5 GPT-5.4-Mini <codex@openai.com>",
          "timestamp": "2026-06-29T10:28:10+09:00",
          "tree_id": "eb4f55689d10bf3821f472f8444cb7dbd5ba6c74",
          "url": "https://github.com/lemtoc/dotfiles/commit/6ad4d4f1335c20da6081c23443f95b77c87044da"
        },
        "date": 1782696700481,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 75.15,
            "range": "9.95 ms",
            "unit": "ms",
            "extra": "median: 75.15 ms\nmin: 69.37 ms\nmax: 136.49 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "857c6fe73e102c441dd0a73bdc87621acdbf03b1",
          "message": "refactor(dotfiles): move mutable configs to chezmoi\n\n- Move mutable app configuration and skills into the chezmoi source tree.\n- Remove Home Manager modules that previously owned UI-edited config files.\n- Document chezmoi bootstrap and keep Nix focused on packages and stable system config.\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-06-29T21:48:57+09:00",
          "tree_id": "b87d3ff4a76a63f103bf458afa165a7344d9df1c",
          "url": "https://github.com/lemtoc/dotfiles/commit/857c6fe73e102c441dd0a73bdc87621acdbf03b1"
        },
        "date": 1782737523606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 49.69,
            "range": "18.5 ms",
            "unit": "ms",
            "extra": "median: 49.69 ms\nmin: 38.37 ms\nmax: 112.63 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "dd234de3c743089044f0900f08c54b77bc586196",
          "message": "fix(codex): use profile-derived shell path\n\n- Remove the hardcoded PATH override from the Codex config.\n- Rely on experimental_use_profile so Codex inherits the shell profile environment.\n- Keep mise and tool resolution in the shell profile instead of duplicating it in config.toml.\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-06-29T22:11:35+09:00",
          "tree_id": "8b71bfd87644fbb310b842df421de6c511eec321",
          "url": "https://github.com/lemtoc/dotfiles/commit/dd234de3c743089044f0900f08c54b77bc586196"
        },
        "date": 1782738944765,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 85.47,
            "range": "14.86 ms",
            "unit": "ms",
            "extra": "median: 85.47 ms\nmin: 60.5 ms\nmax: 128.29 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "dd234de3c743089044f0900f08c54b77bc586196",
          "message": "fix(codex): use profile-derived shell path\n\n- Remove the hardcoded PATH override from the Codex config.\n- Rely on experimental_use_profile so Codex inherits the shell profile environment.\n- Keep mise and tool resolution in the shell profile instead of duplicating it in config.toml.\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-06-29T22:11:35+09:00",
          "tree_id": "8b71bfd87644fbb310b842df421de6c511eec321",
          "url": "https://github.com/lemtoc/dotfiles/commit/dd234de3c743089044f0900f08c54b77bc586196"
        },
        "date": 1782739777943,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 68.63,
            "range": "61.51 ms",
            "unit": "ms",
            "extra": "median: 68.63 ms\nmin: 51.2 ms\nmax: 489.09 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "14c437ff8085b5a509150f760125e3a3974d1443",
          "message": "chore(nix): bump flake inputs\n\n- update home-manager from 4ad9aaa to 5d72a29\n- update nixpkgs from e1c1b84 to 534ee3d\n- refresh narHash and lastModified for both inputs\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-06-30T08:00:14+09:00",
          "tree_id": "d0a3db0bd57ef157e26ac51649bfca79fecd6ab4",
          "url": "https://github.com/lemtoc/dotfiles/commit/14c437ff8085b5a509150f760125e3a3974d1443"
        },
        "date": 1782774270738,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 57.26,
            "range": "4.69 ms",
            "unit": "ms",
            "extra": "median: 57.26 ms\nmin: 51.37 ms\nmax: 75.89 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "68ec3e21d9bf3ff96364ddf41c301df5cd12cc96",
          "message": "chore(nix): bump flake inputs\n\n- update home-manager rev to 2a37d71b\n- update nixpkgs rev to 7a1a6477\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-07-01T08:50:54+09:00",
          "tree_id": "d5254eadd0491233569a522ac23e0dff9756033f",
          "url": "https://github.com/lemtoc/dotfiles/commit/68ec3e21d9bf3ff96364ddf41c301df5cd12cc96"
        },
        "date": 1782863746943,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 50.91,
            "range": "4.89 ms",
            "unit": "ms",
            "extra": "median: 50.91 ms\nmin: 49.22 ms\nmax: 64.9 ms\nruns: 50"
          }
        ]
      }
    ],
    "Zsh Interactive Latency": [
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "6d45cb8533faa8029a8a2239ee8d53b1ad55aa7e",
          "message": "fix(ci): skip unavailable git-wt cache hook\n\n- Skip git-wt cache prewarming when the git-wt helper is absent\n- Guard the zsh lazy git-wt hook so runners without the Homebrew package still start\n- Keep local git-wt cache generation enabled when the helper exists\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-02T18:21:34+09:00",
          "tree_id": "0dcc00a6fbd6e7fa1295385ecb0d21ddaaab6e2b",
          "url": "https://github.com/lemtoc/dotfiles/commit/6d45cb8533faa8029a8a2239ee8d53b1ad55aa7e"
        },
        "date": 1782984342795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 126.61,
            "range": "32.91 ms",
            "unit": "ms",
            "extra": "median: 126.61 ms\nmin: 99.07 ms\nmax: 224.15 ms\nstddev: 32.91 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 126.87,
            "range": "32.98 ms",
            "unit": "ms",
            "extra": "median: 126.87 ms\nmin: 99.67 ms\nmax: 224.92 ms\nstddev: 32.98 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 66.07,
            "range": "7.31 ms",
            "unit": "ms",
            "extra": "median: 66.07 ms\nmin: 52.02 ms\nmax: 83.39 ms\nstddev: 7.31 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 69.34,
            "range": "13.7 ms",
            "unit": "ms",
            "extra": "median: 69.34 ms\nmin: 50.8 ms\nmax: 95.66 ms\nstddev: 13.7 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 55.06,
            "range": "11.91 ms",
            "unit": "ms",
            "extra": "median: 55.06 ms\nmin: 40.6 ms\nmax: 91.06 ms\nstddev: 11.91 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "ce8caa87d0f72b2f656c5586324e8de9f3d88b11",
          "message": "fix(ci): skip unavailable git-wt cache hook\n\n- Skip git-wt cache prewarming when the git-wt helper is absent\n- Guard the zsh lazy git-wt hook so runners without the Homebrew package still start\n- Keep local git-wt cache generation enabled when the helper exists\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-02T18:38:02+09:00",
          "tree_id": "0dcc00a6fbd6e7fa1295385ecb0d21ddaaab6e2b",
          "url": "https://github.com/lemtoc/dotfiles/commit/ce8caa87d0f72b2f656c5586324e8de9f3d88b11"
        },
        "date": 1782985293959,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 117.5,
            "range": "11.74 ms",
            "unit": "ms",
            "extra": "median: 117.5 ms\nmin: 88.82 ms\nmax: 124.6 ms\nstddev: 11.74 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 117.72,
            "range": "11.74 ms",
            "unit": "ms",
            "extra": "median: 117.72 ms\nmin: 89.01 ms\nmax: 124.83 ms\nstddev: 11.74 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 58.43,
            "range": "6.98 ms",
            "unit": "ms",
            "extra": "median: 58.43 ms\nmin: 51.03 ms\nmax: 71.24 ms\nstddev: 6.98 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 79.78,
            "range": "16.55 ms",
            "unit": "ms",
            "extra": "median: 79.78 ms\nmin: 48.41 ms\nmax: 102.33 ms\nstddev: 16.55 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 41.54,
            "range": "6.24 ms",
            "unit": "ms",
            "extra": "median: 41.54 ms\nmin: 39.72 ms\nmax: 66 ms\nstddev: 6.24 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "1f02e78632d4e9281d19424347ca9bf3f28bade9",
          "message": "feat(ci): use self-hosted zsh benchmark runner\n\n- Run the main zsh benchmark on the self-hosted local-bench runner\n- Keep the PR benchmark on macos-latest and scope git signing config to the workspace\n- Add actionlint configuration for the local-bench label and clean benchmark temp files\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-03T09:43:48+09:00",
          "tree_id": "ec9606af90604bb96b22e3b1a5993ce06c882c3b",
          "url": "https://github.com/lemtoc/dotfiles/commit/1f02e78632d4e9281d19424347ca9bf3f28bade9"
        },
        "date": 1783039659441,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 90.33,
            "range": "5.98 ms",
            "unit": "ms",
            "extra": "median: 90.33 ms\nmin: 86.41 ms\nmax: 107.23 ms\nstddev: 5.98 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 90.52,
            "range": "6.01 ms",
            "unit": "ms",
            "extra": "median: 90.52 ms\nmin: 86.6 ms\nmax: 107.55 ms\nstddev: 6.01 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 50.85,
            "range": "2.36 ms",
            "unit": "ms",
            "extra": "median: 50.85 ms\nmin: 46.55 ms\nmax: 53.35 ms\nstddev: 2.36 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 55.58,
            "range": "1.84 ms",
            "unit": "ms",
            "extra": "median: 55.58 ms\nmin: 50.83 ms\nmax: 57.55 ms\nstddev: 1.84 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 33.9,
            "range": "1.61 ms",
            "unit": "ms",
            "extra": "median: 33.9 ms\nmin: 32.94 ms\nmax: 40.13 ms\nstddev: 1.61 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "1956f6343803639c5a303d9a9fe14ab66776678d",
          "message": "fix(shell): update capsule prompt integration\n\n- Update Capsule to remove the zsh prompt leading blank line and compact directory paths\n- Pass the local corporate CA bundle to the self-hosted benchmark job environment\n- Keep benchmark checkout working when the runner service does not inherit shell CA variables\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-03T16:52:48+09:00",
          "tree_id": "f40cd60e3841fab24f88e22c69df4647f478e3e4",
          "url": "https://github.com/lemtoc/dotfiles/commit/1956f6343803639c5a303d9a9fe14ab66776678d"
        },
        "date": 1783065238768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 46.33,
            "range": "6.35 ms",
            "unit": "ms",
            "extra": "median: 46.33 ms\nmin: 42.22 ms\nmax: 63.52 ms\nstddev: 6.35 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 46.52,
            "range": "6.4 ms",
            "unit": "ms",
            "extra": "median: 46.52 ms\nmin: 42.43 ms\nmax: 63.74 ms\nstddev: 6.4 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.35,
            "range": "0.2 ms",
            "unit": "ms",
            "extra": "median: 5.35 ms\nmin: 5.12 ms\nmax: 5.78 ms\nstddev: 0.2 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.4,
            "range": "17.64 ms",
            "unit": "ms",
            "extra": "median: 1.4 ms\nmin: 0.99 ms\nmax: 56.18 ms\nstddev: 17.64 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 32.16,
            "range": "1.58 ms",
            "unit": "ms",
            "extra": "median: 32.16 ms\nmin: 30.67 ms\nmax: 35.65 ms\nstddev: 1.58 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "769b55d7c850fd019d19055693472bab1377f476",
          "message": "feat(shell): right-align capsule prompt time\n\n- Update capsule-src to the fork commit that supports right prompt placement\n- Move capsule time to line2/right and keep the left prompt focused on status and character\n- Add fish as an installed shell package for fallback use\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-03T18:04:01+09:00",
          "tree_id": "25da0312b3d333401da5948434bb733768cf7a02",
          "url": "https://github.com/lemtoc/dotfiles/commit/769b55d7c850fd019d19055693472bab1377f476"
        },
        "date": 1783069510141,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 43.44,
            "range": "4.35 ms",
            "unit": "ms",
            "extra": "median: 43.44 ms\nmin: 41.43 ms\nmax: 60.83 ms\nstddev: 4.35 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 43.69,
            "range": "4.35 ms",
            "unit": "ms",
            "extra": "median: 43.69 ms\nmin: 41.62 ms\nmax: 61.02 ms\nstddev: 4.35 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.5,
            "range": "0.43 ms",
            "unit": "ms",
            "extra": "median: 5.5 ms\nmin: 5.15 ms\nmax: 6.61 ms\nstddev: 0.43 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.75,
            "range": "18.23 ms",
            "unit": "ms",
            "extra": "median: 1.75 ms\nmin: 1.05 ms\nmax: 58.7 ms\nstddev: 18.23 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 30.42,
            "range": "1.89 ms",
            "unit": "ms",
            "extra": "median: 30.42 ms\nmin: 29.92 ms\nmax: 36.07 ms\nstddev: 1.89 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "95db417d3fbbe84b9f66dbbb9729e7f32b7a5127",
          "message": "feat(shell): keep capsule time on line1 right\n\n- Pin Capsule to the prefix-aware line1 right prompt renderer\n- Move prompt time back to line1 right with seconds and default color\n- Keep the prompt character as a default-colored percent sign\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-03T20:57:39+09:00",
          "tree_id": "e970a9beba790dbf67535ea3af0cde6653a9e082",
          "url": "https://github.com/lemtoc/dotfiles/commit/95db417d3fbbe84b9f66dbbb9729e7f32b7a5127"
        },
        "date": 1783079913655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 43.41,
            "range": "7.21 ms",
            "unit": "ms",
            "extra": "median: 43.41 ms\nmin: 40.9 ms\nmax: 67.04 ms\nstddev: 7.21 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 43.66,
            "range": "7.3 ms",
            "unit": "ms",
            "extra": "median: 43.66 ms\nmin: 41.21 ms\nmax: 67.24 ms\nstddev: 7.3 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.35,
            "range": "0.34 ms",
            "unit": "ms",
            "extra": "median: 5.35 ms\nmin: 5.11 ms\nmax: 6.34 ms\nstddev: 0.34 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.32,
            "range": "22.2 ms",
            "unit": "ms",
            "extra": "median: 2.32 ms\nmin: 1.1 ms\nmax: 54.96 ms\nstddev: 22.2 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 30.7,
            "range": "10.07 ms",
            "unit": "ms",
            "extra": "median: 30.7 ms\nmin: 29.5 ms\nmax: 72.42 ms\nstddev: 10.07 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "761ab609edea255390a06110a7a3dd1391745bdd",
          "message": "feat(shell): refine capsule aws prompt\n\n- Move the AWS prompt module after runtime tool modules\n- Use the same AWS Nerd Font glyph as the previous Starship prompt\n- Pin Capsule to the custom module ordering fix\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-03T21:17:02+09:00",
          "tree_id": "5a45bcb2b8337b3949ffbfff79fd728f01d08cb9",
          "url": "https://github.com/lemtoc/dotfiles/commit/761ab609edea255390a06110a7a3dd1391745bdd"
        },
        "date": 1783081175644,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 44.35,
            "range": "5.89 ms",
            "unit": "ms",
            "extra": "median: 44.35 ms\nmin: 40.57 ms\nmax: 66.18 ms\nstddev: 5.89 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 44.54,
            "range": "5.91 ms",
            "unit": "ms",
            "extra": "median: 44.54 ms\nmin: 40.81 ms\nmax: 66.51 ms\nstddev: 5.91 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.53,
            "range": "0.42 ms",
            "unit": "ms",
            "extra": "median: 5.53 ms\nmin: 5.12 ms\nmax: 6.66 ms\nstddev: 0.42 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.16,
            "range": "17.98 ms",
            "unit": "ms",
            "extra": "median: 1.16 ms\nmin: 0.62 ms\nmax: 58.72 ms\nstddev: 17.98 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 31.69,
            "range": "2.39 ms",
            "unit": "ms",
            "extra": "median: 31.69 ms\nmin: 30.16 ms\nmax: 39.53 ms\nstddev: 2.39 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "2db21af6f007bb2dac3f41a13b3d7d74265e8bb1",
          "message": "feat(shell): refine capsule prompt labels\n\n- Replace the AWS Nerd Font icon with an @aws prompt label\n- Move AWS profile rendering into the module format string\n- Change git status indicators from green to magenta styling\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-03T21:26:47+09:00",
          "tree_id": "821a9cea4f110c99b0d47eef791bbd4b954bca8c",
          "url": "https://github.com/lemtoc/dotfiles/commit/2db21af6f007bb2dac3f41a13b3d7d74265e8bb1"
        },
        "date": 1783082113938,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 42.44,
            "range": "5.16 ms",
            "unit": "ms",
            "extra": "median: 42.44 ms\nmin: 41.37 ms\nmax: 63.49 ms\nstddev: 5.16 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 42.62,
            "range": "5.19 ms",
            "unit": "ms",
            "extra": "median: 42.62 ms\nmin: 41.67 ms\nmax: 63.82 ms\nstddev: 5.19 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.32,
            "range": "0.35 ms",
            "unit": "ms",
            "extra": "median: 5.32 ms\nmin: 5.08 ms\nmax: 6.54 ms\nstddev: 0.35 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.1,
            "range": "0.45 ms",
            "unit": "ms",
            "extra": "median: 1.1 ms\nmin: 0.83 ms\nmax: 2.6 ms\nstddev: 0.45 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 29.78,
            "range": "3.33 ms",
            "unit": "ms",
            "extra": "median: 29.78 ms\nmin: 29.06 ms\nmax: 40.12 ms\nstddev: 3.33 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "914da6b282483ca8fc1820c48bd3c70ad097fa4c",
          "message": "feat(shell): compact command duration prompt\n\n- Configure Capsule command duration output as a compact +duration label\n- Render command duration with default foreground and no bold styling\n- Pin Capsule to the command duration prefix support commit\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-03T21:49:24+09:00",
          "tree_id": "2fd20bc564bf00012bf758aa70b49b22674ae165",
          "url": "https://github.com/lemtoc/dotfiles/commit/914da6b282483ca8fc1820c48bd3c70ad097fa4c"
        },
        "date": 1783126954798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 42.95,
            "range": "5.81 ms",
            "unit": "ms",
            "extra": "median: 42.95 ms\nmin: 37.27 ms\nmax: 65.8 ms\nstddev: 5.81 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 43.16,
            "range": "5.82 ms",
            "unit": "ms",
            "extra": "median: 43.16 ms\nmin: 37.47 ms\nmax: 66.01 ms\nstddev: 5.82 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.17,
            "range": "0.16 ms",
            "unit": "ms",
            "extra": "median: 5.17 ms\nmin: 5.04 ms\nmax: 5.66 ms\nstddev: 0.16 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.24,
            "range": "0.43 ms",
            "unit": "ms",
            "extra": "median: 1.24 ms\nmin: 1.04 ms\nmax: 2.92 ms\nstddev: 0.43 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 30.11,
            "range": "1.19 ms",
            "unit": "ms",
            "extra": "median: 30.11 ms\nmin: 29.13 ms\nmax: 34.26 ms\nstddev: 1.19 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "9e60dbdfc35581ce0876c6b77ee70926b92b4d26",
          "message": "fix(cmux): send ctrl-l for command-k\n\n- Manage cmux JSON and settings files through chezmoi\n- Add a Ghostty-compatible keybind so Command-K sends Ctrl-L to the shell\n- Keep existing cmux browser shortcut overrides under version control\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-04T09:57:28+09:00",
          "tree_id": "22bfbc98f1f4db893d459eddb524d15cd77bc493",
          "url": "https://github.com/lemtoc/dotfiles/commit/9e60dbdfc35581ce0876c6b77ee70926b92b4d26"
        },
        "date": 1783127038132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 43.27,
            "range": "5.38 ms",
            "unit": "ms",
            "extra": "median: 43.27 ms\nmin: 41.53 ms\nmax: 64.21 ms\nstddev: 5.38 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 43.46,
            "range": "5.39 ms",
            "unit": "ms",
            "extra": "median: 43.46 ms\nmin: 41.84 ms\nmax: 64.47 ms\nstddev: 5.39 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.24,
            "range": "0.2 ms",
            "unit": "ms",
            "extra": "median: 5.24 ms\nmin: 4.93 ms\nmax: 5.64 ms\nstddev: 0.2 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.12,
            "range": "12.03 ms",
            "unit": "ms",
            "extra": "median: 1.12 ms\nmin: 0.76 ms\nmax: 50.96 ms\nstddev: 12.03 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 29.82,
            "range": "2.19 ms",
            "unit": "ms",
            "extra": "median: 29.82 ms\nmin: 28.63 ms\nmax: 38.19 ms\nstddev: 2.19 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "65b4378d6ee39529474087a5e345606505a8f0ba",
          "message": "feat(shell): add tirith command guard\n\n- Add tirith to Home Manager packages and keep Homebrew from installing a duplicate formula\n- Initialize tirith synchronously in zsh so command checks are active before interactive use\n- Reuse cache_eval for the generated zsh hook while keeping the security hook non-deferred\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-04T10:10:39+09:00",
          "tree_id": "c7488c932c9eb4031d8318ef68d6c4bc9b11f16c",
          "url": "https://github.com/lemtoc/dotfiles/commit/65b4378d6ee39529474087a5e345606505a8f0ba"
        },
        "date": 1783127510279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 54.01,
            "range": "6.45 ms",
            "unit": "ms",
            "extra": "median: 54.01 ms\nmin: 52.13 ms\nmax: 79.19 ms\nstddev: 6.45 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 90.17,
            "range": "13 ms",
            "unit": "ms",
            "extra": "median: 90.17 ms\nmin: 82.14 ms\nmax: 132.82 ms\nstddev: 13 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.23,
            "range": "0.28 ms",
            "unit": "ms",
            "extra": "median: 5.23 ms\nmin: 4.99 ms\nmax: 5.97 ms\nstddev: 0.28 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.3,
            "range": "12.53 ms",
            "unit": "ms",
            "extra": "median: 1.3 ms\nmin: 0.86 ms\nmax: 53.26 ms\nstddev: 12.53 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 40.68,
            "range": "1.29 ms",
            "unit": "ms",
            "extra": "median: 40.68 ms\nmin: 39.4 ms\nmax: 44.89 ms\nstddev: 1.29 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "65b4378d6ee39529474087a5e345606505a8f0ba",
          "message": "feat(shell): add tirith command guard\n\n- Add tirith to Home Manager packages and keep Homebrew from installing a duplicate formula\n- Initialize tirith synchronously in zsh so command checks are active before interactive use\n- Reuse cache_eval for the generated zsh hook while keeping the security hook non-deferred\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-04T10:10:39+09:00",
          "tree_id": "c7488c932c9eb4031d8318ef68d6c4bc9b11f16c",
          "url": "https://github.com/lemtoc/dotfiles/commit/65b4378d6ee39529474087a5e345606505a8f0ba"
        },
        "date": 1783127645104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 52.47,
            "range": "4.3 ms",
            "unit": "ms",
            "extra": "median: 52.47 ms\nmin: 50.45 ms\nmax: 69.37 ms\nstddev: 4.3 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 85.26,
            "range": "5.19 ms",
            "unit": "ms",
            "extra": "median: 85.26 ms\nmin: 79.97 ms\nmax: 100.63 ms\nstddev: 5.19 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.25,
            "range": "0.36 ms",
            "unit": "ms",
            "extra": "median: 5.25 ms\nmin: 4.86 ms\nmax: 6.45 ms\nstddev: 0.36 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.09,
            "range": "0.49 ms",
            "unit": "ms",
            "extra": "median: 1.09 ms\nmin: 0.67 ms\nmax: 2.6 ms\nstddev: 0.49 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 39.73,
            "range": "1.78 ms",
            "unit": "ms",
            "extra": "median: 39.73 ms\nmin: 38.45 ms\nmax: 44.75 ms\nstddev: 1.78 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "9e60dbdfc35581ce0876c6b77ee70926b92b4d26",
          "message": "fix(cmux): send ctrl-l for command-k\n\n- Manage cmux JSON and settings files through chezmoi\n- Add a Ghostty-compatible keybind so Command-K sends Ctrl-L to the shell\n- Keep existing cmux browser shortcut overrides under version control\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-04T09:57:28+09:00",
          "tree_id": "22bfbc98f1f4db893d459eddb524d15cd77bc493",
          "url": "https://github.com/lemtoc/dotfiles/commit/9e60dbdfc35581ce0876c6b77ee70926b92b4d26"
        },
        "date": 1783127760159,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 52.19,
            "range": "6.05 ms",
            "unit": "ms",
            "extra": "median: 52.19 ms\nmin: 50.67 ms\nmax: 76.85 ms\nstddev: 6.05 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 84.48,
            "range": "7.19 ms",
            "unit": "ms",
            "extra": "median: 84.48 ms\nmin: 79.44 ms\nmax: 109.86 ms\nstddev: 7.19 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.42,
            "range": "0.16 ms",
            "unit": "ms",
            "extra": "median: 5.42 ms\nmin: 4.92 ms\nmax: 5.6 ms\nstddev: 0.16 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.07,
            "range": "0.43 ms",
            "unit": "ms",
            "extra": "median: 1.07 ms\nmin: 0.5 ms\nmax: 2.6 ms\nstddev: 0.43 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 39.67,
            "range": "0.6 ms",
            "unit": "ms",
            "extra": "median: 39.67 ms\nmin: 38.79 ms\nmax: 41.14 ms\nstddev: 0.6 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "9e60dbdfc35581ce0876c6b77ee70926b92b4d26",
          "message": "fix(cmux): send ctrl-l for command-k\n\n- Manage cmux JSON and settings files through chezmoi\n- Add a Ghostty-compatible keybind so Command-K sends Ctrl-L to the shell\n- Keep existing cmux browser shortcut overrides under version control\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-04T09:57:28+09:00",
          "tree_id": "22bfbc98f1f4db893d459eddb524d15cd77bc493",
          "url": "https://github.com/lemtoc/dotfiles/commit/9e60dbdfc35581ce0876c6b77ee70926b92b4d26"
        },
        "date": 1783128087572,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 44.7,
            "range": "7.19 ms",
            "unit": "ms",
            "extra": "median: 44.7 ms\nmin: 35.51 ms\nmax: 69.48 ms\nstddev: 7.19 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 44.88,
            "range": "7.19 ms",
            "unit": "ms",
            "extra": "median: 44.88 ms\nmin: 35.7 ms\nmax: 69.68 ms\nstddev: 7.19 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.43,
            "range": "0.38 ms",
            "unit": "ms",
            "extra": "median: 5.43 ms\nmin: 5.02 ms\nmax: 6.48 ms\nstddev: 0.38 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.81,
            "range": "24.27 ms",
            "unit": "ms",
            "extra": "median: 1.81 ms\nmin: 0.64 ms\nmax: 57.26 ms\nstddev: 24.27 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 32.66,
            "range": "2.82 ms",
            "unit": "ms",
            "extra": "median: 32.66 ms\nmin: 30.22 ms\nmax: 42.28 ms\nstddev: 2.82 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemtoc",
            "username": "lemtoc",
            "email": "83203852+lemtoc@users.noreply.github.com"
          },
          "committer": {
            "name": "lemtoc",
            "username": "lemtoc",
            "email": "83203852+lemtoc@users.noreply.github.com"
          },
          "id": "9e60dbdfc35581ce0876c6b77ee70926b92b4d26",
          "message": "fix(cmux): send ctrl-l for command-k\n\n- Manage cmux JSON and settings files through chezmoi\n- Add a Ghostty-compatible keybind so Command-K sends Ctrl-L to the shell\n- Keep existing cmux browser shortcut overrides under version control\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-04T00:57:28Z",
          "url": "https://github.com/lemtoc/dotfiles/commit/9e60dbdfc35581ce0876c6b77ee70926b92b4d26"
        },
        "date": 1783128136687,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 46.33,
            "range": "5.87 ms",
            "unit": "ms",
            "extra": "median: 46.33 ms\nmin: 41.71 ms\nmax: 60.79 ms\nstddev: 5.87 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 46.53,
            "range": "5.87 ms",
            "unit": "ms",
            "extra": "median: 46.53 ms\nmin: 41.91 ms\nmax: 61.06 ms\nstddev: 5.87 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.46,
            "range": "0.4 ms",
            "unit": "ms",
            "extra": "median: 5.46 ms\nmin: 5.1 ms\nmax: 6.54 ms\nstddev: 0.4 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.17,
            "range": "22.37 ms",
            "unit": "ms",
            "extra": "median: 2.17 ms\nmin: 1.15 ms\nmax: 55.44 ms\nstddev: 22.37 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 31.08,
            "range": "1.85 ms",
            "unit": "ms",
            "extra": "median: 31.08 ms\nmin: 30.1 ms\nmax: 36.67 ms\nstddev: 1.85 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "246760a8409cb37e78fd4e272d8ef4a3e5e59f2f",
          "message": "fix(ci): fail zsh benchmark on red thresholds\n\n- Add a zsh-bench threshold check that matches the dashboard red status rules\n- Stop using github-action-benchmark relative alerts as the CI failure condition\n- Apply the same red-threshold check to main and PR benchmark workflows\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-04T12:09:36+09:00",
          "tree_id": "ba1c1c22e1ccc25791162653ef86f4d6d26e9b39",
          "url": "https://github.com/lemtoc/dotfiles/commit/246760a8409cb37e78fd4e272d8ef4a3e5e59f2f"
        },
        "date": 1783134631237,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 42.92,
            "range": "4.91 ms",
            "unit": "ms",
            "extra": "median: 42.92 ms\nmin: 39.21 ms\nmax: 61.7 ms\nstddev: 4.91 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 43.24,
            "range": "4.92 ms",
            "unit": "ms",
            "extra": "median: 43.24 ms\nmin: 39.42 ms\nmax: 62.04 ms\nstddev: 4.92 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.17,
            "range": "0.25 ms",
            "unit": "ms",
            "extra": "median: 5.17 ms\nmin: 4.96 ms\nmax: 5.79 ms\nstddev: 0.25 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.33,
            "range": "11.86 ms",
            "unit": "ms",
            "extra": "median: 1.33 ms\nmin: 1.09 ms\nmax: 50.57 ms\nstddev: 11.86 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 31.34,
            "range": "3.22 ms",
            "unit": "ms",
            "extra": "median: 31.34 ms\nmin: 29.98 ms\nmax: 43.8 ms\nstddev: 3.22 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "040834c78e299e0ce2053049b14ce5229f2d61e7",
          "message": "fix(shell): suppress cmux scrollback restore\n\n- Clear cmux restore scrollback temp files before shell integration replays them\n- Keep the guard scoped to cmux-provided integration environments\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-04T17:30:29+09:00",
          "tree_id": "fe903fc6f3bb9e5414bcb29fa353f650d68fd4c9",
          "url": "https://github.com/lemtoc/dotfiles/commit/040834c78e299e0ce2053049b14ce5229f2d61e7"
        },
        "date": 1783153886668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 43.79,
            "range": "6.25 ms",
            "unit": "ms",
            "extra": "median: 43.79 ms\nmin: 41.26 ms\nmax: 68.68 ms\nstddev: 6.25 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 44,
            "range": "6.27 ms",
            "unit": "ms",
            "extra": "median: 44 ms\nmin: 41.45 ms\nmax: 68.98 ms\nstddev: 6.27 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 5.52,
            "range": "0.35 ms",
            "unit": "ms",
            "extra": "median: 5.52 ms\nmin: 5.12 ms\nmax: 6.62 ms\nstddev: 0.35 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.28,
            "range": "12.68 ms",
            "unit": "ms",
            "extra": "median: 1.28 ms\nmin: 0.94 ms\nmax: 53.7 ms\nstddev: 12.68 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 30.93,
            "range": "3.62 ms",
            "unit": "ms",
            "extra": "median: 30.93 ms\nmin: 28.94 ms\nmax: 44.25 ms\nstddev: 3.62 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "a9d49ce3f71571faa111a9ed64821f7ff0384600",
          "message": "fix(shell): harden sheldon source cache\n\n- Write generated sheldon source output to a temporary file before replacing the cache\n- Fall back to synchronous zsh-defer execution when the plugin cache is unavailable\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-08T11:36:53+09:00",
          "tree_id": "38235cbd0218cfda5fdfeb57a2af2693cf8f322e",
          "url": "https://github.com/lemtoc/dotfiles/commit/a9d49ce3f71571faa111a9ed64821f7ff0384600"
        },
        "date": 1783478867350,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 48.58,
            "range": "11.12 ms",
            "unit": "ms",
            "extra": "median: 48.58 ms\nmin: 42.74 ms\nmax: 91.89 ms\nstddev: 11.12 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 48.94,
            "range": "11.14 ms",
            "unit": "ms",
            "extra": "median: 48.94 ms\nmin: 43.1 ms\nmax: 92.3 ms\nstddev: 11.14 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.83,
            "range": "0.04 ms",
            "unit": "ms",
            "extra": "median: 0.83 ms\nmin: 0.74 ms\nmax: 0.91 ms\nstddev: 0.04 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.33,
            "range": "24.64 ms",
            "unit": "ms",
            "extra": "median: 2.33 ms\nmin: 0.81 ms\nmax: 61.87 ms\nstddev: 24.64 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 40.47,
            "range": "3.67 ms",
            "unit": "ms",
            "extra": "median: 40.47 ms\nmin: 35.5 ms\nmax: 48.52 ms\nstddev: 3.67 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "3f09eb4a1fa81f548aad56c41d400f668b354f89",
          "message": "feat(git): pin Git 2.55.0\n\n- Override the Home Manager Git package with the upstream Git 2.55.0 source\n- Update flake inputs for nixpkgs, home-manager, and nix-darwin\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-08T11:42:32+09:00",
          "tree_id": "f55c3ea9c5ed8fc2461acd071f69756459ea8d8d",
          "url": "https://github.com/lemtoc/dotfiles/commit/3f09eb4a1fa81f548aad56c41d400f668b354f89"
        },
        "date": 1783478916424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 45.34,
            "range": "6.19 ms",
            "unit": "ms",
            "extra": "median: 45.34 ms\nmin: 42.68 ms\nmax: 69.48 ms\nstddev: 6.19 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 45.67,
            "range": "6.19 ms",
            "unit": "ms",
            "extra": "median: 45.67 ms\nmin: 43.02 ms\nmax: 69.81 ms\nstddev: 6.19 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.8,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 0.8 ms\nmin: 0.74 ms\nmax: 0.87 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.56,
            "range": "25.49 ms",
            "unit": "ms",
            "extra": "median: 2.56 ms\nmin: 1.47 ms\nmax: 59.25 ms\nstddev: 25.49 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 36.07,
            "range": "1.6 ms",
            "unit": "ms",
            "extra": "median: 36.07 ms\nmin: 34.79 ms\nmax: 40.31 ms\nstddev: 1.6 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "4b027358ef30bd0813483149e300c7cb3b8570bf",
          "message": "chore(config): refresh app settings\n\n- Refresh Codex app browser client and bundled marketplace metadata from the local app update\n- Enable the template-creator runtime plugin and trust the local nova workspace\n- Re-add regenerated Claude settings formatting without carrying the invalid model escape sequence\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-07-08T14:04:59+09:00",
          "tree_id": "f89d43226742995ddcb80def9a646c2ca399f44b",
          "url": "https://github.com/lemtoc/dotfiles/commit/4b027358ef30bd0813483149e300c7cb3b8570bf"
        },
        "date": 1783487155377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 45.33,
            "range": "6.84 ms",
            "unit": "ms",
            "extra": "median: 45.33 ms\nmin: 41.01 ms\nmax: 71.32 ms\nstddev: 6.84 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 45.78,
            "range": "6.84 ms",
            "unit": "ms",
            "extra": "median: 45.78 ms\nmin: 41.36 ms\nmax: 71.74 ms\nstddev: 6.84 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.8,
            "range": "0.07 ms",
            "unit": "ms",
            "extra": "median: 0.8 ms\nmin: 0.76 ms\nmax: 1.04 ms\nstddev: 0.07 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.61,
            "range": "6.91 ms",
            "unit": "ms",
            "extra": "median: 2.61 ms\nmin: 1.02 ms\nmax: 18.05 ms\nstddev: 6.91 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 37.28,
            "range": "6.29 ms",
            "unit": "ms",
            "extra": "median: 37.28 ms\nmin: 35.88 ms\nmax: 62.82 ms\nstddev: 6.29 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "4902ffb1e79ad78c4aa0e0e6ae197202039b7f0b",
          "message": "feat(shell): list directory after changing directories\n\n- list the current directory after changing away from home\n- keep the existing home-directory behavior unchanged\n\nCo-authored-by: Codex GPT-5.6 Luna Xhigh <noreply@openai.com>",
          "timestamp": "2026-07-10T13:44:56+09:00",
          "tree_id": "c5ebfa27c8977d64d814ce42c56241ed206c241c",
          "url": "https://github.com/lemtoc/dotfiles/commit/4902ffb1e79ad78c4aa0e0e6ae197202039b7f0b"
        },
        "date": 1783659052371,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 44.3,
            "range": "4.65 ms",
            "unit": "ms",
            "extra": "median: 44.3 ms\nmin: 40.92 ms\nmax: 62.1 ms\nstddev: 4.65 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 44.74,
            "range": "4.64 ms",
            "unit": "ms",
            "extra": "median: 44.74 ms\nmin: 41.34 ms\nmax: 62.47 ms\nstddev: 4.64 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.9,
            "range": "0.02 ms",
            "unit": "ms",
            "extra": "median: 0.9 ms\nmin: 0.86 ms\nmax: 0.93 ms\nstddev: 0.02 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.55,
            "range": "6.5 ms",
            "unit": "ms",
            "extra": "median: 2.55 ms\nmin: 1.96 ms\nmax: 22.67 ms\nstddev: 6.5 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 36.03,
            "range": "0.97 ms",
            "unit": "ms",
            "extra": "median: 36.03 ms\nmin: 34.62 ms\nmax: 38.07 ms\nstddev: 0.97 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "52fd232bb3a4124c0d07d3693de1f8405dc975fd",
          "message": "chore(codex): track generated project trust\n\n- retain trusted directories created for Codex research threads\n- keep generated project settings synchronized with chezmoi\n\nCo-authored-by: Codex GPT-5.6 Sol Xhigh <noreply@openai.com>",
          "timestamp": "2026-07-10T16:14:55+09:00",
          "tree_id": "a577d3cb9b77218f69dfbcfb99d49a8c8f048bb2",
          "url": "https://github.com/lemtoc/dotfiles/commit/52fd232bb3a4124c0d07d3693de1f8405dc975fd"
        },
        "date": 1783667812246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 45.92,
            "range": "5.32 ms",
            "unit": "ms",
            "extra": "median: 45.92 ms\nmin: 43.53 ms\nmax: 66.99 ms\nstddev: 5.32 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 46.36,
            "range": "5.31 ms",
            "unit": "ms",
            "extra": "median: 46.36 ms\nmin: 43.91 ms\nmax: 67.39 ms\nstddev: 5.31 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.88,
            "range": "0.13 ms",
            "unit": "ms",
            "extra": "median: 0.88 ms\nmin: 0.79 ms\nmax: 1.38 ms\nstddev: 0.13 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 14.28,
            "range": "6.28 ms",
            "unit": "ms",
            "extra": "median: 14.28 ms\nmin: 1.67 ms\nmax: 19.68 ms\nstddev: 6.28 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 36.77,
            "range": "4.18 ms",
            "unit": "ms",
            "extra": "median: 36.77 ms\nmin: 34.75 ms\nmax: 51.34 ms\nstddev: 4.18 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "52fd232bb3a4124c0d07d3693de1f8405dc975fd",
          "message": "chore(codex): track generated project trust\n\n- retain trusted directories created for Codex research threads\n- keep generated project settings synchronized with chezmoi\n\nCo-authored-by: Codex GPT-5.6 Sol Xhigh <noreply@openai.com>",
          "timestamp": "2026-07-10T16:14:55+09:00",
          "tree_id": "a577d3cb9b77218f69dfbcfb99d49a8c8f048bb2",
          "url": "https://github.com/lemtoc/dotfiles/commit/52fd232bb3a4124c0d07d3693de1f8405dc975fd"
        },
        "date": 1783668613175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 45.85,
            "range": "4.6 ms",
            "unit": "ms",
            "extra": "median: 45.85 ms\nmin: 42.7 ms\nmax: 61.03 ms\nstddev: 4.6 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 46.27,
            "range": "4.6 ms",
            "unit": "ms",
            "extra": "median: 46.27 ms\nmin: 43.13 ms\nmax: 61.41 ms\nstddev: 4.6 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.9,
            "range": "0.02 ms",
            "unit": "ms",
            "extra": "median: 0.9 ms\nmin: 0.86 ms\nmax: 0.95 ms\nstddev: 0.02 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.52,
            "range": "6.2 ms",
            "unit": "ms",
            "extra": "median: 2.52 ms\nmin: 1.77 ms\nmax: 16.37 ms\nstddev: 6.2 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 35.58,
            "range": "2 ms",
            "unit": "ms",
            "extra": "median: 35.58 ms\nmin: 34.72 ms\nmax: 43.22 ms\nstddev: 2 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "ffbd61c54ab81c27fad21c707eb277b15ea66fde",
          "message": "chore(flake): update flake.lock inputs\n\n- bump home-manager to rev 7566825\n- bump nixpkgs to rev 3b32825\n- bump nova to rev 9e938b4\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
          "timestamp": "2026-07-13T08:40:01+09:00",
          "tree_id": "b6f6bc80a4d1b9ebebc0173b4a54104d489fe5c7",
          "url": "https://github.com/lemtoc/dotfiles/commit/ffbd61c54ab81c27fad21c707eb277b15ea66fde"
        },
        "date": 1783899661513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 43.94,
            "range": "2.32 ms",
            "unit": "ms",
            "extra": "median: 43.94 ms\nmin: 42.34 ms\nmax: 52.35 ms\nstddev: 2.32 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 44.37,
            "range": "2.32 ms",
            "unit": "ms",
            "extra": "median: 44.37 ms\nmin: 42.79 ms\nmax: 52.77 ms\nstddev: 2.32 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.86,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 0.86 ms\nmin: 0.78 ms\nmax: 0.91 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.5,
            "range": "6.7 ms",
            "unit": "ms",
            "extra": "median: 2.5 ms\nmin: 0.85 ms\nmax: 18.25 ms\nstddev: 6.7 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 35.51,
            "range": "1.18 ms",
            "unit": "ms",
            "extra": "median: 35.51 ms\nmin: 34.58 ms\nmax: 39.32 ms\nstddev: 1.18 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "24f7c007393413cd80949ed6687e3b222f656ea7",
          "message": "chore(flake): update flake.lock inputs\n\n- bump home-manager to rev a45a7c4\n- bump nixpkgs to rev 6cdc7fc",
          "timestamp": "2026-07-14T10:02:29+09:00",
          "tree_id": "e570ef41ed1d37ecad275e257f6e93ddd2885492",
          "url": "https://github.com/lemtoc/dotfiles/commit/24f7c007393413cd80949ed6687e3b222f656ea7"
        },
        "date": 1783993800210,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 45.59,
            "range": "6.22 ms",
            "unit": "ms",
            "extra": "median: 45.59 ms\nmin: 39.83 ms\nmax: 69.43 ms\nstddev: 6.22 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 45.99,
            "range": "6.23 ms",
            "unit": "ms",
            "extra": "median: 45.99 ms\nmin: 40.21 ms\nmax: 69.88 ms\nstddev: 6.23 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.86,
            "range": "0.04 ms",
            "unit": "ms",
            "extra": "median: 0.86 ms\nmin: 0.8 ms\nmax: 0.93 ms\nstddev: 0.04 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.91,
            "range": "5.41 ms",
            "unit": "ms",
            "extra": "median: 2.91 ms\nmin: 1.07 ms\nmax: 15.38 ms\nstddev: 5.41 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 35.34,
            "range": "2.25 ms",
            "unit": "ms",
            "extra": "median: 35.34 ms\nmin: 34.33 ms\nmax: 42.01 ms\nstddev: 2.25 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "0e1490fd7e598f78daefe44a61e0667aa6331ca4",
          "message": "feat(codex): add RunCat usage metrics hook\n\n- Generate Codex model, context, and rate-limit metrics from lifecycle events\n- Embed a provider-scoped monochrome SVG icon and write snapshots atomically\n- Register the Stop hook and manage the complete setup with chezmoi\n\nCo-authored-by: Codex GPT-5.6 Sol Ultra <noreply@openai.com>",
          "timestamp": "2026-07-18T02:41:44+09:00",
          "tree_id": "a7f11fa47b1708dc40e3221f573a57bc7d47acf9",
          "url": "https://github.com/lemtoc/dotfiles/commit/0e1490fd7e598f78daefe44a61e0667aa6331ca4"
        },
        "date": 1784310174454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 46.93,
            "range": "7.82 ms",
            "unit": "ms",
            "extra": "median: 46.93 ms\nmin: 41.29 ms\nmax: 76.98 ms\nstddev: 7.82 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 47.31,
            "range": "7.82 ms",
            "unit": "ms",
            "extra": "median: 47.31 ms\nmin: 41.69 ms\nmax: 77.4 ms\nstddev: 7.82 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.84,
            "range": "0.06 ms",
            "unit": "ms",
            "extra": "median: 0.84 ms\nmin: 0.8 ms\nmax: 1.04 ms\nstddev: 0.06 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.79,
            "range": "6.31 ms",
            "unit": "ms",
            "extra": "median: 2.79 ms\nmin: 1.18 ms\nmax: 16.74 ms\nstddev: 6.31 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 37.65,
            "range": "2.71 ms",
            "unit": "ms",
            "extra": "median: 37.65 ms\nmin: 35.75 ms\nmax: 44.04 ms\nstddev: 2.71 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "8620d00fd32ba7883dcbb0932954b8a67ec4e7f7",
          "message": "chore(flake): update flake.lock inputs\n\n- bump home-manager to rev deeb6b7\n- bump nix-darwin to rev 57a3171\n- bump nixpkgs to rev 421eebf\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
          "timestamp": "2026-07-21T09:20:21+09:00",
          "tree_id": "88215b7eecc596e5ddb46b76d417131fb1611923",
          "url": "https://github.com/lemtoc/dotfiles/commit/8620d00fd32ba7883dcbb0932954b8a67ec4e7f7"
        },
        "date": 1784593272307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 46.6,
            "range": "3.95 ms",
            "unit": "ms",
            "extra": "median: 46.6 ms\nmin: 42.82 ms\nmax: 56.78 ms\nstddev: 3.95 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 46.99,
            "range": "3.95 ms",
            "unit": "ms",
            "extra": "median: 46.99 ms\nmin: 43.27 ms\nmax: 57.23 ms\nstddev: 3.95 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.93,
            "range": "0.11 ms",
            "unit": "ms",
            "extra": "median: 0.93 ms\nmin: 0.82 ms\nmax: 1.26 ms\nstddev: 0.11 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 15.12,
            "range": "4.79 ms",
            "unit": "ms",
            "extra": "median: 15.12 ms\nmin: 1.97 ms\nmax: 19.86 ms\nstddev: 4.79 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 40.5,
            "range": "3.18 ms",
            "unit": "ms",
            "extra": "median: 40.5 ms\nmin: 35.69 ms\nmax: 46.31 ms\nstddev: 3.18 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "da8c33f6fb4b8bb88b0d407f68f03ed94428118d",
          "message": "chore(flake): update flake.lock inputs\n\n- update home-manager to rev 079a3b5d1aa6a719920a51316253b7d6dd22738d\n- update nixpkgs to rev 37bfb33419c6e367e8bb6f44041eaecf953b5236",
          "timestamp": "2026-07-27T08:36:17+09:00",
          "tree_id": "4ecadb25defda56600811c76be9ac2365b5b25fe",
          "url": "https://github.com/lemtoc/dotfiles/commit/da8c33f6fb4b8bb88b0d407f68f03ed94428118d"
        },
        "date": 1785109042165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 44.4,
            "range": "1.56 ms",
            "unit": "ms",
            "extra": "median: 44.4 ms\nmin: 41.86 ms\nmax: 48.39 ms\nstddev: 1.56 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 44.75,
            "range": "1.64 ms",
            "unit": "ms",
            "extra": "median: 44.75 ms\nmin: 42.17 ms\nmax: 48.88 ms\nstddev: 1.64 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.89,
            "range": "0.36 ms",
            "unit": "ms",
            "extra": "median: 0.89 ms\nmin: 0.83 ms\nmax: 2.36 ms\nstddev: 0.36 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.52,
            "range": "7.05 ms",
            "unit": "ms",
            "extra": "median: 2.52 ms\nmin: 1.61 ms\nmax: 18.38 ms\nstddev: 7.05 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 35.62,
            "range": "11.45 ms",
            "unit": "ms",
            "extra": "median: 35.62 ms\nmin: 34.89 ms\nmax: 81.76 ms\nstddev: 11.45 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "b0d92924aadd4ac1ae199d818ef6312424797b81",
          "message": "chore(flake): update flake.lock inputs and add codexbar cask\n\n- bump home-manager input to rev a14065d\n- bump nixpkgs input to rev 38a4887\n- add codexbar to the homebrew cask list on hosts/common",
          "timestamp": "2026-07-29T09:33:01+09:00",
          "tree_id": "a9ed8f453d3c3a0e4a361741d972a6bafe3bbb06",
          "url": "https://github.com/lemtoc/dotfiles/commit/b0d92924aadd4ac1ae199d818ef6312424797b81"
        },
        "date": 1785285236160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 48.18,
            "range": "4.78 ms",
            "unit": "ms",
            "extra": "median: 48.18 ms\nmin: 39.4 ms\nmax: 61.5 ms\nstddev: 4.78 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 48.63,
            "range": "4.77 ms",
            "unit": "ms",
            "extra": "median: 48.63 ms\nmin: 39.76 ms\nmax: 61.88 ms\nstddev: 4.77 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.87,
            "range": "0.1 ms",
            "unit": "ms",
            "extra": "median: 0.87 ms\nmin: 0.76 ms\nmax: 1.22 ms\nstddev: 0.1 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.93,
            "range": "6.37 ms",
            "unit": "ms",
            "extra": "median: 2.93 ms\nmin: 0.97 ms\nmax: 19.13 ms\nstddev: 6.37 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 37.42,
            "range": "4.28 ms",
            "unit": "ms",
            "extra": "median: 37.42 ms\nmin: 34.82 ms\nmax: 48.89 ms\nstddev: 4.28 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "d4b8ca2c24d9f12f6591ef9171b9585320994caa",
          "message": "chore(skills): move github-review-thread-reply to dot_agents\n\n- relocate skill from chezmoi/dot_codex/skills to chezmoi/dot_agents/skills\n- rename SKILL.md and agents/openai.yaml paths accordingly\n- align skill location with the dot_agents directory structure",
          "timestamp": "2026-07-31T21:56:47+09:00",
          "tree_id": "bf9ba21d00b448633ebc33de15de28bbc09aa763",
          "url": "https://github.com/lemtoc/dotfiles/commit/d4b8ca2c24d9f12f6591ef9171b9585320994caa"
        },
        "date": 1785502668433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 46.95,
            "range": "5.61 ms",
            "unit": "ms",
            "extra": "median: 46.95 ms\nmin: 42.92 ms\nmax: 66.41 ms\nstddev: 5.61 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 47.31,
            "range": "5.62 ms",
            "unit": "ms",
            "extra": "median: 47.31 ms\nmin: 43.33 ms\nmax: 66.8 ms\nstddev: 5.62 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.88,
            "range": "0.06 ms",
            "unit": "ms",
            "extra": "median: 0.88 ms\nmin: 0.82 ms\nmax: 1.04 ms\nstddev: 0.06 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 8.55,
            "range": "6.49 ms",
            "unit": "ms",
            "extra": "median: 8.55 ms\nmin: 1.06 ms\nmax: 18.8 ms\nstddev: 6.49 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 39.14,
            "range": "2.37 ms",
            "unit": "ms",
            "extra": "median: 39.14 ms\nmin: 36.53 ms\nmax: 45.02 ms\nstddev: 2.37 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "867eb5291a995645b439e1625f6f53a62123a929",
          "message": "chore(codex): update private_config.toml settings\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
          "timestamp": "2026-08-03T14:06:21+09:00",
          "tree_id": "d5d2fa4f639ef3e979897b59613cf63d0912ce52",
          "url": "https://github.com/lemtoc/dotfiles/commit/867eb5291a995645b439e1625f6f53a62123a929"
        },
        "date": 1785733631915,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 46.22,
            "range": "8.88 ms",
            "unit": "ms",
            "extra": "median: 46.22 ms\nmin: 39.26 ms\nmax: 73.61 ms\nstddev: 8.88 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 46.59,
            "range": "8.89 ms",
            "unit": "ms",
            "extra": "median: 46.59 ms\nmin: 39.65 ms\nmax: 73.99 ms\nstddev: 8.89 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.9,
            "range": "0.1 ms",
            "unit": "ms",
            "extra": "median: 0.9 ms\nmin: 0.8 ms\nmax: 1.22 ms\nstddev: 0.1 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 6.5,
            "range": "6.68 ms",
            "unit": "ms",
            "extra": "median: 6.5 ms\nmin: 1.11 ms\nmax: 18.01 ms\nstddev: 6.68 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 36.1,
            "range": "2.91 ms",
            "unit": "ms",
            "extra": "median: 36.1 ms\nmin: 34.58 ms\nmax: 46.32 ms\nstddev: 2.91 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "e4c28477ae43f72efbc0564c6676063517cc1d2c",
          "message": "chore(flake): update flake.lock inputs\n\n- bump home-manager to rev bf9ce9f\n- bump nix-darwin to rev 15abb8c\n- bump nixpkgs to rev 104240a",
          "timestamp": "2026-08-04T09:26:56+09:00",
          "tree_id": "488e424e08261bff5972711f5480c205668d0eb3",
          "url": "https://github.com/lemtoc/dotfiles/commit/e4c28477ae43f72efbc0564c6676063517cc1d2c"
        },
        "date": 1785803267229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 45.36,
            "range": "5.8 ms",
            "unit": "ms",
            "extra": "median: 45.36 ms\nmin: 41.58 ms\nmax: 66.14 ms\nstddev: 5.8 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 45.73,
            "range": "5.81 ms",
            "unit": "ms",
            "extra": "median: 45.73 ms\nmin: 41.98 ms\nmax: 66.53 ms\nstddev: 5.81 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.92,
            "range": "0.13 ms",
            "unit": "ms",
            "extra": "median: 0.92 ms\nmin: 0.82 ms\nmax: 1.39 ms\nstddev: 0.13 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.61,
            "range": "7.37 ms",
            "unit": "ms",
            "extra": "median: 2.61 ms\nmin: 0.91 ms\nmax: 19.4 ms\nstddev: 7.37 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 37.75,
            "range": "3 ms",
            "unit": "ms",
            "extra": "median: 37.75 ms\nmin: 34.92 ms\nmax: 44.2 ms\nstddev: 3 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "af97ab6257b63cb2b6f6b497da98397025834019",
          "message": "chore(homebrew): add stablyai/orca cask\n\n- add stablyai/orca/orca to the brew casks list",
          "timestamp": "2026-08-06T17:00:30+09:00",
          "tree_id": "907377b5572a4325a0c6daac65a8890d364534fa",
          "url": "https://github.com/lemtoc/dotfiles/commit/af97ab6257b63cb2b6f6b497da98397025834019"
        },
        "date": 1786003291362,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 46.61,
            "range": "4.58 ms",
            "unit": "ms",
            "extra": "median: 46.61 ms\nmin: 43.36 ms\nmax: 59.49 ms\nstddev: 4.58 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 46.96,
            "range": "4.59 ms",
            "unit": "ms",
            "extra": "median: 46.96 ms\nmin: 43.81 ms\nmax: 59.88 ms\nstddev: 4.59 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.92,
            "range": "0.04 ms",
            "unit": "ms",
            "extra": "median: 0.92 ms\nmin: 0.82 ms\nmax: 0.98 ms\nstddev: 0.04 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 16.44,
            "range": "5.07 ms",
            "unit": "ms",
            "extra": "median: 16.44 ms\nmin: 1.6 ms\nmax: 18.65 ms\nstddev: 5.07 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 38.85,
            "range": "8.92 ms",
            "unit": "ms",
            "extra": "median: 38.85 ms\nmin: 35.17 ms\nmax: 66.55 ms\nstddev: 8.92 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "d187ad350d0f0672be2afa1462cb11685c398bc5",
          "message": "chore(flake): update flake.lock inputs\n\n- bump home-manager input to latest revision\n- update lastModified and narHash for home-manager",
          "timestamp": "2026-08-07T10:50:58+09:00",
          "tree_id": "65122e7cf3f0b680ff7b2b0335454bddfd0b7cbb",
          "url": "https://github.com/lemtoc/dotfiles/commit/d187ad350d0f0672be2afa1462cb11685c398bc5"
        },
        "date": 1786067514363,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 46.96,
            "range": "4.46 ms",
            "unit": "ms",
            "extra": "median: 46.96 ms\nmin: 37.83 ms\nmax: 61.62 ms\nstddev: 4.46 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 47.31,
            "range": "4.47 ms",
            "unit": "ms",
            "extra": "median: 47.31 ms\nmin: 38.17 ms\nmax: 62.01 ms\nstddev: 4.47 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.88,
            "range": "0.04 ms",
            "unit": "ms",
            "extra": "median: 0.88 ms\nmin: 0.82 ms\nmax: 0.94 ms\nstddev: 0.04 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 3.09,
            "range": "6.11 ms",
            "unit": "ms",
            "extra": "median: 3.09 ms\nmin: 1.38 ms\nmax: 17.77 ms\nstddev: 6.11 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 37.1,
            "range": "2.62 ms",
            "unit": "ms",
            "extra": "median: 37.1 ms\nmin: 35.01 ms\nmax: 44.58 ms\nstddev: 2.62 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "0c40901bf07a5afc0dbe55c8da38a42d4b5852e9",
          "message": "docs(codex): add over-engineering and root-cause guidance to AGENTS.md\n\n- avoid speculative abstractions and generalization beyond task scope\n- require fixing root causes instead of applying quick workarounds",
          "timestamp": "2026-08-10T16:17:30+09:00",
          "tree_id": "558b93c44dc850d7058f5959e4ab7fa8b9899e94",
          "url": "https://github.com/lemtoc/dotfiles/commit/0c40901bf07a5afc0dbe55c8da38a42d4b5852e9"
        },
        "date": 1786346299424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 46.36,
            "range": "6.73 ms",
            "unit": "ms",
            "extra": "median: 46.36 ms\nmin: 42.78 ms\nmax: 73.29 ms\nstddev: 6.73 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 46.71,
            "range": "6.73 ms",
            "unit": "ms",
            "extra": "median: 46.71 ms\nmin: 43.11 ms\nmax: 73.66 ms\nstddev: 6.73 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.91,
            "range": "0.39 ms",
            "unit": "ms",
            "extra": "median: 0.91 ms\nmin: 0.84 ms\nmax: 2.5 ms\nstddev: 0.39 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.55,
            "range": "6.91 ms",
            "unit": "ms",
            "extra": "median: 2.55 ms\nmin: 1.71 ms\nmax: 17.82 ms\nstddev: 6.91 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 37.88,
            "range": "3.25 ms",
            "unit": "ms",
            "extra": "median: 37.88 ms\nmin: 35.35 ms\nmax: 46.79 ms\nstddev: 3.25 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "lemtoc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "feffb73b95fdb0cba5545c1a6affb98d06e0a1f4",
          "message": "feat(git): sign commits with a Secure Enclave key on M4Pro (#10)",
          "timestamp": "2026-08-10T19:07:22+09:00",
          "tree_id": "c0c7f584b489c11826724ec9d57fa5e2c4425791",
          "url": "https://github.com/lemtoc/dotfiles/commit/feffb73b95fdb0cba5545c1a6affb98d06e0a1f4"
        },
        "date": 1786356485932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 45.15,
            "range": "5.56 ms",
            "unit": "ms",
            "extra": "median: 45.15 ms\nmin: 37.32 ms\nmax: 62.5 ms\nstddev: 5.56 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 45.47,
            "range": "5.56 ms",
            "unit": "ms",
            "extra": "median: 45.47 ms\nmin: 37.68 ms\nmax: 62.83 ms\nstddev: 5.56 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.9,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 0.9 ms\nmin: 0.85 ms\nmax: 0.96 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.28,
            "range": "0.64 ms",
            "unit": "ms",
            "extra": "median: 2.28 ms\nmin: 1.4 ms\nmax: 4.21 ms\nstddev: 0.64 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 36.92,
            "range": "2.49 ms",
            "unit": "ms",
            "extra": "median: 36.92 ms\nmin: 34.77 ms\nmax: 43.69 ms\nstddev: 2.49 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "96faa07557e08cc834519b2d3eb1c2d600092b0d",
          "message": "chore(homebrew): add rtk formula\n\n- add rtk (Rust Token Killer) to the Homebrew brews list",
          "timestamp": "2026-08-14T01:02:31+09:00",
          "tree_id": "6f71c6ff66db108b5e49f99f029da1ba52e9e7c9",
          "url": "https://github.com/lemtoc/dotfiles/commit/96faa07557e08cc834519b2d3eb1c2d600092b0d"
        },
        "date": 1786637007688,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 45.96,
            "range": "9.77 ms",
            "unit": "ms",
            "extra": "median: 45.96 ms\nmin: 40.32 ms\nmax: 79.51 ms\nstddev: 9.77 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 46.38,
            "range": "9.77 ms",
            "unit": "ms",
            "extra": "median: 46.38 ms\nmin: 40.64 ms\nmax: 79.88 ms\nstddev: 9.77 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.92,
            "range": "0.05 ms",
            "unit": "ms",
            "extra": "median: 0.92 ms\nmin: 0.83 ms\nmax: 1 ms\nstddev: 0.05 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.63,
            "range": "6.6 ms",
            "unit": "ms",
            "extra": "median: 2.63 ms\nmin: 1.22 ms\nmax: 18.11 ms\nstddev: 6.6 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 36.94,
            "range": "18.64 ms",
            "unit": "ms",
            "extra": "median: 36.94 ms\nmin: 35.12 ms\nmax: 113.84 ms\nstddev: 18.64 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "4fce781565e4f5bb205e186636efddadc5a32434",
          "message": "chore(mise): add ni tool\n\n- install ni via mise for package-manager-agnostic script running\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
          "timestamp": "2026-08-24T15:52:31+09:00",
          "tree_id": "f3491c7fb15ddd39f7ecc4dd7435a7d49133042d",
          "url": "https://github.com/lemtoc/dotfiles/commit/4fce781565e4f5bb205e186636efddadc5a32434"
        },
        "date": 1787554402348,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 48.48,
            "range": "3.74 ms",
            "unit": "ms",
            "extra": "median: 48.48 ms\nmin: 44.21 ms\nmax: 56.87 ms\nstddev: 3.74 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 48.92,
            "range": "3.73 ms",
            "unit": "ms",
            "extra": "median: 48.92 ms\nmin: 44.62 ms\nmax: 57.27 ms\nstddev: 3.73 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.87,
            "range": "0.13 ms",
            "unit": "ms",
            "extra": "median: 0.87 ms\nmin: 0.79 ms\nmax: 1.36 ms\nstddev: 0.13 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 16.11,
            "range": "7.63 ms",
            "unit": "ms",
            "extra": "median: 16.11 ms\nmin: 1.39 ms\nmax: 19.51 ms\nstddev: 7.63 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 38.07,
            "range": "2.99 ms",
            "unit": "ms",
            "extra": "median: 38.07 ms\nmin: 35.75 ms\nmax: 44.3 ms\nstddev: 2.99 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+xrryx@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "xrryx"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30981f69eb87551519c3a94e2cc4f239bc4f4e07",
          "message": "chore(identity): migrate account references to xrryx (#11)\n\n* chore(identity): migrate account references to ve62ca\n\n- Update GitHub, domain, Homebrew, mise, and Git identity references\n- Point the Nova flake input and lock file at ve62ca-labs\n- Align M4Air and migration examples with the renamed account\n- Track the renamed profile repository path in Codex\n\nCo-authored-by: Codex GPT-5.6 Sol Max <noreply@openai.com>\n\n* chore(identity): migrate account references to xrryx\n\n- Update GitHub, npm, and organization references for xrryx.\n- Keep host-specific usernames and the existing custom domain unchanged.\n\nCo-authored-by: Codex GPT-5.6 Sol Max <noreply@openai.com>\n\n---------\n\nCo-authored-by: ve62ca <83203852+ve62ca@users.noreply.github.com>\nCo-authored-by: Codex GPT-5.6 Sol Max <noreply@openai.com>",
          "timestamp": "2026-09-07T10:48:00+09:00",
          "tree_id": "fd9e0cfa1101ef14ddad28285d688c9370eb6e51",
          "url": "https://github.com/xrryx/dotfiles/commit/30981f69eb87551519c3a94e2cc4f239bc4f4e07"
        },
        "date": 1788745727975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 49.63,
            "range": "5.75 ms",
            "unit": "ms",
            "extra": "median: 49.63 ms\nmin: 46.47 ms\nmax: 71.91 ms\nstddev: 5.75 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 50.02,
            "range": "5.73 ms",
            "unit": "ms",
            "extra": "median: 50.02 ms\nmin: 46.79 ms\nmax: 72.24 ms\nstddev: 5.73 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.92,
            "range": "0.25 ms",
            "unit": "ms",
            "extra": "median: 0.92 ms\nmin: 0.85 ms\nmax: 1.94 ms\nstddev: 0.25 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.23,
            "range": "7.87 ms",
            "unit": "ms",
            "extra": "median: 2.23 ms\nmin: 1.32 ms\nmax: 19.68 ms\nstddev: 7.87 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 41.2,
            "range": "2.17 ms",
            "unit": "ms",
            "extra": "median: 41.2 ms\nmin: 38.67 ms\nmax: 48.51 ms\nstddev: 2.17 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+xlastz@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "xlastz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d50490ad2d23a8b28939bce5fc35e112e16f8270",
          "message": "chore(identity): migrate account references to xlastz (#12)\n\n* chore(identity): migrate account references to xlastz\n\n- Update Git author identity, Homebrew tap, and awsctx installation source\n- Refresh repository documentation and remote migration examples\n- Keep npm scopes and custom domains unchanged\n\nCo-authored-by: Codex GPT-6 Astra Medium <noreply@openai.com>\n\n* chore(nix): migrate nova input to xlastz labs\n\n- Update the nova input owner in the flake and lock file\n- Preserve the pinned revision and content hash\n\nCo-authored-by: Codex GPT-6 Astra Medium <noreply@openai.com>\n\n---------\n\nCo-authored-by: Codex GPT-6 Astra Medium <noreply@openai.com>",
          "timestamp": "2026-09-08T01:24:43+09:00",
          "tree_id": "94ea1d70debbb95dd244c265f7847f51b2633db3",
          "url": "https://github.com/xlastz/dotfiles/commit/d50490ad2d23a8b28939bce5fc35e112e16f8270"
        },
        "date": 1788798331215,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 45.33,
            "range": "3.05 ms",
            "unit": "ms",
            "extra": "median: 45.33 ms\nmin: 43.69 ms\nmax: 57.07 ms\nstddev: 3.05 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 45.74,
            "range": "3.08 ms",
            "unit": "ms",
            "extra": "median: 45.74 ms\nmin: 44.08 ms\nmax: 57.64 ms\nstddev: 3.08 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.94,
            "range": "0.02 ms",
            "unit": "ms",
            "extra": "median: 0.94 ms\nmin: 0.91 ms\nmax: 0.98 ms\nstddev: 0.02 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 13.38,
            "range": "7.35 ms",
            "unit": "ms",
            "extra": "median: 13.38 ms\nmin: 1.65 ms\nmax: 19.99 ms\nstddev: 7.35 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 44.66,
            "range": "1.45 ms",
            "unit": "ms",
            "extra": "median: 44.66 ms\nmin: 43.99 ms\nmax: 49.81 ms\nstddev: 1.45 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "ixxq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "595be20ab13b64957c240858e7f3dc5e9fe042d9",
          "message": "chore(identity): migrate account references to ixxq (#13)\n\n* chore(identity): migrate account references to ixxq\n\n- Update the renamed GitHub identity and repository references.\n- Preserve package versions, pinned dependencies, and deferred npm settings.\n\nCo-authored-by: Codex GPT-6 Astra Medium <noreply@openai.com>\n\n* chore(identity): migrate labs references to ixxq\n\n- Align organization and repository references with ixxq-labs.\n- Preserve dependency pins and release versions.\n\nCo-authored-by: Codex GPT-6 Astra Medium <noreply@openai.com>\n\n---------\n\nCo-authored-by: Codex GPT-6 Astra Medium <noreply@openai.com>",
          "timestamp": "2026-09-08T03:16:16+09:00",
          "tree_id": "659e3e06295e33e977a64ca352aabf8d93838f3c",
          "url": "https://github.com/ixxq/dotfiles/commit/595be20ab13b64957c240858e7f3dc5e9fe042d9"
        },
        "date": 1788805021018,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 44.47,
            "range": "3.2 ms",
            "unit": "ms",
            "extra": "median: 44.47 ms\nmin: 43.35 ms\nmax: 56.93 ms\nstddev: 3.2 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 44.98,
            "range": "3.18 ms",
            "unit": "ms",
            "extra": "median: 44.98 ms\nmin: 43.75 ms\nmax: 57.28 ms\nstddev: 3.18 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.94,
            "range": "0.02 ms",
            "unit": "ms",
            "extra": "median: 0.94 ms\nmin: 0.92 ms\nmax: 0.99 ms\nstddev: 0.02 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 14.28,
            "range": "7.47 ms",
            "unit": "ms",
            "extra": "median: 14.28 ms\nmin: 1.54 ms\nmax: 20.57 ms\nstddev: 7.47 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 44.18,
            "range": "0.71 ms",
            "unit": "ms",
            "extra": "median: 44.18 ms\nmin: 43.39 ms\nmax: 45.75 ms\nstddev: 0.71 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "1e73b8752a83544ddfd370e8e11e2740272db98f",
          "message": "chore(identity): integrate merged ixxq migration\n\n- Integrate the reviewed identity migration from origin/main.\n- Preserve all pre-existing local commits and Nix input pins.\n\nCo-authored-by: Codex GPT-6 Astra Medium <noreply@openai.com>",
          "timestamp": "2026-09-08T03:17:13+09:00",
          "tree_id": "ab07e8bf0ca76387f2afede1c7ad2a8146157df6",
          "url": "https://github.com/ixxq/dotfiles/commit/1e73b8752a83544ddfd370e8e11e2740272db98f"
        },
        "date": 1788805664234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 47.37,
            "range": "3.41 ms",
            "unit": "ms",
            "extra": "median: 47.37 ms\nmin: 43.02 ms\nmax: 54.42 ms\nstddev: 3.41 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 47.75,
            "range": "3.39 ms",
            "unit": "ms",
            "extra": "median: 47.75 ms\nmin: 43.45 ms\nmax: 54.75 ms\nstddev: 3.39 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.87,
            "range": "0.6 ms",
            "unit": "ms",
            "extra": "median: 0.87 ms\nmin: 0.68 ms\nmax: 3.33 ms\nstddev: 0.6 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 16.11,
            "range": "7.84 ms",
            "unit": "ms",
            "extra": "median: 16.11 ms\nmin: 0.68 ms\nmax: 19.87 ms\nstddev: 7.84 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 39.89,
            "range": "3.73 ms",
            "unit": "ms",
            "extra": "median: 39.89 ms\nmin: 36.35 ms\nmax: 49.45 ms\nstddev: 3.73 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "7fa02941c769ce48c188e82b6e564035465f64f3",
          "message": "chore(git): upgrade to 2.56.0\n\n- Update the Git source version and archive hash to 2.56.0.\n- Exclude the Darwin Unicode filename patch now included upstream.\n\nCo-authored-by: Codex GPT-6 Astra Max <noreply@openai.com>",
          "timestamp": "2026-09-30T08:58:00+09:00",
          "tree_id": "e6c44ed27de55ad9b42d56236d375da0a3cbb641",
          "url": "https://github.com/ixxq/dotfiles/commit/7fa02941c769ce48c188e82b6e564035465f64f3"
        },
        "date": 1790726357935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 47.62,
            "range": "4.41 ms",
            "unit": "ms",
            "extra": "median: 47.62 ms\nmin: 42.21 ms\nmax: 62.3 ms\nstddev: 4.41 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 48.02,
            "range": "4.4 ms",
            "unit": "ms",
            "extra": "median: 48.02 ms\nmin: 42.64 ms\nmax: 62.69 ms\nstddev: 4.4 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.87,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 0.87 ms\nmin: 0.82 ms\nmax: 0.93 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 3.56,
            "range": "7.05 ms",
            "unit": "ms",
            "extra": "median: 3.56 ms\nmin: 1.07 ms\nmax: 17.99 ms\nstddev: 7.05 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 38.17,
            "range": "2.52 ms",
            "unit": "ms",
            "extra": "median: 38.17 ms\nmin: 36.68 ms\nmax: 47.29 ms\nstddev: 2.52 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "943d77e21ec3b2abe88a5e930e50482d48e2d8e8",
          "message": "chore(homebrew): add t3-code cask\n\n- Include t3-code in the shared macOS Homebrew cask list\n\nCo-authored-by: Codex GPT-6 Astra Max <noreply@openai.com>",
          "timestamp": "2026-10-01T21:56:47+09:00",
          "tree_id": "2f4de7704cce525634788227fd3ca53fcf754022",
          "url": "https://github.com/ixxq/dotfiles/commit/943d77e21ec3b2abe88a5e930e50482d48e2d8e8"
        },
        "date": 1790859940131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 47.74,
            "range": "5.49 ms",
            "unit": "ms",
            "extra": "median: 47.74 ms\nmin: 41.86 ms\nmax: 62.55 ms\nstddev: 5.49 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 48.12,
            "range": "5.51 ms",
            "unit": "ms",
            "extra": "median: 48.12 ms\nmin: 42.24 ms\nmax: 62.95 ms\nstddev: 5.51 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.93,
            "range": "0.1 ms",
            "unit": "ms",
            "extra": "median: 0.93 ms\nmin: 0.78 ms\nmax: 1.17 ms\nstddev: 0.1 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.89,
            "range": "7.16 ms",
            "unit": "ms",
            "extra": "median: 2.89 ms\nmin: 1.03 ms\nmax: 18.69 ms\nstddev: 7.16 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 43.14,
            "range": "18.61 ms",
            "unit": "ms",
            "extra": "median: 43.14 ms\nmin: 37.9 ms\nmax: 116.94 ms\nstddev: 18.61 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "662d4fadec19f651870f8241ff922153e3a7e8cc",
          "message": "fix(nix): use lemtoc as the M4Air local username\n\n- Match the M4Air configuration to the existing lemtoc macOS account.\n- Generate Home Manager settings and signing key paths for that account.\n\nCo-authored-by: Codex GPT-5.5 <noreply@openai.com>",
          "timestamp": "2026-10-12T21:24:58+09:00",
          "tree_id": "1dad8dad985674b6c428548be32e91163b604045",
          "url": "https://github.com/ixxq/dotfiles/commit/662d4fadec19f651870f8241ff922153e3a7e8cc"
        },
        "date": 1791808922929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 44.93,
            "range": "6 ms",
            "unit": "ms",
            "extra": "median: 44.93 ms\nmin: 43.04 ms\nmax: 69.51 ms\nstddev: 6 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 45.36,
            "range": "6.01 ms",
            "unit": "ms",
            "extra": "median: 45.36 ms\nmin: 43.48 ms\nmax: 69.97 ms\nstddev: 6.01 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.87,
            "range": "0.02 ms",
            "unit": "ms",
            "extra": "median: 0.87 ms\nmin: 0.84 ms\nmax: 0.89 ms\nstddev: 0.02 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.25,
            "range": "7.28 ms",
            "unit": "ms",
            "extra": "median: 2.25 ms\nmin: 1.42 ms\nmax: 19.22 ms\nstddev: 7.28 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 34.14,
            "range": "0.81 ms",
            "unit": "ms",
            "extra": "median: 34.14 ms\nmin: 33.68 ms\nmax: 37.36 ms\nstddev: 0.81 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "d20b33ccbfcbcbf8b4043978c35b1d1cdf23532c",
          "message": "chore(homebrew): add Pieto Timer cask\n\n- Add watrix811/tap to the shared trusted Homebrew taps\n- Include Pieto Timer in the managed cask list\n\nCo-authored-by: Codex GPT-6.1 Sol High <noreply@openai.com>",
          "timestamp": "2026-10-14T13:17:06+09:00",
          "tree_id": "f607541cbb7ac3ad9c36b97148a81242ad24fefd",
          "url": "https://github.com/ixxq/dotfiles/commit/d20b33ccbfcbcbf8b4043978c35b1d1cdf23532c"
        },
        "date": 1791951647004,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 47.77,
            "range": "2.79 ms",
            "unit": "ms",
            "extra": "median: 47.77 ms\nmin: 45.12 ms\nmax: 56.81 ms\nstddev: 2.79 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 48.13,
            "range": "2.8 ms",
            "unit": "ms",
            "extra": "median: 48.13 ms\nmin: 45.5 ms\nmax: 57.31 ms\nstddev: 2.8 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.87,
            "range": "0.21 ms",
            "unit": "ms",
            "extra": "median: 0.87 ms\nmin: 0.77 ms\nmax: 1.72 ms\nstddev: 0.21 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.61,
            "range": "7.13 ms",
            "unit": "ms",
            "extra": "median: 2.61 ms\nmin: 0.83 ms\nmax: 20.48 ms\nstddev: 7.13 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 37.17,
            "range": "3.2 ms",
            "unit": "ms",
            "extra": "median: 37.17 ms\nmin: 35.66 ms\nmax: 46.78 ms\nstddev: 3.2 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "8608177b360c23bed34ee7f73b4a75d9dbb18934",
          "message": "feat(sidepulse): repeat the device startup rainbow twice\n\n- Play the device INIT.LED rainbow for two sweeps while keeping Codex startup at one\n- Update documentation and verify working-motion timing and final darkness\n\nCo-authored-by: Codex GPT-6.1 Sol High <noreply@openai.com>",
          "timestamp": "2026-10-15T01:58:20+09:00",
          "tree_id": "0e05418d072968a8f1779d039ecc8ba11fc6379a",
          "url": "https://github.com/ixxq/dotfiles/commit/8608177b360c23bed34ee7f73b4a75d9dbb18934"
        },
        "date": 1791997149213,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 45.71,
            "range": "5.53 ms",
            "unit": "ms",
            "extra": "median: 45.71 ms\nmin: 37.3 ms\nmax: 63.35 ms\nstddev: 5.53 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 46.1,
            "range": "5.54 ms",
            "unit": "ms",
            "extra": "median: 46.1 ms\nmin: 37.65 ms\nmax: 63.8 ms\nstddev: 5.54 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.9,
            "range": "0.18 ms",
            "unit": "ms",
            "extra": "median: 0.9 ms\nmin: 0.84 ms\nmax: 1.6 ms\nstddev: 0.18 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 11.91,
            "range": "6.9 ms",
            "unit": "ms",
            "extra": "median: 11.91 ms\nmin: 1.1 ms\nmax: 18.23 ms\nstddev: 6.9 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 35.77,
            "range": "7.49 ms",
            "unit": "ms",
            "extra": "median: 35.77 ms\nmin: 34.06 ms\nmax: 65.65 ms\nstddev: 7.49 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "a60d28a563f0b50d854f51ec6079b99d4a4874f6",
          "message": "chore(nix): update flake inputs\n\n- bump home-manager to 6407259\n- bump nix-darwin to f0ec2b3\n- bump nixpkgs to f20cd90\n- bump nova to cfcd1ce",
          "timestamp": "2026-10-19T09:49:08+09:00",
          "tree_id": "e4aa7ac9f154c731cdf9ca8fda6944c047f7c445",
          "url": "https://github.com/ixxq/dotfiles/commit/a60d28a563f0b50d854f51ec6079b99d4a4874f6"
        },
        "date": 1792371203481,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 49.07,
            "range": "4.19 ms",
            "unit": "ms",
            "extra": "median: 49.07 ms\nmin: 37.72 ms\nmax: 58.74 ms\nstddev: 4.19 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 49.44,
            "range": "4.19 ms",
            "unit": "ms",
            "extra": "median: 49.44 ms\nmin: 38.12 ms\nmax: 59.06 ms\nstddev: 4.19 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.87,
            "range": "0.08 ms",
            "unit": "ms",
            "extra": "median: 0.87 ms\nmin: 0.8 ms\nmax: 1.11 ms\nstddev: 0.08 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 7.89,
            "range": "7.29 ms",
            "unit": "ms",
            "extra": "median: 7.89 ms\nmin: 1.01 ms\nmax: 19.78 ms\nstddev: 7.29 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 39.55,
            "range": "3.31 ms",
            "unit": "ms",
            "extra": "median: 39.55 ms\nmin: 35.51 ms\nmax: 46.59 ms\nstddev: 3.31 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "ixxq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "949a6697c6a75f82f2d68185a0c97138a2739156",
          "message": "fix(mise): update Nix-managed mise to 2026.10.17 (#14)\n\n- Update the official macOS arm64 binary and verified SHA-256 for the CA trust fix.\n- Keep the Nix pin until nixpkgs includes the fixed version.\n- Verify Nix builds, interactive zsh tool switching, and benchmark thresholds locally and in CI.\n\nCo-authored-by: Codex GPT-6 Astra Max <noreply@openai.com>",
          "timestamp": "2026-10-23T16:40:23+09:00",
          "tree_id": "3430b38898217f2f7d46bf329ee84f7c4f9507ed",
          "url": "https://github.com/ixxq/dotfiles/commit/949a6697c6a75f82f2d68185a0c97138a2739156"
        },
        "date": 1792741267917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 59.35,
            "range": "3.54 ms",
            "unit": "ms",
            "extra": "median: 59.35 ms\nmin: 55.12 ms\nmax: 72.27 ms\nstddev: 3.54 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 59.81,
            "range": "3.52 ms",
            "unit": "ms",
            "extra": "median: 59.81 ms\nmin: 55.6 ms\nmax: 72.69 ms\nstddev: 3.52 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.92,
            "range": "0.02 ms",
            "unit": "ms",
            "extra": "median: 0.92 ms\nmin: 0.87 ms\nmax: 0.95 ms\nstddev: 0.02 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 17.04,
            "range": "1.77 ms",
            "unit": "ms",
            "extra": "median: 17.04 ms\nmin: 13.39 ms\nmax: 20.66 ms\nstddev: 1.77 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 50.32,
            "range": "0.97 ms",
            "unit": "ms",
            "extra": "median: 50.32 ms\nmin: 48.91 ms\nmax: 52.84 ms\nstddev: 0.97 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "52c59751a2812674bdb2c9ba19ca8bd2b453ee03",
          "message": "chore(homebrew): add Dimble cask\n\n- Add fif7y/tap to the trusted Homebrew taps.\n- Manage Dimble through the shared cask configuration.\n\nCo-authored-by: Codex GPT-6 Astra Max <noreply@openai.com>",
          "timestamp": "2026-10-23T16:49:51+09:00",
          "tree_id": "df4f642630232f2aa9a6920f98c0a6b367755f9d",
          "url": "https://github.com/ixxq/dotfiles/commit/52c59751a2812674bdb2c9ba19ca8bd2b453ee03"
        },
        "date": 1792742001896,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 52.42,
            "range": "4.03 ms",
            "unit": "ms",
            "extra": "median: 52.42 ms\nmin: 50.34 ms\nmax: 67.37 ms\nstddev: 4.03 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 52.77,
            "range": "4.04 ms",
            "unit": "ms",
            "extra": "median: 52.77 ms\nmin: 50.74 ms\nmax: 67.8 ms\nstddev: 4.04 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.9,
            "range": "0.05 ms",
            "unit": "ms",
            "extra": "median: 0.9 ms\nmin: 0.79 ms\nmax: 1.05 ms\nstddev: 0.05 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2,
            "range": "6.76 ms",
            "unit": "ms",
            "extra": "median: 2 ms\nmin: 1.02 ms\nmax: 17.94 ms\nstddev: 6.76 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 41.65,
            "range": "3.56 ms",
            "unit": "ms",
            "extra": "median: 41.65 ms\nmin: 40.71 ms\nmax: 54.05 ms\nstddev: 3.56 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "8280d157bd54c368a6e23fc3fbcf5b0ead04ee57",
          "message": "fix(meltype): use よく分からん for よくわからん\n\n- Replace the all-hiragana output in the chezmoi-managed user dictionary\n\nCo-authored-by: Codex GPT-6 Astra Max <noreply@openai.com>",
          "timestamp": "2026-10-23T20:01:25+09:00",
          "tree_id": "d88c0a04d669257f60b5760c032ab6c1fc61f721",
          "url": "https://github.com/ixxq/dotfiles/commit/8280d157bd54c368a6e23fc3fbcf5b0ead04ee57"
        },
        "date": 1792753375794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 52.67,
            "range": "5.07 ms",
            "unit": "ms",
            "extra": "median: 52.67 ms\nmin: 49.14 ms\nmax: 70.3 ms\nstddev: 5.07 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 53.1,
            "range": "5.07 ms",
            "unit": "ms",
            "extra": "median: 53.1 ms\nmin: 49.53 ms\nmax: 70.73 ms\nstddev: 5.07 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.86,
            "range": "0.22 ms",
            "unit": "ms",
            "extra": "median: 0.86 ms\nmin: 0.81 ms\nmax: 1.76 ms\nstddev: 0.22 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 3.22,
            "range": "7.24 ms",
            "unit": "ms",
            "extra": "median: 3.22 ms\nmin: 1.23 ms\nmax: 18.6 ms\nstddev: 7.24 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 43.28,
            "range": "5.04 ms",
            "unit": "ms",
            "extra": "median: 43.28 ms\nmin: 40.99 ms\nmax: 55.45 ms\nstddev: 5.04 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "63fe64904b1ab5ae0bfa1993dee9413b0929b1f7",
          "message": "chore(sidepulse): trim agent-monitor logs daily\n\n- add a LaunchAgent that keeps the newest ~50MB of each jsonl over 100MB at 04:00\n- truncate in place so sidepulse's per-write append handles keep working\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-26T15:44:09+09:00",
          "tree_id": "1f5d0457ffba05a0c884964c3d08d5e2924c2f8f",
          "url": "https://github.com/ixxq/dotfiles/commit/63fe64904b1ab5ae0bfa1993dee9413b0929b1f7"
        },
        "date": 1792997092457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 50.27,
            "range": "5.76 ms",
            "unit": "ms",
            "extra": "median: 50.27 ms\nmin: 48.39 ms\nmax: 72.21 ms\nstddev: 5.76 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 50.74,
            "range": "5.78 ms",
            "unit": "ms",
            "extra": "median: 50.74 ms\nmin: 48.89 ms\nmax: 72.77 ms\nstddev: 5.78 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.89,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 0.89 ms\nmin: 0.8 ms\nmax: 0.94 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.85,
            "range": "6.58 ms",
            "unit": "ms",
            "extra": "median: 2.85 ms\nmin: 0.8 ms\nmax: 19.63 ms\nstddev: 6.58 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 40.26,
            "range": "2.27 ms",
            "unit": "ms",
            "extra": "median: 40.26 ms\nmin: 39.88 ms\nmax: 49.54 ms\nstddev: 2.27 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "8f81444c4c190d3d1d10ee99bf721c163646642d",
          "message": "chore(claude): add japanese-guard hook\n\n- add japanese-guard.py from minorun365/claude-code-japanese-guard\n- register it as a Stop hook to send English replies back for a Japanese rewrite\n- register it as a PreToolUse hook on `mcp__.*__wrap_up` to block English wrap-up boxes\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-27T11:06:01+09:00",
          "tree_id": "afb09ea9207a3fe7481df5bd01db8022794c9aca",
          "url": "https://github.com/ixxq/dotfiles/commit/8f81444c4c190d3d1d10ee99bf721c163646642d"
        },
        "date": 1793073606383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 51.92,
            "range": "6.41 ms",
            "unit": "ms",
            "extra": "median: 51.92 ms\nmin: 48.47 ms\nmax: 76.92 ms\nstddev: 6.41 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 52.36,
            "range": "6.41 ms",
            "unit": "ms",
            "extra": "median: 52.36 ms\nmin: 48.93 ms\nmax: 77.37 ms\nstddev: 6.41 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.9,
            "range": "0.05 ms",
            "unit": "ms",
            "extra": "median: 0.9 ms\nmin: 0.83 ms\nmax: 1 ms\nstddev: 0.05 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 3.16,
            "range": "6.63 ms",
            "unit": "ms",
            "extra": "median: 3.16 ms\nmin: 1.19 ms\nmax: 17.16 ms\nstddev: 6.63 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 41.92,
            "range": "2.33 ms",
            "unit": "ms",
            "extra": "median: 41.92 ms\nmin: 39.13 ms\nmax: 48.63 ms\nstddev: 2.33 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "d366eabc3277576f9dd678fe7086f9bee8e92cfa",
          "message": "chore(claude): require advisor calls on multi-step tasks\n\n- the advisor was enabled in 9 sessions today but never called unprompted\n- call it after orientation and before declaring completion\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-27T18:13:22+09:00",
          "tree_id": "76a871e7db1f309b67d0d4e915b0a8cea8d222d1",
          "url": "https://github.com/ixxq/dotfiles/commit/d366eabc3277576f9dd678fe7086f9bee8e92cfa"
        },
        "date": 1793092852796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 50.29,
            "range": "4.06 ms",
            "unit": "ms",
            "extra": "median: 50.29 ms\nmin: 49.03 ms\nmax: 66.7 ms\nstddev: 4.06 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 50.74,
            "range": "4.06 ms",
            "unit": "ms",
            "extra": "median: 50.74 ms\nmin: 49.52 ms\nmax: 67.17 ms\nstddev: 4.06 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.9,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 0.9 ms\nmin: 0.84 ms\nmax: 0.94 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 15.64,
            "range": "7.19 ms",
            "unit": "ms",
            "extra": "median: 15.64 ms\nmin: 1.37 ms\nmax: 18.46 ms\nstddev: 7.19 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 40.38,
            "range": "0.56 ms",
            "unit": "ms",
            "extra": "median: 40.38 ms\nmin: 39.65 ms\nmax: 41.85 ms\nstddev: 0.56 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "3516ac102683fe7b0413b2f515222a7bdc1f4142",
          "message": "fix(claude): stop japanese-guard from flagging text it should skip\n\n- ignore `<system-reminder>` blocks, which can carry English subagent reports inside an assistant text block\n- also start a turn after `turn_duration`, so turns begun by a subagent report do not re-check the previous turn\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-27T18:39:35+09:00",
          "tree_id": "eee539b091567af010d9a084f865a4bccf004d64",
          "url": "https://github.com/ixxq/dotfiles/commit/3516ac102683fe7b0413b2f515222a7bdc1f4142"
        },
        "date": 1793094048914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 50.98,
            "range": "5.59 ms",
            "unit": "ms",
            "extra": "median: 50.98 ms\nmin: 46.75 ms\nmax: 71.26 ms\nstddev: 5.59 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 51.42,
            "range": "5.58 ms",
            "unit": "ms",
            "extra": "median: 51.42 ms\nmin: 47.12 ms\nmax: 71.7 ms\nstddev: 5.58 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.91,
            "range": "0.13 ms",
            "unit": "ms",
            "extra": "median: 0.91 ms\nmin: 0.8 ms\nmax: 1.36 ms\nstddev: 0.13 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.45,
            "range": "6.83 ms",
            "unit": "ms",
            "extra": "median: 2.45 ms\nmin: 0.99 ms\nmax: 18.47 ms\nstddev: 6.83 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 40.85,
            "range": "3.32 ms",
            "unit": "ms",
            "extra": "median: 40.85 ms\nmin: 39.69 ms\nmax: 49.36 ms\nstddev: 3.32 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "417fd2f9486df81f1a5a03267f74b387a007d34e",
          "message": "chore(claude): manage keybindings with chezmoi\n\n- bind cmd+s to chat:stash and cmd+z to chat:undo\n- rely on the Kitty keyboard protocol so Orca and cmux forward Cmd\n- keep the existing Orca agent view binding\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-28T12:12:49+09:00",
          "tree_id": "74408acff97219bfa29a18f7ee6a21657dae01a5",
          "url": "https://github.com/ixxq/dotfiles/commit/417fd2f9486df81f1a5a03267f74b387a007d34e"
        },
        "date": 1793157263884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 50.4,
            "range": "5.4 ms",
            "unit": "ms",
            "extra": "median: 50.4 ms\nmin: 49.26 ms\nmax: 72.5 ms\nstddev: 5.4 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 50.79,
            "range": "5.46 ms",
            "unit": "ms",
            "extra": "median: 50.79 ms\nmin: 49.67 ms\nmax: 72.95 ms\nstddev: 5.46 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.9,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 0.9 ms\nmin: 0.84 ms\nmax: 0.97 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.04,
            "range": "6.44 ms",
            "unit": "ms",
            "extra": "median: 2.04 ms\nmin: 0.91 ms\nmax: 17.25 ms\nstddev: 6.44 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 41.48,
            "range": "0.92 ms",
            "unit": "ms",
            "extra": "median: 41.48 ms\nmin: 40.4 ms\nmax: 44.15 ms\nstddev: 0.92 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "f030612cd64b6eafca84b1ec2946a70bb678f841",
          "message": "chore(claude): add follow-up loop to review thread reply skill\n\n- wait for the reviewer bot after replying and resolve withdrawn threads\n- self-assess maintained concerns: fix and reply, explain, or escalate\n- consult `advisor` once before asking the user on undecidable cases\n- fetch threads via GraphQL `reviewThreads` to get thread IDs for resolve\n- scope guardrails so resolve and code changes follow the loop's rules\n- cap the loop at 3 rounds to avoid endless bot ping-pong\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-28T15:31:11+09:00",
          "tree_id": "fd5d30338f69e3a72c84471d24927c504d609ee0",
          "url": "https://github.com/ixxq/dotfiles/commit/f030612cd64b6eafca84b1ec2946a70bb678f841"
        },
        "date": 1793169869079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 51.63,
            "range": "14.13 ms",
            "unit": "ms",
            "extra": "median: 51.63 ms\nmin: 46.82 ms\nmax: 94.16 ms\nstddev: 14.13 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 52.1,
            "range": "14.13 ms",
            "unit": "ms",
            "extra": "median: 52.1 ms\nmin: 47.26 ms\nmax: 94.63 ms\nstddev: 14.13 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.93,
            "range": "0.16 ms",
            "unit": "ms",
            "extra": "median: 0.93 ms\nmin: 0.85 ms\nmax: 1.47 ms\nstddev: 0.16 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.74,
            "range": "5.91 ms",
            "unit": "ms",
            "extra": "median: 2.74 ms\nmin: 1.3 ms\nmax: 18.11 ms\nstddev: 5.91 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 49.09,
            "range": "16.75 ms",
            "unit": "ms",
            "extra": "median: 49.09 ms\nmin: 43.59 ms\nmax: 112.87 ms\nstddev: 16.75 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "9146f08c32da900912b1ea293e5e27ecb8aa2187",
          "message": "test(claude): review-reply-guard の動作確認スクリプトを追加\n\n- Bash（-f body、--input FILE、--input - heredoc、改行付き prefix）と MCP 返信の allow/deny を 16 ケースで検査する\n- ~/.claude/hooks に反映済みの実体を対象にし、1 件でも期待と違えば exit 1 で終了する\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>",
          "timestamp": "2026-10-28T23:10:48+09:00",
          "tree_id": "a9d403f00d9e127304130fd987ff7ed9b6d2802c",
          "url": "https://github.com/ixxq/dotfiles/commit/9146f08c32da900912b1ea293e5e27ecb8aa2187"
        },
        "date": 1793197085135,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 51.13,
            "range": "5.63 ms",
            "unit": "ms",
            "extra": "median: 51.13 ms\nmin: 49.09 ms\nmax: 72.7 ms\nstddev: 5.63 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 51.52,
            "range": "5.64 ms",
            "unit": "ms",
            "extra": "median: 51.52 ms\nmin: 49.45 ms\nmax: 73.11 ms\nstddev: 5.64 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.87,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 0.87 ms\nmin: 0.81 ms\nmax: 0.93 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.38,
            "range": "5.44 ms",
            "unit": "ms",
            "extra": "median: 2.38 ms\nmin: 1.26 ms\nmax: 18.17 ms\nstddev: 5.44 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 40.51,
            "range": "2.19 ms",
            "unit": "ms",
            "extra": "median: 40.51 ms\nmin: 39.75 ms\nmax: 49.11 ms\nstddev: 2.19 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "939fd0a1b0e1421598b30944f489143099eec736",
          "message": "chore(nix): flake inputs を更新\n\n- 更新した input: home-manager, nix-darwin, nixpkgs\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>",
          "timestamp": "2026-10-29T13:34:50+09:00",
          "tree_id": "6971566ac58e851de97b4f2e88001be63453787f",
          "url": "https://github.com/ixxq/dotfiles/commit/939fd0a1b0e1421598b30944f489143099eec736"
        },
        "date": 1793248547420,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 49.09,
            "range": "5.78 ms",
            "unit": "ms",
            "extra": "median: 49.09 ms\nmin: 42.31 ms\nmax: 70.51 ms\nstddev: 5.78 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 49.46,
            "range": "5.76 ms",
            "unit": "ms",
            "extra": "median: 49.46 ms\nmin: 42.71 ms\nmax: 70.84 ms\nstddev: 5.76 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.87,
            "range": "0.05 ms",
            "unit": "ms",
            "extra": "median: 0.87 ms\nmin: 0.81 ms\nmax: 0.99 ms\nstddev: 0.05 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 14.74,
            "range": "6.45 ms",
            "unit": "ms",
            "extra": "median: 14.74 ms\nmin: 1.26 ms\nmax: 19.55 ms\nstddev: 6.45 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 38.44,
            "range": "2.76 ms",
            "unit": "ms",
            "extra": "median: 38.44 ms\nmin: 37.02 ms\nmax: 45.94 ms\nstddev: 2.76 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "84aaabd2736aed3f82863f9dbf2a0ac945af6740",
          "message": "chore(nix): flake inputs を更新\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-30T08:15:01+09:00",
          "tree_id": "62fe9a68ebd789f2fd813ad146ae2f59a3486c65",
          "url": "https://github.com/ixxq/dotfiles/commit/84aaabd2736aed3f82863f9dbf2a0ac945af6740"
        },
        "date": 1793315759112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 47.08,
            "range": "6.69 ms",
            "unit": "ms",
            "extra": "median: 47.08 ms\nmin: 43.02 ms\nmax: 73.38 ms\nstddev: 6.69 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 47.47,
            "range": "6.69 ms",
            "unit": "ms",
            "extra": "median: 47.47 ms\nmin: 43.43 ms\nmax: 73.75 ms\nstddev: 6.69 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.9,
            "range": "0.08 ms",
            "unit": "ms",
            "extra": "median: 0.9 ms\nmin: 0.84 ms\nmax: 1.18 ms\nstddev: 0.08 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 16.05,
            "range": "7.8 ms",
            "unit": "ms",
            "extra": "median: 16.05 ms\nmin: 1.24 ms\nmax: 23.46 ms\nstddev: 7.8 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 39.89,
            "range": "3.17 ms",
            "unit": "ms",
            "extra": "median: 39.89 ms\nmin: 36.75 ms\nmax: 50.69 ms\nstddev: 3.17 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "160ce43a51f5c76729078d03944cac2b2a731d50",
          "message": "feat(claude): handoff skill で Issue を紐づけて worktree を作る\n\n- 引数がなければ会話中の Issue を渡し、決まらなければ尋ねる手順を足す\n- `orca worktree create` に `--repo` と `--issue` / `--pr` / `--reference` を付けて紐づける\n- ブランチ名と作成元は Orca の既定に任せ、指定されたときだけ `--branch` / `--base-branch` を付ける\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-30T16:57:31+09:00",
          "tree_id": "0baec5e233cbc93c6cf31b6c842312437628d1f7",
          "url": "https://github.com/ixxq/dotfiles/commit/160ce43a51f5c76729078d03944cac2b2a731d50"
        },
        "date": 1793347318005,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 48.36,
            "range": "6.2 ms",
            "unit": "ms",
            "extra": "median: 48.36 ms\nmin: 44 ms\nmax: 72.56 ms\nstddev: 6.2 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 48.75,
            "range": "6.23 ms",
            "unit": "ms",
            "extra": "median: 48.75 ms\nmin: 44.38 ms\nmax: 73.04 ms\nstddev: 6.23 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.92,
            "range": "0.15 ms",
            "unit": "ms",
            "extra": "median: 0.92 ms\nmin: 0.85 ms\nmax: 1.53 ms\nstddev: 0.15 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 3.27,
            "range": "7.69 ms",
            "unit": "ms",
            "extra": "median: 3.27 ms\nmin: 1.16 ms\nmax: 22.05 ms\nstddev: 7.69 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 39.98,
            "range": "2.24 ms",
            "unit": "ms",
            "extra": "median: 39.98 ms\nmin: 38.1 ms\nmax: 45.1 ms\nstddev: 2.24 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "8044ed98482bebaf50421a3c0324c53c110499c3",
          "message": "feat(claude): handoff skill で worktree の表示名を Issue のタイトルにする\n\n- CLI で作ると表示名が `--name` のスラッグのままで、GUI で Issue を選んだときより読みにくかった\n- `--name` はフォルダー名とブランチ名に使われるので英数字のまま残し、作成後に `orca worktree set --display-name` で変える\n- ラベルを外して 20 字ほどに縮めるよう書く\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-30T17:18:13+09:00",
          "tree_id": "3e97f0fa6ce18d912feaf128e22653f5338eeb52",
          "url": "https://github.com/ixxq/dotfiles/commit/8044ed98482bebaf50421a3c0324c53c110499c3"
        },
        "date": 1793349428788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 47.61,
            "range": "5.08 ms",
            "unit": "ms",
            "extra": "median: 47.61 ms\nmin: 45.17 ms\nmax: 68.06 ms\nstddev: 5.08 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 48,
            "range": "5.11 ms",
            "unit": "ms",
            "extra": "median: 48 ms\nmin: 45.57 ms\nmax: 68.6 ms\nstddev: 5.11 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.89,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 0.89 ms\nmin: 0.8 ms\nmax: 0.93 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.36,
            "range": "5.85 ms",
            "unit": "ms",
            "extra": "median: 1.36 ms\nmin: 1.08 ms\nmax: 16.93 ms\nstddev: 5.85 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 37.8,
            "range": "0.44 ms",
            "unit": "ms",
            "extra": "median: 37.8 ms\nmin: 36.87 ms\nmax: 38.37 ms\nstddev: 0.44 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "7329669b7d33094718f7a879223f42603277063b",
          "message": "refactor(zsh): claude の Downloads ガードを nonlazy.zsh に移す\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-30T22:18:11+09:00",
          "tree_id": "fafd4fec99c6692f9472033ab89831409ab3b61e",
          "url": "https://github.com/ixxq/dotfiles/commit/7329669b7d33094718f7a879223f42603277063b"
        },
        "date": 1793366417772,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 43.18,
            "range": "8.23 ms",
            "unit": "ms",
            "extra": "median: 43.18 ms\nmin: 36.99 ms\nmax: 73.84 ms\nstddev: 8.23 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 43.7,
            "range": "8.22 ms",
            "unit": "ms",
            "extra": "median: 43.7 ms\nmin: 37.44 ms\nmax: 74.26 ms\nstddev: 8.22 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.89,
            "range": "0.13 ms",
            "unit": "ms",
            "extra": "median: 0.89 ms\nmin: 0.84 ms\nmax: 1.3 ms\nstddev: 0.13 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 9.34,
            "range": "7.73 ms",
            "unit": "ms",
            "extra": "median: 9.34 ms\nmin: 0.99 ms\nmax: 26.14 ms\nstddev: 7.73 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 43.14,
            "range": "4.93 ms",
            "unit": "ms",
            "extra": "median: 43.14 ms\nmin: 37.66 ms\nmax: 58.76 ms\nstddev: 4.93 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "bce6d447bcf3e794c2e920fa551de01800f988ba",
          "message": "fix(zsh): cmux で Downloads ガードが上書きされないようにする\n\n- cmux は最初の precmd で claude() を自前の関数に入れ直す\n- CMUX_CLAUDE_INTEGRATION_DISABLED で入れ直しを止める\n- ガード通過後は cmux の wrapper を直接呼び、通知連携を保つ\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-30T22:33:13+09:00",
          "tree_id": "c61b61d37a2a25453c3f661623d2ab791d1867a9",
          "url": "https://github.com/ixxq/dotfiles/commit/bce6d447bcf3e794c2e920fa551de01800f988ba"
        },
        "date": 1793367236744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 47.72,
            "range": "5.68 ms",
            "unit": "ms",
            "extra": "median: 47.72 ms\nmin: 46.01 ms\nmax: 70.61 ms\nstddev: 5.68 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 48.15,
            "range": "5.67 ms",
            "unit": "ms",
            "extra": "median: 48.15 ms\nmin: 46.4 ms\nmax: 71.01 ms\nstddev: 5.67 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.88,
            "range": "0.02 ms",
            "unit": "ms",
            "extra": "median: 0.88 ms\nmin: 0.83 ms\nmax: 0.92 ms\nstddev: 0.02 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.75,
            "range": "6.55 ms",
            "unit": "ms",
            "extra": "median: 1.75 ms\nmin: 1.2 ms\nmax: 18.1 ms\nstddev: 6.55 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 37.37,
            "range": "0.63 ms",
            "unit": "ms",
            "extra": "median: 37.37 ms\nmin: 36.92 ms\nmax: 39.51 ms\nstddev: 0.63 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "f9e109b9d06f7ae76579e20dd7637bf6843d251b",
          "message": "feat(nova): 実行済みのプロンプトを transient 表示にする\n\n- `[layout]` に `transient = [\"dir\", \"exit_status\", \"prompt_char\"]` を追加\n- 確定した行はディレクトリ・終了ステータス・プロンプト文字だけを残して短く表示する\n- 新しい nova を使うため flake.lock の nova を 4acb75d に更新\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-01T01:56:56+09:00",
          "tree_id": "70a8710fa1ea50be2ff11bb4f84bcb59250e5768",
          "url": "https://github.com/ixxq/dotfiles/commit/f9e109b9d06f7ae76579e20dd7637bf6843d251b"
        },
        "date": 1793465899568,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 46.07,
            "range": "5.86 ms",
            "unit": "ms",
            "extra": "median: 46.07 ms\nmin: 44.7 ms\nmax: 69.89 ms\nstddev: 5.86 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 46.5,
            "range": "5.86 ms",
            "unit": "ms",
            "extra": "median: 46.5 ms\nmin: 45.12 ms\nmax: 70.34 ms\nstddev: 5.86 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 0.91,
            "range": "0.02 ms",
            "unit": "ms",
            "extra": "median: 0.91 ms\nmin: 0.88 ms\nmax: 0.95 ms\nstddev: 0.02 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.71,
            "range": "6.16 ms",
            "unit": "ms",
            "extra": "median: 2.71 ms\nmin: 1.23 ms\nmax: 16.51 ms\nstddev: 6.16 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 36.44,
            "range": "2.37 ms",
            "unit": "ms",
            "extra": "median: 36.44 ms\nmin: 35.61 ms\nmax: 45.85 ms\nstddev: 2.37 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "373423aa65875f4abc49caced412575511165f4e",
          "message": "fix(zsh): mise activate の出力をキャッシュしない\n\n- mise activate は実行時の PATH を出力に埋め込むため、キャッシュすると古い PATH で上書きされる\n- zsh-defer で遅延したまま毎回 eval する\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-04T09:23:43+09:00",
          "tree_id": "6754bc6f59a2c5b006f600223ed505fbdffa326d",
          "url": "https://github.com/ixxq/dotfiles/commit/373423aa65875f4abc49caced412575511165f4e"
        },
        "date": 1793752209239,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 37.75,
            "range": "7.12 ms",
            "unit": "ms",
            "extra": "median: 37.75 ms\nmin: 36.67 ms\nmax: 66.99 ms\nstddev: 7.12 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 38.21,
            "range": "7.15 ms",
            "unit": "ms",
            "extra": "median: 38.21 ms\nmin: 37.14 ms\nmax: 67.56 ms\nstddev: 7.15 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.07,
            "range": "0.05 ms",
            "unit": "ms",
            "extra": "median: 1.07 ms\nmin: 1.01 ms\nmax: 1.16 ms\nstddev: 0.05 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 8.17,
            "range": "8 ms",
            "unit": "ms",
            "extra": "median: 8.17 ms\nmin: 0.94 ms\nmax: 22.24 ms\nstddev: 8 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 34,
            "range": "2.65 ms",
            "unit": "ms",
            "extra": "median: 34 ms\nmin: 32.2 ms\nmax: 41.75 ms\nstddev: 2.65 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "committer": {
            "email": "83203852+ixxq@users.noreply.github.com",
            "name": "ixxq",
            "username": "ixxq"
          },
          "distinct": true,
          "id": "9684923ebe6918f0c7b66ae56b84d24411a5582d",
          "message": "feat(claude): show-image と image-view を統合版の images に置き換える\n\n- enabledPlugins を images@claude-images（ixxq/claude-images）の 1 つにまとめる\n- extraKnownMarketplaces から claude-show-image と claude-image-view を外し claude-images を追加\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>",
          "timestamp": "2026-11-04T14:25:17+09:00",
          "tree_id": "05f03c6f3cb0130a01e730aff6e706cc6df5c63a",
          "url": "https://github.com/ixxq/dotfiles/commit/9684923ebe6918f0c7b66ae56b84d24411a5582d"
        },
        "date": 1793780319158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 44.06,
            "range": "7.59 ms",
            "unit": "ms",
            "extra": "median: 44.06 ms\nmin: 39.17 ms\nmax: 73.36 ms\nstddev: 7.59 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 44.56,
            "range": "7.67 ms",
            "unit": "ms",
            "extra": "median: 44.56 ms\nmin: 39.64 ms\nmax: 74.18 ms\nstddev: 7.67 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.08,
            "range": "0.07 ms",
            "unit": "ms",
            "extra": "median: 1.08 ms\nmin: 0.98 ms\nmax: 1.24 ms\nstddev: 0.07 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 18.69,
            "range": "7.48 ms",
            "unit": "ms",
            "extra": "median: 18.69 ms\nmin: 1.62 ms\nmax: 22.47 ms\nstddev: 7.48 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 40.58,
            "range": "2.61 ms",
            "unit": "ms",
            "extra": "median: 40.58 ms\nmin: 36.11 ms\nmax: 46.11 ms\nstddev: 2.61 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "0be331afe2daaf06e6fb87e6770dd8c9646df38c",
          "message": "chore(nova): transient プロンプトを無効にする\n\nnova 側で transient がオプトインになったため、設定をコメントアウトして既定に合わせる。\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-05T02:36:56+09:00",
          "tree_id": "1aed78544fb78da656b24c8a0edf9b1b44da2c16",
          "url": "https://github.com/unmett/dotfiles/commit/0be331afe2daaf06e6fb87e6770dd8c9646df38c"
        },
        "date": 1793842661287,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 40.02,
            "range": "24.39 ms",
            "unit": "ms",
            "extra": "median: 40.02 ms\nmin: 38.12 ms\nmax: 139.69 ms\nstddev: 24.39 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 40.55,
            "range": "24.58 ms",
            "unit": "ms",
            "extra": "median: 40.55 ms\nmin: 38.59 ms\nmax: 140.97 ms\nstddev: 24.58 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1,
            "range": "3.88 ms",
            "unit": "ms",
            "extra": "median: 1 ms\nmin: 0.87 ms\nmax: 16.43 ms\nstddev: 3.88 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 14.46,
            "range": "18.73 ms",
            "unit": "ms",
            "extra": "median: 14.46 ms\nmin: 0.89 ms\nmax: 81.9 ms\nstddev: 18.73 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 38.16,
            "range": "34.76 ms",
            "unit": "ms",
            "extra": "median: 38.16 ms\nmin: 34.08 ms\nmax: 178.63 ms\nstddev: 34.76 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "b76d70252c68e2669ca261715f08c066058c84db",
          "message": "chore(chezmoi): M4Air の実設定を source に取り込む\n\n- M4Air では SidePulse を使わないため、chezmoi の対象から外す\n- Codex アプリが更新した config.toml の内容を source に反映する\n- Claude の skipDangerousModePermissionPrompt を source に追加する\n- Meltype の設定ディレクトリを private にして権限を 700 に保つ\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-05T10:53:16+09:00",
          "tree_id": "1a8e52762dff01203e2c616184fc792a115fc4b6",
          "url": "https://github.com/unmett/dotfiles/commit/b76d70252c68e2669ca261715f08c066058c84db"
        },
        "date": 1793843641306,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 37.86,
            "range": "6.8 ms",
            "unit": "ms",
            "extra": "median: 37.86 ms\nmin: 36.87 ms\nmax: 65.88 ms\nstddev: 6.8 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 38.33,
            "range": "6.81 ms",
            "unit": "ms",
            "extra": "median: 38.33 ms\nmin: 37.32 ms\nmax: 66.37 ms\nstddev: 6.81 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.06,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 1.06 ms\nmin: 1.01 ms\nmax: 1.11 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.52,
            "range": "4.46 ms",
            "unit": "ms",
            "extra": "median: 2.52 ms\nmin: 1.21 ms\nmax: 20.54 ms\nstddev: 4.46 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 32.27,
            "range": "0.84 ms",
            "unit": "ms",
            "extra": "median: 32.27 ms\nmin: 32.11 ms\nmax: 35.7 ms\nstddev: 0.84 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "bf6a9a4c240c36aeda184c67a99f8eaef08fe440",
          "message": "chore(claude): 使われていない show-your-work の marketplace を削除する\n\n- show-image への置き換え後も残っていた iamumeransari の extraKnownMarketplaces を消す\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-05T11:13:54+09:00",
          "tree_id": "764d1639936e3be1270f915f0d258f93968c5a35",
          "url": "https://github.com/unmett/dotfiles/commit/bf6a9a4c240c36aeda184c67a99f8eaef08fe440"
        },
        "date": 1793847128881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 40.47,
            "range": "15.01 ms",
            "unit": "ms",
            "extra": "median: 40.47 ms\nmin: 38.32 ms\nmax: 89.46 ms\nstddev: 15.01 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 40.97,
            "range": "15.03 ms",
            "unit": "ms",
            "extra": "median: 40.97 ms\nmin: 38.78 ms\nmax: 90.04 ms\nstddev: 15.03 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.03,
            "range": "0.08 ms",
            "unit": "ms",
            "extra": "median: 1.03 ms\nmin: 0.94 ms\nmax: 1.24 ms\nstddev: 0.08 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 4.5,
            "range": "7.94 ms",
            "unit": "ms",
            "extra": "median: 4.5 ms\nmin: 1.78 ms\nmax: 22.54 ms\nstddev: 7.94 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 35.7,
            "range": "2.71 ms",
            "unit": "ms",
            "extra": "median: 35.7 ms\nmin: 32.94 ms\nmax: 42.14 ms\nstddev: 2.71 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "1572d283524e6e543df4df69c90acab58776f40e",
          "message": "chore(codex): computer-use MCP と confetti を有効にする\n\n- M4Pro に合わせて computer-use の MCP サーバーを起動する設定に戻す\n- Codex アプリの confetti の演出を有効にする\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-05T13:29:24+09:00",
          "tree_id": "fe70c6cbe21324b1c5cb78801717eb6cbfbb92e7",
          "url": "https://github.com/unmett/dotfiles/commit/1572d283524e6e543df4df69c90acab58776f40e"
        },
        "date": 1793853815420,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 38.02,
            "range": "6.2 ms",
            "unit": "ms",
            "extra": "median: 38.02 ms\nmin: 36.54 ms\nmax: 63.22 ms\nstddev: 6.2 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 38.51,
            "range": "6.22 ms",
            "unit": "ms",
            "extra": "median: 38.51 ms\nmin: 37 ms\nmax: 63.75 ms\nstddev: 6.22 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.03,
            "range": "0.04 ms",
            "unit": "ms",
            "extra": "median: 1.03 ms\nmin: 0.97 ms\nmax: 1.15 ms\nstddev: 0.04 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.59,
            "range": "5.31 ms",
            "unit": "ms",
            "extra": "median: 2.59 ms\nmin: 1.01 ms\nmax: 18.57 ms\nstddev: 5.31 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 32.88,
            "range": "1.34 ms",
            "unit": "ms",
            "extra": "median: 32.88 ms\nmin: 32.2 ms\nmax: 38.12 ms\nstddev: 1.34 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "d555e776920de4a6d064d7852d4d3bdf963b3686",
          "message": "chore(codex): config.toml を初回作成のみにする\n\n- Codex が書き換えるファイルなので、apply で上書きしない\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-05T13:58:08+09:00",
          "tree_id": "0f79837258f11e5d166e988d058abc92238647a5",
          "url": "https://github.com/unmett/dotfiles/commit/d555e776920de4a6d064d7852d4d3bdf963b3686"
        },
        "date": 1793854732390,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 38.55,
            "range": "4.13 ms",
            "unit": "ms",
            "extra": "median: 38.55 ms\nmin: 37.2 ms\nmax: 55.36 ms\nstddev: 4.13 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 39.01,
            "range": "4.14 ms",
            "unit": "ms",
            "extra": "median: 39.01 ms\nmin: 37.67 ms\nmax: 55.88 ms\nstddev: 4.14 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.02,
            "range": "0.04 ms",
            "unit": "ms",
            "extra": "median: 1.02 ms\nmin: 0.96 ms\nmax: 1.1 ms\nstddev: 0.04 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.32,
            "range": "6.51 ms",
            "unit": "ms",
            "extra": "median: 2.32 ms\nmin: 1.13 ms\nmax: 19.75 ms\nstddev: 6.51 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 33.64,
            "range": "1.99 ms",
            "unit": "ms",
            "extra": "median: 33.64 ms\nmin: 32.83 ms\nmax: 40.93 ms\nstddev: 1.99 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "3f4f1a65296c6cb2450693b4c0d2da72826ae8c6",
          "message": "fix(codex): commit スキルを Codex 専用の場所に移す\n\n- Codex のセッションに依存する commit スキルを ~/.agents/skills から ~/.codex/skills に移す\n- ~/.agents/skills を読む pi などで動くと、CODEX_THREAD_ID がなくコミットが止まるため\n- SKILL.md と config.toml の developer_instructions のスクリプトのパスを合わせる\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-05T14:06:10+09:00",
          "tree_id": "9392cecc1d4a049884033b12503a5005edfd8594",
          "url": "https://github.com/unmett/dotfiles/commit/3f4f1a65296c6cb2450693b4c0d2da72826ae8c6"
        },
        "date": 1793855216888,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 38.58,
            "range": "6.77 ms",
            "unit": "ms",
            "extra": "median: 38.58 ms\nmin: 37.3 ms\nmax: 66.38 ms\nstddev: 6.77 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 39.05,
            "range": "6.77 ms",
            "unit": "ms",
            "extra": "median: 39.05 ms\nmin: 37.77 ms\nmax: 66.87 ms\nstddev: 6.77 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 1 ms\nmin: 0.94 ms\nmax: 1.07 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.71,
            "range": "7 ms",
            "unit": "ms",
            "extra": "median: 2.71 ms\nmin: 1.39 ms\nmax: 18.9 ms\nstddev: 7 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 33.19,
            "range": "3.7 ms",
            "unit": "ms",
            "extra": "median: 33.19 ms\nmin: 32.52 ms\nmax: 48.03 ms\nstddev: 3.7 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "7a5322316f14981403ad64cb0acfd50ebe1211cb",
          "message": "fix(codex): commit スキルのスクリプトのパス修正\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-05T14:06:22+09:00",
          "tree_id": "8a5117e3f5044c2380e591ed86b9101911ad540e",
          "url": "https://github.com/unmett/dotfiles/commit/7a5322316f14981403ad64cb0acfd50ebe1211cb"
        },
        "date": 1793855266844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 38.37,
            "range": "6.3 ms",
            "unit": "ms",
            "extra": "median: 38.37 ms\nmin: 37 ms\nmax: 61.61 ms\nstddev: 6.3 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 38.83,
            "range": "6.38 ms",
            "unit": "ms",
            "extra": "median: 38.83 ms\nmin: 37.46 ms\nmax: 62.1 ms\nstddev: 6.38 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.04,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 1.04 ms\nmin: 1 ms\nmax: 1.13 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.57,
            "range": "6.27 ms",
            "unit": "ms",
            "extra": "median: 1.57 ms\nmin: 1.2 ms\nmax: 18.26 ms\nstddev: 6.27 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 32.75,
            "range": "1.03 ms",
            "unit": "ms",
            "extra": "median: 32.75 ms\nmin: 32.35 ms\nmax: 36.2 ms\nstddev: 1.03 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "2b8f0df907c31ef864df240dece48f0e6455ff39",
          "message": "chore(agents): parallel-review と review-merge を削除\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-05T14:09:40+09:00",
          "tree_id": "4a7b6efd95b891fc3879433d104d66171223c3ff",
          "url": "https://github.com/unmett/dotfiles/commit/2b8f0df907c31ef864df240dece48f0e6455ff39"
        },
        "date": 1793855423368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 38.28,
            "range": "5.32 ms",
            "unit": "ms",
            "extra": "median: 38.28 ms\nmin: 37.34 ms\nmax: 60.1 ms\nstddev: 5.32 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 38.74,
            "range": "5.34 ms",
            "unit": "ms",
            "extra": "median: 38.74 ms\nmin: 37.79 ms\nmax: 60.65 ms\nstddev: 5.34 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.05,
            "range": "0.09 ms",
            "unit": "ms",
            "extra": "median: 1.05 ms\nmin: 0.97 ms\nmax: 1.39 ms\nstddev: 0.09 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.41,
            "range": "6.65 ms",
            "unit": "ms",
            "extra": "median: 1.41 ms\nmin: 0.78 ms\nmax: 18.73 ms\nstddev: 6.65 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 33.05,
            "range": "0.59 ms",
            "unit": "ms",
            "extra": "median: 33.05 ms\nmin: 32.23 ms\nmax: 35.04 ms\nstddev: 0.59 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "5f8808c0b9b9f1abeae658daf09b99f824874c25",
          "message": "refactor(agents): create-pr を共通化し、小さな変更は件名だけでよいことにする\n\n- Claude の create-pr を .agents の共通版への symlink にする\n- 共通版の create-pr で、作成後に gh pr view --web で開く\n- commit スキルと Codex の developer_instructions で、コメントや typo の修正は件名だけでよいことにする\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-05T14:17:33+09:00",
          "tree_id": "fe3c2326bbfdafe3f27f77346c6e228a0de6ff1e",
          "url": "https://github.com/unmett/dotfiles/commit/5f8808c0b9b9f1abeae658daf09b99f824874c25"
        },
        "date": 1793855896196,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 38.66,
            "range": "5.81 ms",
            "unit": "ms",
            "extra": "median: 38.66 ms\nmin: 36.94 ms\nmax: 62.42 ms\nstddev: 5.81 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 39.13,
            "range": "5.81 ms",
            "unit": "ms",
            "extra": "median: 39.13 ms\nmin: 37.42 ms\nmax: 62.89 ms\nstddev: 5.81 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.04,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 1.04 ms\nmin: 0.98 ms\nmax: 1.09 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.01,
            "range": "4.71 ms",
            "unit": "ms",
            "extra": "median: 2.01 ms\nmin: 1.2 ms\nmax: 21.34 ms\nstddev: 4.71 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 34.09,
            "range": "2.2 ms",
            "unit": "ms",
            "extra": "median: 34.09 ms\nmin: 32.43 ms\nmax: 39.28 ms\nstddev: 2.2 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "c5198b877eedbd18e6f2a8005f3019593026b39c",
          "message": "refactor(skills): 外部スキルを chezmoi external で管理する\n\n- 外部スキルを `.chezmoiexternal.toml.tmpl` に移し、上流のコミット SHA で固定する\n- 実体は `~/.agents/skills` に置き、Claude からは `symlink_*` で参照する\n- mattpocock/skills の構成変更に合わせ grilling と domain-modeling を追加する\n- heroui と turborepo はリポジトリが大きいため、ファイル単位で取得する\n- 使わなくなった issue-start と web-design-guidelines を削除する\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-05T21:29:45+09:00",
          "tree_id": "7ef96b29a82e1a5d326705b98e0f8e93d16bc71d",
          "url": "https://github.com/unmett/dotfiles/commit/c5198b877eedbd18e6f2a8005f3019593026b39c"
        },
        "date": 1793924156957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 42.75,
            "range": "7.53 ms",
            "unit": "ms",
            "extra": "median: 42.75 ms\nmin: 38.87 ms\nmax: 71.56 ms\nstddev: 7.53 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 43.35,
            "range": "7.55 ms",
            "unit": "ms",
            "extra": "median: 43.35 ms\nmin: 39.33 ms\nmax: 72.09 ms\nstddev: 7.55 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.13,
            "range": "0.23 ms",
            "unit": "ms",
            "extra": "median: 1.13 ms\nmin: 0.94 ms\nmax: 1.7 ms\nstddev: 0.23 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 3.01,
            "range": "5.46 ms",
            "unit": "ms",
            "extra": "median: 3.01 ms\nmin: 1.12 ms\nmax: 18.02 ms\nstddev: 5.46 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 39.4,
            "range": "6.02 ms",
            "unit": "ms",
            "extra": "median: 39.4 ms\nmin: 34.29 ms\nmax: 57.29 ms\nstddev: 6.02 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "b73aa9b40b559bc8d6d622ddd6732e7c59376f01",
          "message": "chore(nix): flake inputs を更新\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-06T10:02:42+09:00",
          "tree_id": "562a699c7c0b9c3fab5b0729f0eeec31cfd40fad",
          "url": "https://github.com/unmett/dotfiles/commit/b73aa9b40b559bc8d6d622ddd6732e7c59376f01"
        },
        "date": 1793927234044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 38.27,
            "range": "9.98 ms",
            "unit": "ms",
            "extra": "median: 38.27 ms\nmin: 36.98 ms\nmax: 79.33 ms\nstddev: 9.98 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 38.72,
            "range": "10 ms",
            "unit": "ms",
            "extra": "median: 38.72 ms\nmin: 37.45 ms\nmax: 79.83 ms\nstddev: 10 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.06,
            "range": "0.05 ms",
            "unit": "ms",
            "extra": "median: 1.06 ms\nmin: 0.97 ms\nmax: 1.17 ms\nstddev: 0.05 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 4.43,
            "range": "7.78 ms",
            "unit": "ms",
            "extra": "median: 4.43 ms\nmin: 2.07 ms\nmax: 19.76 ms\nstddev: 7.78 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 33.19,
            "range": "1.46 ms",
            "unit": "ms",
            "extra": "median: 33.19 ms\nmin: 32.5 ms\nmax: 39.04 ms\nstddev: 1.46 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "a528354dee9c8ca1eed1e1766904ad68d4378029",
          "message": "chore(nix): flake inputs を更新\n\n- nova を v0.5.0（be863fb）に更新する\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-06T13:31:43+09:00",
          "tree_id": "b417a52c18d42435a44723ee600e51b2297e6283",
          "url": "https://github.com/unmett/dotfiles/commit/a528354dee9c8ca1eed1e1766904ad68d4378029"
        },
        "date": 1793939613114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 37.57,
            "range": "7.12 ms",
            "unit": "ms",
            "extra": "median: 37.57 ms\nmin: 36.28 ms\nmax: 66.82 ms\nstddev: 7.12 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 38.05,
            "range": "7.13 ms",
            "unit": "ms",
            "extra": "median: 38.05 ms\nmin: 36.74 ms\nmax: 67.36 ms\nstddev: 7.13 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.08,
            "range": "0.02 ms",
            "unit": "ms",
            "extra": "median: 1.08 ms\nmin: 1.05 ms\nmax: 1.14 ms\nstddev: 0.02 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 9.47,
            "range": "8.02 ms",
            "unit": "ms",
            "extra": "median: 9.47 ms\nmin: 1.1 ms\nmax: 21.04 ms\nstddev: 8.02 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 32.81,
            "range": "1.53 ms",
            "unit": "ms",
            "extra": "median: 32.81 ms\nmin: 31.84 ms\nmax: 38.67 ms\nstddev: 1.53 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "unmett"
          },
          "distinct": true,
          "id": "82f875a8b09670a67955815637f4f9078635a6c2",
          "message": "feat(rex): Rex の CLI とエージェント用フックを使えるようにする\n\n- nix-darwin の /etc/zshenv が PATH を作り直し、Rex が足した `REX_BIN_DIR` が消えるので、zsh の envExtra で戻す\n- `rex skill setup` が実ファイルに書いた SessionStart フックを、Claude と Codex の chezmoi テンプレートにも反映する\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-06T14:06:58+09:00",
          "tree_id": "4c35ba4455a042450e27f0891e966c2dddef3830",
          "url": "https://github.com/unmett/dotfiles/commit/82f875a8b09670a67955815637f4f9078635a6c2"
        },
        "date": 1793953205252,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 37.9,
            "range": "5.93 ms",
            "unit": "ms",
            "extra": "median: 37.9 ms\nmin: 36.66 ms\nmax: 60.74 ms\nstddev: 5.93 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 38.38,
            "range": "5.96 ms",
            "unit": "ms",
            "extra": "median: 38.38 ms\nmin: 37.16 ms\nmax: 61.36 ms\nstddev: 5.96 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.08,
            "range": "0.02 ms",
            "unit": "ms",
            "extra": "median: 1.08 ms\nmin: 1.03 ms\nmax: 1.12 ms\nstddev: 0.02 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 18.17,
            "range": "7.37 ms",
            "unit": "ms",
            "extra": "median: 18.17 ms\nmin: 1.74 ms\nmax: 21.32 ms\nstddev: 7.37 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 32.83,
            "range": "1.24 ms",
            "unit": "ms",
            "extra": "median: 32.83 ms\nmin: 32.3 ms\nmax: 37.46 ms\nstddev: 1.24 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "committer": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "distinct": true,
          "id": "76b7ee6e439f29929d57fcf24703505588912fec",
          "message": "revert(claude): git commit の確認を元に戻す\n\n- 6a43c7f の変更を取り消し、Bash(git commit:*) を ask に戻す\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-07T02:57:41+09:00",
          "tree_id": "4fc82d087252706925bc3ed5cd1dda21a32b05c7",
          "url": "https://github.com/meltin/dotfiles/commit/76b7ee6e439f29929d57fcf24703505588912fec"
        },
        "date": 1794186443529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 41.02,
            "range": "4.48 ms",
            "unit": "ms",
            "extra": "median: 41.02 ms\nmin: 39.98 ms\nmax: 59.19 ms\nstddev: 4.48 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 41.51,
            "range": "4.49 ms",
            "unit": "ms",
            "extra": "median: 41.51 ms\nmin: 40.48 ms\nmax: 59.71 ms\nstddev: 4.49 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.01,
            "range": "0.05 ms",
            "unit": "ms",
            "extra": "median: 1.01 ms\nmin: 0.93 ms\nmax: 1.12 ms\nstddev: 0.05 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 18.51,
            "range": "7.3 ms",
            "unit": "ms",
            "extra": "median: 18.51 ms\nmin: 1.4 ms\nmax: 19.03 ms\nstddev: 7.3 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 37.28,
            "range": "1.3 ms",
            "unit": "ms",
            "extra": "median: 37.28 ms\nmin: 34.72 ms\nmax: 39.37 ms\nstddev: 1.3 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "meltin"
          },
          "committer": {
            "email": "83203852+unmett@users.noreply.github.com",
            "name": "unmett",
            "username": "meltin"
          },
          "distinct": true,
          "id": "9950296d9b3a1eb8492cc926ee8af368cc00c006",
          "message": "chore(homebrew): capsomnia を削除し、flake inputs を更新\n\n- キー入力が落ちる原因だった capsomnia はアンインストール済みなので cask から外す\n- home-manager と nixpkgs を更新\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-09T10:37:15+09:00",
          "tree_id": "ad7efae7caf485dacad93ff1bb1bc9d4c2571b94",
          "url": "https://github.com/meltin/dotfiles/commit/9950296d9b3a1eb8492cc926ee8af368cc00c006"
        },
        "date": 1794189627875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 39.62,
            "range": "5.71 ms",
            "unit": "ms",
            "extra": "median: 39.62 ms\nmin: 38.78 ms\nmax: 63.06 ms\nstddev: 5.71 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 40.1,
            "range": "5.74 ms",
            "unit": "ms",
            "extra": "median: 40.1 ms\nmin: 39.23 ms\nmax: 63.66 ms\nstddev: 5.74 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.02,
            "range": "0.04 ms",
            "unit": "ms",
            "extra": "median: 1.02 ms\nmin: 0.95 ms\nmax: 1.08 ms\nstddev: 0.04 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 5.68,
            "range": "6.91 ms",
            "unit": "ms",
            "extra": "median: 5.68 ms\nmin: 1.11 ms\nmax: 19.1 ms\nstddev: 6.91 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 35.26,
            "range": "1.12 ms",
            "unit": "ms",
            "extra": "median: 35.26 ms\nmin: 34.41 ms\nmax: 38.21 ms\nstddev: 1.12 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "committer": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "distinct": true,
          "id": "5c2d720f5f6615e08c0148a2a994bc236409309d",
          "message": "chore(claude): Rex のセッション名の自動付与をオフにする\n\n- live の settings.json に Rex が書いたフラグがテンプレートに無く、chezmoi apply で消えていた\n- テンプレートに `--feature-session-naming=false` を足して live と揃える\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-09T13:40:57+09:00",
          "tree_id": "6792faf5342e2014e9460ee4e852086c8490a069",
          "url": "https://github.com/meltin/dotfiles/commit/5c2d720f5f6615e08c0148a2a994bc236409309d"
        },
        "date": 1794199301365,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 38,
            "range": "5.61 ms",
            "unit": "ms",
            "extra": "median: 38 ms\nmin: 37.26 ms\nmax: 61.08 ms\nstddev: 5.61 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 38.46,
            "range": "5.63 ms",
            "unit": "ms",
            "extra": "median: 38.46 ms\nmin: 37.72 ms\nmax: 61.58 ms\nstddev: 5.63 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.02,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 1.02 ms\nmin: 0.95 ms\nmax: 1.07 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.39,
            "range": "4.12 ms",
            "unit": "ms",
            "extra": "median: 1.39 ms\nmin: 1.25 ms\nmax: 18.45 ms\nstddev: 4.12 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 32.82,
            "range": "0.58 ms",
            "unit": "ms",
            "extra": "median: 32.82 ms\nmin: 31.92 ms\nmax: 33.9 ms\nstddev: 0.58 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "committer": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "distinct": true,
          "id": "429f3692c4070c236504159c51e7ad1c6e1b30fe",
          "message": "chore(codex): 手で入れたスキルを chezmoi の外部管理に移す\n\n- figma 系 4 個と pdf、playwright を openai/skills のコミット SHA で固定する\n- ローカルの全ファイルが上流と一致することを確認済みで、既存の内容は変わらない\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-09T20:27:14+09:00",
          "tree_id": "c74c06d6df465c394abb2393ba06be58ca7802bb",
          "url": "https://github.com/meltin/dotfiles/commit/429f3692c4070c236504159c51e7ad1c6e1b30fe"
        },
        "date": 1794223679341,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 38.16,
            "range": "6.66 ms",
            "unit": "ms",
            "extra": "median: 38.16 ms\nmin: 37.61 ms\nmax: 65.8 ms\nstddev: 6.66 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 38.61,
            "range": "6.67 ms",
            "unit": "ms",
            "extra": "median: 38.61 ms\nmin: 38.07 ms\nmax: 66.31 ms\nstddev: 6.67 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.02,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 1.02 ms\nmin: 0.98 ms\nmax: 1.08 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 1.6,
            "range": "6.55 ms",
            "unit": "ms",
            "extra": "median: 1.6 ms\nmin: 1 ms\nmax: 19.07 ms\nstddev: 6.55 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 33.51,
            "range": "0.84 ms",
            "unit": "ms",
            "extra": "median: 33.51 ms\nmin: 32.62 ms\nmax: 36.14 ms\nstddev: 0.84 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "committer": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "distinct": true,
          "id": "097a779231453dce41da51f1b79ab21d310290fa",
          "message": "feat(nix): ccsession を追加\n\n- 全プロジェクトの Claude Code セッションを fzf で検索して再開できるようにする\n- nixpkgs に無いため nova と同じくフレーク入力にし、nixpkgs は dotfiles 側に揃える\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-09T22:57:34+09:00",
          "tree_id": "0a6d00161ad1f738acc3a0a4f2a7a0b4f50aca44",
          "url": "https://github.com/meltin/dotfiles/commit/097a779231453dce41da51f1b79ab21d310290fa"
        },
        "date": 1794233397196,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 39.78,
            "range": "4.76 ms",
            "unit": "ms",
            "extra": "median: 39.78 ms\nmin: 37.92 ms\nmax: 58.04 ms\nstddev: 4.76 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 40.23,
            "range": "4.79 ms",
            "unit": "ms",
            "extra": "median: 40.23 ms\nmin: 38.37 ms\nmax: 58.59 ms\nstddev: 4.79 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.08,
            "range": "0.05 ms",
            "unit": "ms",
            "extra": "median: 1.08 ms\nmin: 0.98 ms\nmax: 1.19 ms\nstddev: 0.05 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.16,
            "range": "4.53 ms",
            "unit": "ms",
            "extra": "median: 2.16 ms\nmin: 1.07 ms\nmax: 20.65 ms\nstddev: 4.53 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 34.41,
            "range": "1.82 ms",
            "unit": "ms",
            "extra": "median: 34.41 ms\nmin: 32.88 ms\nmax: 39.15 ms\nstddev: 1.82 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "committer": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "distinct": true,
          "id": "6a222272de1d09d506ff2aee7a242dad04cfb27f",
          "message": "feat(commit): ステージ済みがないときは責務ごとにステージしてコミットする\n\n- 無条件の git add 禁止をやめ、インデックスの状態で分岐させる\n- ステージ済みがあればその分だけをコミットし、add し忘れに見える変更は含めるか聞く\n- ステージ済みがなければ責務ごとにパス指定でステージし、1 つずつコミットする\n- Claude と Codex のスキル、Codex の git-commit-instructions に同じ規則を入れる\n- 聞くときのツールは Claude が AskUserQuestion、Codex が request_user_input\n\nCo-Authored-By: Claude Fable 5.2 <noreply@anthropic.com>",
          "timestamp": "2026-11-10T09:48:53+09:00",
          "tree_id": "d7ea5b6701ba89b62b5df119f0bd7828f5df1158",
          "url": "https://github.com/meltin/dotfiles/commit/6a222272de1d09d506ff2aee7a242dad04cfb27f"
        },
        "date": 1794271810296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 39.55,
            "range": "6.33 ms",
            "unit": "ms",
            "extra": "median: 39.55 ms\nmin: 37.91 ms\nmax: 64.49 ms\nstddev: 6.33 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 40.03,
            "range": "6.38 ms",
            "unit": "ms",
            "extra": "median: 40.03 ms\nmin: 38.39 ms\nmax: 65.05 ms\nstddev: 6.38 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.08,
            "range": "0.16 ms",
            "unit": "ms",
            "extra": "median: 1.08 ms\nmin: 1.04 ms\nmax: 1.73 ms\nstddev: 0.16 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 18.25,
            "range": "7.76 ms",
            "unit": "ms",
            "extra": "median: 18.25 ms\nmin: 1.32 ms\nmax: 20.88 ms\nstddev: 7.76 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 34.21,
            "range": "2.6 ms",
            "unit": "ms",
            "extra": "median: 34.21 ms\nmin: 32.4 ms\nmax: 40.77 ms\nstddev: 2.6 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "committer": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "distinct": true,
          "id": "0b514e1559914bec15cd5312f85a53803572c4b4",
          "message": "chore(agents): コミットと PR 作成はスキル経由にするルールを追加\n\n- git commit と gh pr create を直接実行せず、commit / create-pr スキルを使う\n- Claude の CLAUDE.md と Codex の AGENTS.md の両方に入れる\n- AGENTS.md の見出しを Commits and pull requests に変更\n\nCo-Authored-By: Claude Fable 5.2 <noreply@anthropic.com>",
          "timestamp": "2026-11-10T10:45:54+09:00",
          "tree_id": "386425de54eb332e2ecc6c59594f7c33c9466658",
          "url": "https://github.com/meltin/dotfiles/commit/0b514e1559914bec15cd5312f85a53803572c4b4"
        },
        "date": 1794275231886,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 38.89,
            "range": "5.73 ms",
            "unit": "ms",
            "extra": "median: 38.89 ms\nmin: 36.75 ms\nmax: 62.28 ms\nstddev: 5.73 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 39.36,
            "range": "5.73 ms",
            "unit": "ms",
            "extra": "median: 39.36 ms\nmin: 37.29 ms\nmax: 62.8 ms\nstddev: 5.73 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.1,
            "range": "0.03 ms",
            "unit": "ms",
            "extra": "median: 1.1 ms\nmin: 1.04 ms\nmax: 1.17 ms\nstddev: 0.03 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 2.76,
            "range": "7.99 ms",
            "unit": "ms",
            "extra": "median: 2.76 ms\nmin: 1.25 ms\nmax: 21.43 ms\nstddev: 7.99 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 33.54,
            "range": "0.91 ms",
            "unit": "ms",
            "extra": "median: 33.54 ms\nmin: 32.06 ms\nmax: 36.26 ms\nstddev: 0.91 ms\nruns: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "committer": {
            "email": "83203852+meltin@users.noreply.github.com",
            "name": "meltin",
            "username": "meltin"
          },
          "distinct": true,
          "id": "696f694e3a3621b8c9d94915ce6d99ca6f155e50",
          "message": "chore(meltype): 辞書に「紐付け」を追加\n\nCo-Authored-By: Claude Fable 5.2 <noreply@anthropic.com>",
          "timestamp": "2026-11-10T14:08:43+09:00",
          "tree_id": "52e5810c675e8be2d4d65ded688bf037001305db",
          "url": "https://github.com/meltin/dotfiles/commit/696f694e3a3621b8c9d94915ce6d99ca6f155e50"
        },
        "date": 1794287501113,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first prompt lag",
            "value": 40.02,
            "range": "1.91 ms",
            "unit": "ms",
            "extra": "median: 40.02 ms\nmin: 35.82 ms\nmax: 42.76 ms\nstddev: 1.91 ms\nruns: 16"
          },
          {
            "name": "first command lag",
            "value": 40.49,
            "range": "1.94 ms",
            "unit": "ms",
            "extra": "median: 40.49 ms\nmin: 36.28 ms\nmax: 43.28 ms\nstddev: 1.94 ms\nruns: 16"
          },
          {
            "name": "command lag",
            "value": 1.1,
            "range": "0.06 ms",
            "unit": "ms",
            "extra": "median: 1.1 ms\nmin: 1.01 ms\nmax: 1.23 ms\nstddev: 0.06 ms\nruns: 16"
          },
          {
            "name": "input lag",
            "value": 13.25,
            "range": "7.66 ms",
            "unit": "ms",
            "extra": "median: 13.25 ms\nmin: 1.14 ms\nmax: 19.99 ms\nstddev: 7.66 ms\nruns: 16"
          },
          {
            "name": "exit time",
            "value": 35.27,
            "range": "1.6 ms",
            "unit": "ms",
            "extra": "median: 35.27 ms\nmin: 33.65 ms\nmax: 38.29 ms\nstddev: 1.6 ms\nruns: 16"
          }
        ]
      }
    ]
  }
}