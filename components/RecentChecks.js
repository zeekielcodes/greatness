import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function RecentChecks({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onLongPress={() => Alert.alert("Long Pressed")}
      onPress={() => navigation.navigate("ViewResult", { data: item })}
    >
      <View>
        <Text className="font-poppinsRegular text-base" numberOfLines={4}>
          {item.input}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
