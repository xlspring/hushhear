import {View, Text, Touchable} from "react-native";
import {TouchableRipple, useTheme} from "react-native-paper";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";

export default function IconButton(props) {
	const theme = useTheme();

	return (
		<TouchableRipple
			style={{
				backgroundColor: theme.colors.secondaryContainer,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: 16,
				borderRadius: 20
			}}
		>
			<MaterialCommunityIcon name={props.name} size={props.size} color={theme.colors.onSecondaryContainer} />
		</TouchableRipple>
	)
}