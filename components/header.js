import { View, Text } from "react-native"
import styled from "styled-components/native";
import {Avatar, IconButton, useTheme} from "react-native-paper";

export default function Header() {
	const theme = useTheme();
	return (
		<HeaderContainer>
			<IconButton
				icon={'plus'}
				size={36}
				style={{
					marginHorizontal: 0,
					marginVertical: 0,
					height: 52,
					width: 52,
				}}
			/>
			<View style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: "center"
			}}>
				<TitleText
					style={{
						fontFamily: "GSans-Bold",
						color: theme.colors.onBackground
					}}
				>HUSH</TitleText>
				<TitleText
					style={{
						fontFamily: "GSans-Bold",
						color: theme.colors.primary
					}}
				>HEAR</TitleText>
			</View>
			<Avatar.Icon size={52} icon={"account"} />
		</HeaderContainer>
	)
}

const HeaderContainer = styled(View)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const TitleText = styled(Text)`
	font-size: 24px;
`;