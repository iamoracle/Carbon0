import { useEffect, useState } from "react";
import { useWeb3Modal } from "@web3modal/react-native";
import { getEtherProvider } from "./../helpers/provider";

const useAddress = () => {
  const [address, setAddress] = useState<string>(
    "0x0000000000000000000000000000000000000000"
  );
  const { provider } = useWeb3Modal();

  useEffect(() => {
    const _getAddress = async () => {
      const address = await getAddress();
      setAddress(address);
    };
    _getAddress();
  }, []);

  const getAddress = async () => {
    const etherProvider = getEtherProvider(provider);
    const signer = etherProvider.getSigner();
    return await signer.getAddress();
  };

  return address;
};

export default useAddress;
