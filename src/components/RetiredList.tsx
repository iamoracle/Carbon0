import React, { useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

import tw from "../../tailwind";
import DefaultLayout from "../layouts/DefaultLayout";
import Header from "./Header";
import RetiredsCard from "./RetiredCard";

type Prop = {
  navigation: any;
  setQuery: (value: any) => any;
  loading: boolean;
  error: any;
  carbons: object[];
};

const RetiredList = ({
  navigation,
  setQuery,
  loading,
  error,
  carbons,
}: Prop) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);

    setQuery("");

    setIsRefreshing(false);
  };
  return (
    <DefaultLayout navigation={navigation}>
      <View style={tw`px-5`}>
        <View style={tw`mb-10`}>
          <Header setQuery={setQuery} navigation={navigation} />
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
              />
            }
          >
            <View style={tw`mt-4`}>
              <RetiredsCard carbons={carbons} loading={loading} error={error} />
            </View>
          </ScrollView>
        </View>
      </View>
    </DefaultLayout>
  );
};

export default RetiredList;
