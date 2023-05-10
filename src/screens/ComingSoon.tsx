import React from "react";
import { ScrollView, View, Text } from "react-native";

import tw from "../../tailwind";
import DefaultLayout from "../layouts/DefaultLayout";

const ComingSoon = ({ navigation }) => {
  return (
    <DefaultLayout navigation={navigation}>
      <View style={tw`px-5`}>
        <View style={tw`mb-10`}>
          <ScrollView>
            <View style={tw`mt-4`}>
              <View style={tw`flex h-100 justify-center items-center pt-10`}>
                <Text style={tw`text-2xl text-gray-800 font-bold`}>
                  Coming Soon...
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </DefaultLayout>
  );
};

export default ComingSoon;
