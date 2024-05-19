import { View, Text } from "react-native";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import {TouchableRipple, useTheme} from "react-native-paper";
import {useEffect, useState} from "react";

export default function ANCTile() {
	const theme = useTheme();
	const [isEnabled, setEnabled] = useState(false);
	const textTheme = isEnabled ? theme.colors.onPrimaryContainer :theme.colors.onSecondaryContainer;
	const viewTheme = isEnabled ? theme.colors.primaryContainer :theme.colors.secondaryContainer;

	return (
		<TouchableRipple style={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: viewTheme,
			borderRadius: 30,
			height: 170,
			width: 170,
			overflow: "hidden",
			position: "relative"
		}}
		onPress={() => setEnabled(!isEnabled)}
		>
			<View style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}>
				<MaterialCommunityIcon name={"power"} size={35} color={textTheme} />
				<Text style={{
					fontSize: 16,
					fontFamily: "GSans-Regular",
					color: textTheme
				}}>Noise cancellation</Text>
			</View>
		</TouchableRipple>

	)
}