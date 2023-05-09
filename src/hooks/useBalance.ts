import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useWeb3Modal } from "@web3modal/react-native";
import { getEtherProvider } from "./../helpers/provider";

const useBalance = (address: string) => {
  const [balance, setBalance] = useState<string>("0");
  const { provider } = useWeb3Modal();

  useEffect(() => {
    if (address === "0x0000000000000000000000000000000000000000") {
      return;
    }
    const _getBalance = async () => {
      const balance = await getBalance();
      setBalance(ethers.utils.formatUnits(balance));
    };
    _getBalance();
  });

  const getBalance = async () => {
    const etherProvider = getEtherProvider(provider);

    return await etherProvider.getBalance(address);
  };

  return balance;
};

export default useBalance;
