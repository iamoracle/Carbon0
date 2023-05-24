import { useWeb3Modal } from "@web3modal/react-native";
import { getEtherProvider } from "./../helpers/provider";
import { ethers } from "ethers";
import getToucanSDK from "../helpers/toucan";

const useRedeemAuto = () => {
  const { provider } = useWeb3Modal();

  const redeemAuto = async (token: any, amount) => {
    const etherProvider = getEtherProvider(provider);

    try {
      const sdk = getToucanSDK(etherProvider);
      const receipt = await sdk.redeemAuto(
        token,
        ethers.utils.parseEther(amount.toString())
      );

      return [receipt, ""];
    } catch (error) {
      const _error: string = JSON.stringify(error);
      return ["", _error];
    }
  };

  return redeemAuto;
};

export default useRedeemAuto;
