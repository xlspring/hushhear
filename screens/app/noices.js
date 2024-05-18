import { View, Text } from "react-native";
import AppScreenTemplate from "./template";
import {useTheme} from "react-native-paper";

export default function NoicesScreen() {
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