import UniversalProvider from "@walletconnect/universal-provider";

export async function createUniversalProvider({
  projectId,
  relayUrl,
}: {
  projectId: string;
  relayUrl?: string;
}) {
  return UniversalProvider.init({
    logger: "info",
    relayUrl,
    projectId,
    metadata: {
      name: "Carbon0",
      description: "Making Carbon Offsetting Easier",
      url: "https://walletconnect.com/",
      icons: ["https://avatars.githubusercontent.com/u/37784886"],
    },
  });
}

export default createUniversalProvider;
