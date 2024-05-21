import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LibraryScreen from "./library";
import PremiumScreen from "./premium";
import AboutScreen from "./about";

const Stack = createNativeStackNavigator();

export default function MenuScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"library"} component={LibraryScreen} />
      <Stack.Screen name={"premium"} component={PremiumScreen} />
      <Stack.Screen name={"about"} component={AboutScreen} />
    </Stack.Navigator>
  );
}
