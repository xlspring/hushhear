import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function LoginScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"library"} component={AccountChooserScreen} />
      <Stack.Screen name={"premium"} component={AccountChooserScreen} />
      <Stack.Screen name={"about"} component={AccountChooserScreen} />
    </Stack.Navigator>
  );
}
