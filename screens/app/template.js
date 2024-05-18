import { View, Text } from "react-native"
import styled from "styled-components/native"
import Header from "../../components/header";

export default function AppScreenTemplate(props) {
	return (
		<View style={{
			paddingTop: 36,
			paddingLeft: 15,
			paddingRight: 15,
			paddingBottom: 110,
			display: "flex",
			flexDirection: "column",
			alignItems: "center"
		}}>
		<Header />
			{props.children}
		</View>
	)
}