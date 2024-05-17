import { View, Text } from 'react-native';
import {Button} from "react-native-paper";
import {useDispatch} from "react-redux";
import {setLogin} from "../../redux/reducers/login";

export default function AccountChooserScreen() {
	const dispatch = useDispatch();

	return (
		<View>
			<Text>There you will choose an account</Text>
			<Button
				onPress={() => dispatch(setLogin(true))}
			>LOG IN</Button>
		</View>
	);
}