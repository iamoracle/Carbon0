import { ethers } from "ethers";

const getEtherProvider = (provider: any) => {
  return new ethers.providers.Web3Provider(provider);
};

export { getEtherProvider };
