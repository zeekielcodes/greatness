import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

export default function Welcome({ setPreview }) {
  useEffect(() => {
    setTimeout(() => {
      setPreview(false);
    }, 3000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={require("../assets/logo.png")}
        className="h-[300px] aspect-square"
      />
      <View className="absolute bottom-6 w-full gap-3 p-4 flex justify-center items-center">
        <Text className="font-poppinsLight text-lg">BY</Text>
        <Text className="font-poppinsMedium text-blue-500 text-2xl uppercase">
          Greatness Adegoroye
        </Text>
      </View>
    </View>
  );
}
