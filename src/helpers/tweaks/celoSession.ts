import UniversalProvider from "@walletconnect/universal-provider";
import type { SessionTypes } from "@walletconnect/types";

export async function createCeloSession({
  provider,
}: {
  provider: UniversalProvider;
}): Promise<SessionTypes.Struct | undefined> {
  return provider.connect({
    namespaces: {
      eip155: {
        methods: [
          "eth_sendTransaction",
          "eth_signTransaction",
          "eth_sign",
          "personal_sign",
          "eth_signTypedData",
        ],
        chains: ["eip155:42220"],
        events: ["chainChanged", "accountsChanged"],
        rpcMap: {},
      },
    },
  });
}
