import ToucanClient from "toucan-sdk";

const getToucanSDK = (provider) => {
  const sdk = new ToucanClient("celo");
  const signer = provider.getSigner();
  sdk.setProvider(provider);
  sdk.setSigner(signer);
  return sdk;
};

export default getToucanSDK;
