import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewResult from "../screens/ViewResult";
import TabNav from "./TabNav";

export default function MainStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{
          title: "TabNav",
          headerStyle: {
            backgroundColor: "#3B82F6",
          },
          headerTintColor: "#fff",
          headerShown: false,
          headerTitleStyle: {
            fontWeight: "bold",
            className: "font-poppinsMedium",
          },
        }}
      />
      <Stack.Screen
        name="ViewResult"
        component={ViewResult}
        options={{
          title: "Rhetoric Check",
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
