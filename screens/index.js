import {NavigationContainer} from "@react-navigation/native";
import AppScreens from "./app";
import LoginScreens from "./login";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {useSelector} from "react-redux";

import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { Button, MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';

export default function AppNavigation(props) {
	const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

	return (
		<SafeAreaProvider>
				<NavigationContainer theme={props.theme}>
					{
						isLoggedIn ? (
							<AppScreens />
						) : (
							<LoginScreens />
						)
					}
				</NavigationContainer>
		</SafeAreaProvider>
	)
}