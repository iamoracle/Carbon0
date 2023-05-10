import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import RetiredScreen from "./screens/RetiredScreen";
import OwnedScreen from "./screens/OwnedScreen";
import ComingSoon from "./screens/ComingSoon";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo_client";
import CarbonsProvider from "./providers/carbons";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true);

const Stack = createStackNavigator();

const screens = [
  {
    name: "AuthScreen",
    component: AuthScreen,
  },
  {
    name: "HomeScreen",
    component: HomeScreen,
  },
  {
    name: "RetiredScreen",
    component: RetiredScreen,
  },
  {
    name: "OwnedScreen",
    component: OwnedScreen,
  },
  {
    name: "ComingSoon",
    component: ComingSoon,
  },
];

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CarbonsProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="AuthScreen">
            {screens.map(({ name, component }) => (
              <Stack.Screen
                key={name}
                name={name}
                component={component}
                options={{
                  headerShown: false,
                  headerTitle: "",
                }}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </CarbonsProvider>
    </ApolloProvider>
  );
};

export default App;
