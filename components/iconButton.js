import { View, Text, Touchable } from "react-native";
import { TouchableRipple, useTheme } from "react-native-paper";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import { useState } from "react";

export default function IconButton(props) {
  const theme = useTheme();

  const [currentIcon, setCurrentIcon] = useState(props.name);

  const use = () => {
    setCurrentIcon(props.secondName);

    setTimeout(() => {
      setCurrentIcon(props.name);
    }, 2000);
  };

  return (
    <TouchableRipple
      style={{
        backgroundColor: theme.colors.secondaryContainer,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        borderRadius: 20,
      }}
      onPress={use}
    >
      <MaterialCommunityIcon
        name={currentIcon}
        size={props.size}
        color={theme.colors.onSecondaryContainer}
      />
    </TouchableRipple>
  );
}
