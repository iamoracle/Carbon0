import React, { useState } from "react";
import { ScrollView, View, RefreshControl } from "react-native";

import tw from "../../tailwind";
import DefaultLayout from "../layouts/DefaultLayout";
import CarbonsCard from "./CarbonsCard";
import Header from "./Header";

type Prop = {
  navigation: any;
  setQuery: (value: any) => any;
  loading: boolean;
  error: any;
  carbons: object[];
};

const CarbonList = ({
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
      <View style={tw`px-5 relative`}>
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
              <CarbonsCard carbons={carbons} loading={loading} error={error} />
            </View>
          </ScrollView>
        </View>
      </View>
    </DefaultLayout>
  );
};

export default CarbonList;
