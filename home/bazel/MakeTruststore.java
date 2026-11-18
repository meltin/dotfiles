import java.io.FileOutputStream;
import java.security.KeyStore;
import java.util.Collections;

// Bazel's embedded JDK ignores the macOS keychain. Copy the certificates the keychain trusts
// (user and admin domains, e.g. a TLS-inspection CA) and the system roots into one truststore.
public class MakeTruststore {
  public static void main(String[] args) throws Exception {
    KeyStore out = KeyStore.getInstance("PKCS12");
    out.load(null, null);
    for (String type : new String[] {"KeychainStore", "KeychainStore-ROOT"}) {
      KeyStore in = KeyStore.getInstance(type);
      in.load(null, null);
      for (String alias : Collections.list(in.aliases())) {
        if (in.isCertificateEntry(alias)) {
          out.setCertificateEntry(type + ":" + alias, in.getCertificate(alias));
        }
      }
    }
    if (out.size() == 0) throw new IllegalStateException("no trusted certificates found in the keychain");
    try (FileOutputStream f = new FileOutputStream(args[0])) {
      out.store(f, "changeit".toCharArray());
    }
    System.out.println("wrote " + out.size() + " certificates to " + args[0]);
  }
}
