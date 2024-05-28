import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountChooserScreen from "./accountChooser";
import WelcomeScreen from "./welcomeScreen";
import EmailScreen from "./emailScreen";
import ServerScreen from "./serverScreen";
import PasswordLoginScreen from "./passwordLoginScreen";
import SignupScreen from "./signupScreen";

const Stack = createNativeStackNavigator();

export default function LoginScreens(props) {
  return (
    <Stack.Navigator
      initialRouteName={"WelcomeScreen"}
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        navigation={props.navigation}
        name={"WelcomeScreen"}
        component={WelcomeScreen}
      />
      <Stack.Screen
        navigation={props.navigation}
        name={"EmailScreen"}
        component={EmailScreen}
      />
      <Stack.Screen
        navigation={props.navigation}
        name={"ServerScreen"}
        component={ServerScreen}
      />
      <Stack.Screen
        name={"PasswordLoginScreen"}
        navigation={props.navigation}
        component={PasswordLoginScreen}
      />
      <Stack.Screen
        name={"SignupScreen"}
        navigation={props.navigation}
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
}
