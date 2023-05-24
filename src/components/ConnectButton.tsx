import { Text, TouchableOpacity } from "react-native";
import { useSnapshot } from "valtio";
import { Web3Modal } from "@web3modal/react-native";
import { ModalCtrl } from "@web3modal/react-native/src/controllers/ModalCtrl";
import { AccountCtrl } from "@web3modal/react-native/src/controllers/AccountCtrl";

import tw from "../../tailwind";
import metaData from "../providers/metadata";
import sessionParams from "../providers/session";

const ConnectButton = ({ navigation }) => {
  const accountCtrl = useSnapshot(AccountCtrl.state);

  const navigateToHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <>
      {accountCtrl.isConnected ? (
        <TouchableOpacity
          onPress={navigateToHomeScreen}
          style={tw`bg-black py-3 px-5 rounded-md`}
        >
          <Text style={tw`text-white font-semibold`}>Continue</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={async () => {
            try {
              await ModalCtrl.open();
            } catch (error) {}
          }}
          style={tw`bg-black py-3 px-5 rounded-md`}
        >
          <Text style={tw`text-white font-semibold`}>Connect Wallet</Text>
        </TouchableOpacity>
      )}
      <Web3Modal
        sessionParams={sessionParams}
        providerMetadata={metaData}
        projectId="8e03eb00365a9543c926106717d2632f"
      />
    </>
  );
};

export default ConnectButton;
