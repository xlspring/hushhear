import { View, Text, Image } from "react-native";
import AppScreenTemplate from "../template";
import { useTheme } from "react-native-paper";

export default function AboutScreen() {
  const theme = useTheme();
  const pfp = require("../../assets/pfp.jpg");
  return (
    <AppScreenTemplate back>
      <Image
        source={pfp}
        style={{
          width: 200,
          height: 200,
          borderRadius: 30,
          marginVertical: 80,
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          fontFamily: "GSans-Bold",
          fontSize: 24,
          color: theme.colors.onBackground,
        }}
      >
        Proudly written in a few days by pfxel
      </Text>
    </AppScreenTemplate>
  );
}
