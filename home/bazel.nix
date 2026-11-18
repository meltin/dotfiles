{
  config,
  lib,
  pkgs,
  ...
}:
let
  truststore = "${config.xdg.dataHome}/bazel/truststore.p12";
in
{
  # Bazel's embedded JDK ignores the macOS keychain, so downloads fail behind a
  # TLS-inspecting proxy. Rebuild a truststore from the keychain on every switch.
  # A failure only warns, so it never blocks the switch.
  home.activation.bazelTruststore = lib.hm.dag.entryAfter [ "writeBoundary" ] ''
    run mkdir -p "$(dirname ${truststore})"
    run ${pkgs.jdk25}/bin/java ${./bazel/MakeTruststore.java} ${truststore} \
      || echo "warning: could not build the Bazel truststore at ${truststore}" >&2
  '';

  home.file.".bazelrc".text = ''
    startup --host_jvm_args=-Djavax.net.ssl.trustStore=${truststore}
    startup --host_jvm_args=-Djavax.net.ssl.trustStorePassword=changeit
  '';
}
