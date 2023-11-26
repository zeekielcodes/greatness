import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import { useState } from "react";
import Main from "./screens/Main";
import { NavigationContainer } from "@react-navigation/native";
import { AppContextProvider } from "./components/Context";

export default function App() {
  const [preview, setPreview] = useState(true);
  const [fontsLoaded] = useFonts({
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <AppContextProvider>
      <NavigationContainer>
        {preview ? <Welcome setPreview={setPreview} /> : <Main />}
        <StatusBar style="auto" />
      </NavigationContainer>
    </AppContextProvider>
  );
}
