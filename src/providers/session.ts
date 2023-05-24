import type { SessionParams } from "@web3modal/react-native/lib/typescript/types/coreTypes";

const sessionParams: SessionParams = {
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
};

export default sessionParams;
