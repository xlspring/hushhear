import { View, Text } from "react-native";
import {Button, useTheme} from "react-native-paper";
import AppScreenTemplate from "./template";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <AppScreenTemplate>
      <View style={{
        width: "100%",
        height: "100%",
        backgroundColor: theme.colors.primaryContainer
      }}>

      </View>
    </AppScreenTemplate>
  )
}