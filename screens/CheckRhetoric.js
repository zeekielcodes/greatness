import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import { AppContext } from "../components/Context";

export default function CheckRhetoric({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { recentlyChecked, updateRecentlyChecked } = useContext(AppContext);
  const getAnswers = () => {
    setLoading(true);
    // Make the API call
    const data = {
      id: new Date().getTime(),
      input,
      response: "My name is The Face",
    };
    const newData = [...recentlyChecked, data];
    updateRecentlyChecked(newData);
    navigation.navigate("ViewResult", { data });
    setInput("");
    setLoading(false);
  };
  return (
    <View className="flex-1 p-6 items-center">
      <Text className="font-poppinsRegular text-center text-xl">
        Input passage in input field below to check for rhetoric questions in
        the passage.
      </Text>
      <TextInput
        placeholder=""
        multiline={true}
        value={input}
        onChangeText={(e) => setInput(e)}
        className="h-[300px] p-4 w-[300px] font-poppinsLight my-4 text-md border-2 border-blue-500"
      />
      <TouchableOpacity
        disabled={input.length < 1}
        className="bg-blue-500 rounded-md px-6 py-2"
        onPress={getAnswers}
      >
        {loading ? (
          <ActivityIndicator size={"small"} />
        ) : (
          <Text className="font-poppinsMedium text-lg text-white">Check</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
