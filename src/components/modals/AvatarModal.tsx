import React, { useEffect, useState } from "react";
import { Modal, TouchableOpacity, View, Image, Text } from "react-native";
import tw from "./../../../tailwind";
import useAddress from "../../hooks/useAddress";
import useBalance from "../../hooks/useBalance";
import { truncate } from "truncate-ethereum-address";
import { useWeb3Modal } from "./../../helpers/tweaks/useWeb3Modal";
import getToucanSDK from "../../helpers/toucan";
import { getEtherProvider } from "./../../helpers/provider";
import { ethers } from "ethers";
import Jazzicon from "react-native-jazzicon";

const AvatarModal = ({ avatarModalVisible, toggleAvatarModal, navigation }) => {
  const address = useAddress();

  const balance = useBalance(address);

  const [NCTBalance, setNCTBalance] = useState("0");

  const { disconnect, provider } = useWeb3Modal();

  useEffect(() => {
    if (address === "0x0000000000000000000000000000000000000000") return;

    const _getNCTBalance = async () => {
      const sdk = getToucanSDK(getEtherProvider(provider));
      const nct = await sdk.getPoolContract("NCT");

      const _NCTBalance = await nct.balanceOf(address);

      setNCTBalance(ethers.utils.formatUnits(_NCTBalance, "ether"));
    };
    _getNCTBalance();
  }, [address]);

  const disconnectWallet = () => {
    toggleAvatarModal();
    disconnect();
    navigation.navigate("AuthScreen");
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={avatarModalVisible}
      onRequestClose={() => toggleAvatarModal()}
    >
      <TouchableOpacity
        style={[
          tw`flex-1 bg-gray-900 bg-opacity-50 justify-center items-center`,
          { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        ]}
        onPress={() => toggleAvatarModal()}
      >
        <View style={tw`bg-white py-10 px-12 rounded-5`}>
          <View style={tw`flex justify-center items-center`}>
            <View style={tw`my-3`}>
              <Jazzicon size={48} address={address} />
            </View>
            <Text style={tw`mb-3 text-gray-900`}>{truncate(address)}</Text>
            <Text style={tw`text-gray-600 mb-3`}>{balance} CELO</Text>
            <Text style={tw`text-gray-600 mb-3`}>{NCTBalance} NCT</Text>
            <Text
              onPress={disconnectWallet}
              style={tw`text-red-400 my-3 underline`}
            >
              Logout
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AvatarModal;
