import React, { useState, useCallback } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import tw from "../../tailwind";
import Spinner from "react-native-loading-spinner-overlay";
import OffsetModal from "./modals/OffsetModal";
import useRandomImage from "./../hooks/useRandomImage";

const CarbonCard = ({
  id,
  name,
  symbol,
  score,
  randomizeImage,
  toggleOffsetModal,
  setToken,
}) => {
  return (
    <View style={tw`py-3 border-b border-gray-300 rounded-lg mb-4`}>
      <View style={tw`px-4 py-4`}>
        <Image source={{ uri: randomizeImage(id) }} style={styles.image} />
        <View style={tw`mt-4`}>
          <Text style={tw`text-xl text-gray-800 font-bold`}>{name}</Text>
          <Text style={tw`text-sm text-gray-800 mt-1`}>{symbol}</Text>
          <Text style={tw`text-sm text-gray-800 mt-1`}>{score}</Text>
        </View>
        <TouchableOpacity
          style={tw`bg-gray-800 py-2 px-4 rounded mt-4 self-start`}
          onPress={() => {
            toggleOffsetModal();
            setToken(id);
          }}
        >
          <Text style={tw`text-center text-white font-bold`}>Offset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarbonsCard = ({ carbons, loading, error }) => {
  const [offsetModalVisible, setOffsetModalVisible] = useState(false);
  const [token, setToken] = useState("");

  const randomizeImage = useRandomImage();

  const toggleOffsetModal = useCallback(() => {
    setOffsetModalVisible((prevVisible) => !prevVisible);
  }, []);

  return loading ? (
    <Spinner visible={true} textContent="Loading carbons..." />
  ) : carbons.length > 0 ? (
    <View>
      {carbons.map((carbon: any) => (
        <CarbonCard
          key={carbon.id}
          id={carbon.id}
          name={carbon.name}
          symbol={carbon.symbol}
          score={carbon.score}
          randomizeImage={randomizeImage}
          toggleOffsetModal={toggleOffsetModal}
          setToken={setToken}
        />
      ))}
      <OffsetModal
        token={token}
        modalVisible={offsetModalVisible}
        toggleModal={toggleOffsetModal}
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

export default CarbonsCard;
