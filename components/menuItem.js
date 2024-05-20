import { View, Text } from "react-native";
import { TouchableRipple, useTheme } from "react-native-paper";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";

export default function MenuItem(props) {
  const theme = useTheme();

  return (
    <TouchableRipple
      style={{
        width: "100%",
      }}
      onPress={props.onPress}
    >
      <View
        style={{
          width: "100%",
          marginVertical: 16,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 16,
        }}
      >
        <MaterialCommunityIcon
          name={props.icon}
          size={32}
          color={theme.colors.onSecondaryContainer}
        />
        <Text
          style={{
            fontFamily: "GSans-Regular",
            fontSize: 16,
            color: theme.colors.onSecondaryContainer,
          }}
        >
          {props.text}
        </Text>
      </View>
    </TouchableRipple>
  );
}
