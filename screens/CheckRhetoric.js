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
  const getAnswers = async () => {
    setLoading(true);

    // Make the API call
    const response = await fetch("https://great-app.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();
    setLoading(false);
    const formattedPrediction = data.prediction.replace(/[\\"\s]/g, "");
    const check = {
      id: new Date().getTime(),
      input,
      response: formattedPrediction,
    };
    const newData = [...recentlyChecked, check];
    updateRecentlyChecked(newData);
    navigation.navigate("ViewResult", { check });

    setInput("");
  };
  return (
    <View className="flex-1 p-6 items-center">
      <Text className="font-poppinsRegular text-center text-xl">
        Input question in input field below to check if it is rhetoric or not.
      </Text>
      <TextInput
        placeholder="Enter a question"
        multiline={true}
        value={input}
        onChangeText={(e) => setInput(e)}
        className="h-[60px] p-4 w-[300px] font-poppinsLight my-4 text-md border-2 border-blue-500"
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
