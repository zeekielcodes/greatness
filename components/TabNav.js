import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Main from "../screens/Main";
import CheckRhetoric from "../screens/CheckRhetoric";
import HistoryStack from "./HistoryStack";
import MainStack from "./MainStack";

export default function TabNav() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "History") {
            iconName = focused ? "ios-time" : "ios-time-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#3B82F6",
          height: 60,
        },
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "PoppinsMedium",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={CheckRhetoric}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#3B82F6",
          },
          headerTintColor: "#fff",
          headerShown: true,
          title: "Home",
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert("This is a test button!")}
          //     title="Info"
          //     color="red"
          //   />
          // ),
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStack}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
        }}
      />
    </Tab.Navigator>
  );
}
