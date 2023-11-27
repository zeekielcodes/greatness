import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function ViewResult() {
  const {
    params: { data },
  } = useRoute();
  return (
    <View className="p-4">
      <Text className="font-poppinsMedium mb-4 text-xl">
        Inputed passage: "{data.input}"
      </Text>
      <Text className="font-poppinsLight text-lg">
        Response: {data.response}
      </Text>
    </View>
  );
}
