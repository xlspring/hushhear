import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import AppScreens from "./screens";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppScreens />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}