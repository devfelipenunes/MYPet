import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";

import { AuthProvider } from "@hooks/auth";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { SignIn } from "@screens/SignIn";
import { AuthRoutes } from "@routes/auth.routes";
import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      {/* {fontsLoaded ? <Routes /> : <Text>BLa</Text>} */}
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
