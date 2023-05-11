import React from "react";
import { Text, ImageBackground, View } from "react-native";
import tw from "./../../tailwind";
import { Web3Button } from "../helpers/tweaks/Web3Button";

const AuthScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={require("./../../assets/earth-2.jpeg")}
        resizeMode="cover"
        style={tw`flex-1 justify-center items-center`}
      >
        <Text style={tw`text-3xl font-bold pb-8 text-white`}>
          Welcome to Carbon0
        </Text>
        <Web3Button navigation={navigation} />
      </ImageBackground>
    </View>
  );
};

export default AuthScreen;
