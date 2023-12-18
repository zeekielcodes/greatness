import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ViewResult() {
  const {
    params: { check },
  } = useRoute();
  return (
    <View className="p-4">
      <View className="my-4 border-b border-blue-500 pb-6">
        <Text className="font-poppinsMedium mb-2 text-lg">
          Inputed passage:
        </Text>
        <Text className="font-poppinsLight">{check.input}</Text>
      </View>
      <Text className="font-poppinsMedium text-lg mb-5">Response:</Text>
      <View className="justify-center items-center">
        <View
          className={`${
            check.response == "rhetorical" ? "bg-green-600" : "bg-red-600"
          } h-[100px] w-[100px] justify-center items-center rounded-full mb-3`}
        >
          <Ionicons
            name={check.response == "rhetorical" ? "checkmark" : "close"}
            size={80}
            color={"white"}
          />
        </View>
        <Text className="font-poppinsLight">
          The question is <Text className="font-bold">{check.response}</Text>
        </Text>
      </View>
    </View>
  );
}
