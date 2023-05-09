import { useWeb3Modal } from "@web3modal/react-native";
import { getEtherProvider } from "../helpers/provider";
import getToucanSDK from "./../helpers/tweaks/toucan";
import { ethers } from "ethers";

const useRetireAndMintCertificate = () => {
  const { provider } = useWeb3Modal();

  const retireAndMintCertificate = async (
    name,
    address,
    message,
    token: any,
    amount
  ) => {
    const etherProvider = getEtherProvider(provider);

    const sdk = getToucanSDK(etherProvider);

    try {
      const receipt = await sdk.retireAndMintCertificate(
        name,
        address,
        name,
        message,
        ethers.utils.parseEther(amount.toString()),
        token
      );

      return [receipt, false];
    } catch (error) {
      console.error(error);
      return [false, error];
    }
  };

  return retireAndMintCertificate;
};

export default useRetireAndMintCertificate;
