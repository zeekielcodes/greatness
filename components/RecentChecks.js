import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function RecentChecks({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onLongPress={() => Alert.alert("Long Pressed")}
      onPress={() => navigation.navigate("ViewResult")}
    >
      <View>
        <Text className="font-poppinsRegular text-base">{item}</Text>
      </View>
    </TouchableOpacity>
  );
}
