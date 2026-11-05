{
  username,
  pkgs,
  ...
}:
let
  customCert = "/Users/${username}/.local/share/ca-certificates/corp.pem";

  # git は gpg.ssh.program に環境変数を渡せないため、SSH_SK_PROVIDER を設定する
  # ラッパー経由で ssh-keygen を呼ぶ。ssh-keychain.dylib は Apple ビルドの OpenSSH
  # 前提なので /usr/bin/ssh-keygen を絶対パスで使うこと。
  sshSign = pkgs.writeShellScript "ssh-sign" ''
    export SSH_SK_PROVIDER=/usr/lib/ssh-keychain.dylib
    exec /usr/bin/ssh-keygen "$@"
  '';
in
{
  # M4Pro-specific configuration (corporate SSL certificate, Secure Enclave signing)
  home-manager.users.${username} = {
    home.sessionVariables = {
      DENO_CERT = customCert;
      NODE_EXTRA_CA_CERTS = customCert;
      GIT_SSL_CAINFO = customCert;
      CARGO_HTTP_CAINFO = customCert;
      AWS_CA_BUNDLE = customCert;
    };

    # コミット署名を Secure Enclave の鍵で行う。鍵は端末外に持ち出せないため
    # このホスト専用。セットアップ手順は docs/secure-enclave-signing.md
    # GUI アプリ（Orca など）は sessionVariables を継承しないため、GIT_SSL_CAINFO
    # だけでは社内プロキシ経由の HTTPS fetch が失敗する。git 設定にも書いておく。
    programs.git.settings.http.sslCAInfo = customCert;

    programs.git.signing = {
      # sk 鍵はハンドルファイルが無いと署名できないので、公開鍵リテラルではなくパスを指定する
      key = "/Users/${username}/.ssh/id_git_sign";
      signer = "${sshSign}";
    };
  };
}
