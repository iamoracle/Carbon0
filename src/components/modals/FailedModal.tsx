import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "./../../../tailwind";

const FailedModal = ({ modalVisible, toggleModal, message }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => toggleModal()}
    >
      <TouchableOpacity
        style={tw`flex-1 bg-gray-900 bg-opacity-50 justify-center items-center`}
        onPress={() => toggleModal()}
      >
        <View style={tw`bg-white py-10 px-12 rounded-5`}>
          <View style={tw`flex justify-center items-center`}>
            <Ionicons name="close-circle" size={50} color="#FF0000" />
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
              Failed
            </Text>
            <View style={tw`max-w-40`}>
              <Text
                style={{ marginTop: 10, fontSize: 14, textAlign: "center" }}
              >
                {message}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default FailedModal;
