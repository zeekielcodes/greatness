import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function ViewResult() {
  const {
    params: { data },
  } = useRoute();
  return (
    <View className="p-4">
      <Text className="font-poppinsMedium mb-4 text-lg">Inputed passage:</Text>
      <Text className="font-poppinsLight">{data.input}</Text>
      <Text className="font-poppinsMedium text-lg">Response:</Text>
      <Text className="font-poppinsLight">{data.response}</Text>
    </View>
  );
}
