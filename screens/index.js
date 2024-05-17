import {NavigationContainer} from "@react-navigation/native";
import AppScreens from "./app";
import LoginScreens from "./login";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {useSelector} from "react-redux";

export default function AppNavigation() {

	const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

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
		</SafeAreaProvider>
	)
}