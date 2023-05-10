import { Text, TouchableOpacity } from "react-native";
import { useSnapshot } from "valtio";

import { ModalCtrl } from "@web3modal/react-native/src/controllers/ModalCtrl";
import { OptionsCtrl } from "@web3modal/react-native/src/controllers/OptionsCtrl";

import tw from "./../../../tailwind";
import { Web3Modal } from "./Web3Modal";

export function Web3Button({ navigation }) {
  const optionsState = useSnapshot(OptionsCtrl.state);

  const navigateToHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <>
      {optionsState.isConnected ? (
        <TouchableOpacity
          onPress={navigateToHomeScreen}
          style={tw`bg-black py-3 px-5 rounded-md`}
        >
          <Text style={tw`text-white font-semibold`}>Continue</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            try {
              ModalCtrl.open();
            } catch (error) {
            }
          }}
          style={tw`bg-black py-3 px-5 rounded-md`}
        >
          <Text style={tw`text-white font-semibold`}>Connect Wallet</Text>
        </TouchableOpacity>
      )}
      <Web3Modal projectId="8e03eb00365a9543c926106717d2632f" />
    </>
  );
}
