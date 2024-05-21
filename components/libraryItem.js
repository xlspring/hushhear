import { View, Text, ImageBackground } from "react-native";
import { FAB, useTheme } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";

export default function LibraryItem({ text, image }) {
  const theme = useTheme();
  return (
    <ImageBackground
      style={{
        width: "98%",
        height: 200,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
      }}
      source={image}
      resizeMethod={"cover"}
    >
      <Text>{text}</Text>
      <FAB icon={"plus"} onPress={() => console.log("sus")} />
    </ImageBackground>
  );
}
