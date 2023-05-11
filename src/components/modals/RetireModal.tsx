import useRetire from "../../hooks/useRetire";
import React, { useCallback, useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import tw from "../../../tailwind";
import FailedModal from "./FailedModal";
import SuccessModal from "./SuccessModal";

const OffsetModal = ({ token, modalVisible, toggleModal }) => {
  const [amount, setAmount] = useState<number>(0);
  const retire = useRetire();

  const [failedModalVisible, setFailedModalVisible] = useState<boolean>(false);
  const [successModalVisible, setSuccessModalVisible] =
    useState<boolean>(false);

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const toggleFailedModal = useCallback(() => {
    setFailedModalVisible((prevVisible) => !prevVisible);
  }, []);

  const toggleSuccessModal = useCallback(() => {
    setSuccessModalVisible((prevVisible) => !prevVisible);
  }, []);

  const submit = async () => {
    if (amount < 1) {
      toggleModal();
      setFailedModalVisible(true);
      setError("invalid amount");
      return;
    }
    const [receipt, error] = await retire(token, amount);
    if (typeof error === "string" && error !== "") {
      toggleModal();
      setError(error);
      setFailedModalVisible(true);
      return;
    }

    if (typeof receipt === "string") return;

    toggleModal();
    setSuccess(
      `redeemed successfully with ${receipt.transactionHash.toString()}`
    );
    setSuccessModalVisible(true);
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => toggleModal()}
      >
        <KeyboardAvoidingView
          behavior="padding"
          style={[
            tw`flex-1 justify-end items-center`,
            { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          ]}
        >
          <View style={tw`bg-white w-full p-4 rounded-t-lg shadow`}>
            <Text style={tw`text-lg font-bold mb-2`}>Retire Carbon</Text>
            <TextInput
              placeholder="Enter amount"
              value={amount.toString()}
              onChangeText={(e) => {
                let value = parseInt(e);
                if (isNaN(value)) {
                  value = 0;
                }
                setAmount(value);
              }}
              style={tw`bg-gray-100 p-2 rounded-md border border-gray-400 mb-2`}
              keyboardType="numeric"
            />
            <TouchableOpacity
              onPress={submit}
              style={tw`bg-gray-800 p-2 rounded-md`}
            >
              <Text style={tw`text-white text-center`}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => toggleModal()}
              style={tw`mt-2 bg-gray-200 p-2 rounded-md`}
            >
              <Text style={tw`text-gray-600 text-center`}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <FailedModal
        modalVisible={failedModalVisible}
        toggleModal={toggleFailedModal}
        message={error}
      />
      <SuccessModal
        modalVisible={successModalVisible}
        toggleModal={toggleSuccessModal}
        message={success}
      />
    </>
  );
};

export default OffsetModal;
