import { useWeb3Modal } from "@web3modal/react-native";
import { getEtherProvider } from "../helpers/provider";
import { ethers } from "ethers";
import getToucanSDK from "./../helpers/tweaks/toucan";

const useRetire = () => {
  const { provider } = useWeb3Modal();

  const retire = async (token: any, amount) => {
    const etherProvider = getEtherProvider(provider);

    try {
      const sdk = getToucanSDK(etherProvider);

      const receipt = await sdk.retire(
        ethers.utils.parseEther(amount.toString()),
        token
      );

      return [receipt, false];
    } catch (error) {
      return [false, error];
    }
  };

  return retire;
};

export default useRetire;
