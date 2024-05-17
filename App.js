import {useEffect, useState} from "react";
import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { NavigationContainer } from "@react-navigation/native";

import AppScreens from "./screens/app";
import {SafeAreaProvider} from "react-native-safe-area-context";
import LoginScreens from "./screens/login";

export default function App() {
  const [isLoggedIn, setLogIn] = useState(true);

  useEffect(() => {
    NavigationBar.setPositionAsync("absolute");
    NavigationBar.setBackgroundColorAsync("#ffffff01");
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {
          isLoggedIn ? (
            <AppScreens />
          ) : (
            <LoginScreens />
          )
        }
      </NavigationContainer>
      <StatusBar />
    </SafeAreaProvider>
  );
}