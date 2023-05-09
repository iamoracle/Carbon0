import React, { useState, useCallback } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import tw from "../../tailwind";
import Spinner from "react-native-loading-spinner-overlay";
import RetireModal from "./modals/RetireModal";
import RetireAndMintNFT from "./modals/RetireAndMintNFT";
import useRandomImage from "./../hooks/useRandomImage";

const OwnedCard = ({
  id,
  name,
  symbol,
  balance,
  randomizeImage,
  toggleRetireModal,
  toggleRetireAndMintModal,
  setToken,
}) => {
  return (
    <View style={tw`py-3 border-b border-gray-300 rounded-lg mb-4`}>
      <View style={tw`px-4 py-4`}>
        <Image source={{ uri: randomizeImage(id) }} style={styles.image} />
        <View style={tw`mt-4`}>
          <Text style={tw`text-xl text-gray-800 font-bold`}>{name}</Text>
          <Text style={tw`text-sm text-gray-800 mt-1`}>{symbol}</Text>
          <Text style={tw`text-sm text-gray-800 mt-1`}>{balance}</Text>
        </View>
        <View style={tw`flex flex-row justify-between mt-4`}>
          <TouchableOpacity
            style={tw`bg-gray-800 py-2 px-4 rounded`}
            onPress={() => {
              toggleRetireAndMintModal();
              setToken(id);
            }}
          >
            <Text style={tw`text-center text-white font-bold`}>
              Retire &amp; Mint
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-gray-800 py-2 px-4 rounded`}
            onPress={() => {
              toggleRetireModal(true);
              setToken(id);
            }}
          >
            <Text style={tw`text-center text-white font-bold`}>Retire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const OwnedsCard = ({ carbons, loading, error }) => {
  const [retireModalVisible, setRetireModalVisible] = useState(false);
  const [retireAndMintNFTModalVisible, setRetireAndMintNFTModalModalVisible] =
    useState(false);
  const [token, setToken] = useState("");

  const randomizeImage = useRandomImage();

  const toggleRetireModal = useCallback(() => {
    setRetireModalVisible((prevVisible) => !prevVisible);
  }, []);

  const toggleRetireAndMintModal = useCallback(() => {
    setRetireAndMintNFTModalModalVisible((prevVisible) => !prevVisible);
  }, []);

  return loading ? (
    <Spinner visible={true} textContent="Loading carbons..." />
  ) : carbons.length > 0 ? (
    <View>
      {carbons.map((carbon: any) => (
        <OwnedCard
          key={carbon.id}
          id={carbon.id}
          name={carbon.name}
          symbol={carbon.symbol}
          balance={carbon.balance}
          randomizeImage={randomizeImage}
          toggleRetireModal={toggleRetireModal}
          toggleRetireAndMintModal={toggleRetireAndMintModal}
          setToken={setToken}
        />
      ))}
      <RetireModal
        token={token}
        modalVisible={retireModalVisible}
        toggleModal={toggleRetireModal}
      />
      <RetireAndMintNFT
        token={token}
        modalVisible={retireAndMintNFTModalVisible}
        toggleModal={toggleRetireAndMintModal}
      />
      <View style={tw`mb-100`}></View>
    </View>
  ) : (
    <View style={tw`flex h-100 justify-center items-center pt-10`}>
      <Text style={tw`text-2xl text-gray-800 font-bold`}>No Result...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 8,
  },
});

export default OwnedsCard;
