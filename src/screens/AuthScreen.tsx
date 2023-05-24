import React from "react";
import { Text, ImageBackground, View } from "react-native";
import tw from "./../../tailwind";
import ConnectButton from "../components/ConnectButton";

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
        <ConnectButton navigation={navigation} />
      </ImageBackground>
    </View>
  );
};

export default AuthScreen;
