import React, { useCallback, useState } from "react";
import { TextInput, TouchableOpacity, View, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import tw from "../../tailwind";
import AvatarModal from "./modals/AvatarModal";

const Header = ({ setQuery, navigation }) => {
  const [queryCache, setQueryCache] = useState("");

  const handleSearch = useCallback(() => {
    setQuery(queryCache);
  }, [queryCache]);
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);

  const toggleAvatarModal = useCallback(() => {
    setAvatarModalVisible((prevVisible) => !prevVisible);
  }, []);

  return (
    <View style={tw`flex-row items-center py-4 justify-between`}>
      <View style={tw`flex-row items-center p-3 w-4/5 rounded-lg bg-gray-200`}>
        <FontAwesome name="search" size={16} color="#A0AEC0" />
        <TextInput
          value={queryCache}
          onChangeText={setQueryCache}
          placeholder="Search..."
          placeholderTextColor="gray"
          style={tw`flex-1 ml-2 text-lg pb-1`}
          onSubmitEditing={handleSearch}
        />
      </View>
      <TouchableOpacity onPress={() => setAvatarModalVisible(true)}>
        <Image
          source={{ uri: "https://loremflickr.com/30/30/person?random=5" }}
          style={tw`rounded-full h-12 w-12`}
        />
      </TouchableOpacity>
      <AvatarModal
        navigation={navigation}
        toggleAvatarModal={toggleAvatarModal}
        avatarModalVisible={avatarModalVisible}
      />
    </View>
  );
};

export default Header;
