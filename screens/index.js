import { NavigationContainer } from "@react-navigation/native";
import AppScreens from "./app";
import LoginScreens from "./login";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import MenuScreens from "./menu";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AppNavigation(props) {
  // const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const isLoggedIn = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={props.theme}>
        <Stack.Navigator>
          {isLoggedIn ? (
            <>
              <Stack.Screen
                name={"appScreens"}
                component={AppScreens}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={"menuScreens"}
                component={MenuScreens}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <Stack.Screen
              name={"loginScreens"}
              component={LoginScreens}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
