import { View, Text } from "react-native";
import styled from "styled-components/native";
import Header from "../../components/header";

export default function AppScreenTemplate(props) {
  console.log(props.additionalStyles);
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
        },
      ]}
    >
      <Header />
      <View style={[props.additionalStyles, { height: "100%" }]}>
        {props.children}
      </View>
    </View>
  );
}
