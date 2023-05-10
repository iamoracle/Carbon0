import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import tw from "../../tailwind";

const DefaultLayout = ({ navigation, children }) => {
  const navigationChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, { navigation });
  });
  const route = useRoute();
  const screenName = route.name;

  const [actions, setActions] = useState([]);

  useEffect(() => {
    if (!screenName) return;

    const ACTIONS = [
      {
        text: "Home",
        name: "HomeScreen",
        position: 1,
        buttonSize: 50,
        color: "black",
      },
      {
        text: "Your Projects",
        name: "OwnedScreen",
        position: 1,
        buttonSize: 50,
        color: "black",
      },
      {
        text: "Redeemed TCO2",
        name: "RedeemedScreen",
        position: 1,
        buttonSize: 50,
        color: "black",
      },
      {
        text: "Retired TCO2",
        name: "RetiredScreen",
        position: 1,
        buttonSize: 50,
        color: "black",
      },
      {
        text: "Trade NCT & BCT",
        name: "ComingSoon",
        position: 1,
        buttonSize: 50,
        color: "black",
      },
      {
        text: "Trade TCO2",
        name: "ComingSoon",
        position: 1,
        buttonSize: 50,
        color: "black",
      },
      {
        text: "Help",
        name: "ComingSoon",
        position: 1,
        buttonSize: 50,
        color: "black",
      },
    ];

    setActions(ACTIONS.filter((action) => action.name !== screenName));
  }, [screenName]);

  const handleLinkPress = (name) => {
    navigation.navigate(name);
  };
  return (
    <View style={tw`flex-1 bg-primary`}>
      <SafeAreaView style={tw`flex-1`}>
        <>
          <View style={tw`px-5 pt-5`}>
            <View style={tw`mt-5`}>
              <Text style={tw`text-4xl font-bold text-gray-800`}>Carbon0</Text>
            </View>
          </View>
          <>{navigationChildren}</>
        </>
      </SafeAreaView>
      <FloatingAction
        animated={true}
        color="black"
        actions={actions}
        onPressItem={handleLinkPress}
      />
    </View>
  );
};

export default DefaultLayout;
