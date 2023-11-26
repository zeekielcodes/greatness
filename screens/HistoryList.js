import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RecentChecks from "../components/RecentChecks";
import { AppContext } from "../components/Context";

export default function HistoryList() {
  const { recentlyChecked } = useContext(AppContext);
  return (
    <FlatList
      data={recentlyChecked}
      renderItem={({ item }) => <RecentChecks item={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={
        <View className="border-t-2 my-2 border-gray-300"></View>
      }
      ListEmptyComponent={
        <View className="flex-1 justify-center items-center">
          <Text className="text-2xl font-poppinsMedium">No recent history</Text>
        </View>
      }
      className="p-2"
    />
    // <>
    //   {recentlyChecked.length > 0 ? (
    //     <ScrollView>
    //       {recentlyChecked.map((item) => (
    //         <RecentChecks item={item} />
    //       ))}
    //     </ScrollView>
    //   ) : (
    //     <View className="flex-1 justify-center items-center">
    //       <Text className="text-2xl font-poppinsMedium">No recent history</Text>
    //     </View>
    //   )}
    // </>
  );
}
