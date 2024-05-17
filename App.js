import {useEffect, useMemo} from "react";

import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

import {Provider} from "react-redux";
import {store} from "./redux/store";
import AppNavigation from "./screens";
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from "react-native-paper";
import {useMaterial3Theme} from "@pchmn/expo-material3-theme";
import {useColorScheme} from "react-native";

export default function App() {

  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme({ fallbackSourceColor: "#66ff00" });

  console.log(colorScheme);

  const paperTheme = useMemo(
    () =>
      colorScheme === 'dark' ? { ...MD3DarkTheme, colors: theme.dark } : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme]
  );

  console.log(theme);

  useEffect(() => {
    NavigationBar.setPositionAsync("absolute");
    NavigationBar.setBackgroundColorAsync("#ffffff01");
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider theme={paperTheme}>
        <AppNavigation theme={paperTheme} />
        <StatusBar />
      </PaperProvider>
    </Provider>
  );
}