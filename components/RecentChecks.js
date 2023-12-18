import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "./Context";

export default function RecentChecks({ item }) {
  const { recentlyChecked, updateRecentlyChecked } = useContext(AppContext);
  const navigation = useNavigation();
  const deleteCheck = () =>
    Alert.alert("Delete", "Are you sure you want to delete this?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          const afterDelete = recentlyChecked.filter(
            (check) => check.id !== item.id
          );
          updateRecentlyChecked(afterDelete);
        },
      },
    ]);

  return (
    <TouchableOpacity
      onLongPress={deleteCheck}
      onPress={() => navigation.navigate("ViewResult", { check: item })}
    >
      <View>
        <Text className="font-poppinsRegular text-base" numberOfLines={4}>
          {item.input}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
