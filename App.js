import {useCallback, useEffect, useMemo} from "react";

import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

import {Provider} from "react-redux";
import {store} from "./redux/store";
import AppNavigation from "./screens";
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from "react-native-paper";
import {useMaterial3Theme} from "@pchmn/expo-material3-theme";
import {useColorScheme} from "react-native";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [isLoaded] = useFonts({
    "GSans-Bold": require("./assets/fonts/ProductSans-Bold.ttf"),
    "GSans-Regular": require("./assets/fonts/ProductSans-Regular.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme({ fallbackSourceColor: "#66ff00" });

  const paperTheme = useMemo(
    () =>
      colorScheme === 'dark' ? { ...MD3DarkTheme, colors: theme.dark } : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme]
  );

  useEffect(() => {
    NavigationBar.setPositionAsync("absolute");
    NavigationBar.setBackgroundColorAsync("#ffffff01");
    handleOnLayout();
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={paperTheme}>
        <AppNavigation theme={paperTheme} />
        <StatusBar />
      </PaperProvider>
    </Provider>
  );
}