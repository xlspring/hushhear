import { Text, View } from "react-native";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import { useTheme } from "react-native-paper";

export default function BatteryTile() {
  const theme = useTheme();

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: theme.colors.secondaryContainer,
        borderRadius: 30,
        height: 170,
        width: 170,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <MaterialCommunityIcon
        name={"battery"}
        size={35}
        color={theme.colors.onPrimaryContainer}
      />
      <Text
        style={{
          fontSize: 40,
          fontFamily: "GSans-Regular",
          color: theme.colors.onPrimaryContainer,
        }}
      >
        75%
      </Text>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "75%",
          left: 0,
          bottom: 0,
          backgroundColor: theme.colors.primaryContainer,
          zIndex: -1,
        }}
      />
    </View>
  );
}
