import { View, Text } from "react-native";
import styled from "styled-components/native";
import Header from "../components/header";
import { useTheme } from "react-native-paper";

export default function AppScreenTemplate(props) {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          paddingTop: 36,
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 110,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: theme.colors.background,
        },
      ]}
    >
      <Header back={props.back} />
      <View style={[props.additionalStyles, { height: "100%" }]}>
        {props.children}
      </View>
    </View>
  );
}
