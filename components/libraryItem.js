import { View, Text, ImageBackground } from "react-native";
import { FAB, useTheme } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { useState } from "react";

export default function LibraryItem({ text, image }) {
  const theme = useTheme();

  const [icon, setIcon] = useState("plus");

  const changeIcon = () => {
    setIcon("check");
  };

  return (
    <ImageBackground
      style={{
        backgroundColor: theme.colors.secondaryContainer,
        height: 250,
        width: "100%",
        borderRadius: 30,
        display: "flex",
        justifyContent: "flex-end",
        overflow: "hidden",
        marginVertical: 5,
      }}
      source={image}
      imageStyle={{
        borderRadius: 30,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 15,
          backgroundColor: theme.colors.secondaryContainer,
        }}
      >
        <Text
          style={{
            fontFamily: "GSans-Regular",
            fontSize: 24,
            color: theme.colors.onSecondaryContainer,
          }}
        >
          {text}
        </Text>
        <FAB icon={icon} onPress={changeIcon} />
      </View>
    </ImageBackground>
  );
}
