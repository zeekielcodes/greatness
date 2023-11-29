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
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed");
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
