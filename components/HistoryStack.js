import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HistoryList from "../screens/HistoryList";

export default function HistoryStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistoryList"
        component={HistoryList}
        options={{
          title: "Recent",
          headerStyle: {
            backgroundColor: "#3B82F6",
          },
          headerTintColor: "#fff",
          headerShown: true,
          headerTitleStyle: {
            fontWeight: "bold",
            className: "font-poppinsMedium",
          },
        }}
      />
    </Stack.Navigator>
  );
}
