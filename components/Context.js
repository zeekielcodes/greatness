import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [recentlyChecked, setRecentlyChecked] = useState([]);

  useEffect(() => {
    // Load data from AsyncStorage when the component mounts
    loadDataFromStorage();
  }, []);

  const loadDataFromStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem("@MyApp:recentlyChecked");
      if (storedData) {
        setRecentlyChecked(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Error loading data from AsyncStorage:", error);
    }
  };

  const updateRecentlyChecked = async (newData) => {
    try {
      // Update the context state
      setRecentlyChecked(newData);

      // Save the updated data to AsyncStorage
      await AsyncStorage.setItem(
        "@MyApp:recentlyChecked",
        JSON.stringify(newData)
      );
    } catch (error) {
      console.error("Error updating data in AsyncStorage:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        recentlyChecked,
        updateRecentlyChecked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
