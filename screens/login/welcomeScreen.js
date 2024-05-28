import { View, Text } from "react-native";
import { Button, useTheme } from "react-native-paper";
import LoginScreenTemplate from "./template";
import LoginButton from "../../components/loginButton";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen(props) {
  const theme = useTheme();
  return (
    <LoginScreenTemplate
      header={"Hello!"}
      icon={"emoticon-excited-outline"}
      text={"We are glad you are with us"}
      secondaryButton={<LoginButton mode={"text"}></LoginButton>}
      primaryButton={
        <LoginButton
          mode={"contained"}
          onPress={() => props.navigation.navigate("ServerScreen")}
        >
          Next
        </LoginButton>
      }
    ></LoginScreenTemplate>
  );
}
