import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "@routes/index";
import { Home } from "@screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      {/* {fontsLoaded ? <Routes /> : <Text>BLa</Text>} */}
      <Routes />

      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
