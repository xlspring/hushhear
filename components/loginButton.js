import { View, Text } from "react-native";
import { useTheme, Button } from "react-native-paper";

export default function LoginButton(props) {
  return (
    <Button
      mode={props.mode}
      onPress={props.onPress}
      disabled={props.disabled}
      style={{
        flex: 1,
        height: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </Button>
  );
}
