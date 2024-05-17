import {View, Text} from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountChooserScreen from "./accountChooser";

const Stack = createNativeStackNavigator();

export default function LoginScreens() {
	return (
		<Stack.Navigator
			initialRouteName={"AccountChooser"}
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen
				name={"AccountChooser"}
				component={AccountChooserScreen}
			/>
		</Stack.Navigator>
	)
}