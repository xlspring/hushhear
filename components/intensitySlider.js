import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Slider from "@candlefinance/slider";
import { useTheme } from "react-native-paper";

export default function IntensitySlider() {
  const theme = useTheme();

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          zIndex: 99,

          position: "absolute",
        }}
      >
        <MaterialCommunityIcons
          name={"blur"}
          color={theme.colors.onSecondaryContainer}
          size={46}
          style={{
            marginLeft: 10,
            marginRight: 5,
          }}
        />
        <Text
          style={{
            fontSize: 15,
            fontFamily: "GSans-Regular",
            color: theme.colors.onSecondaryContainer,
          }}
        >
          Intensity
        </Text>
      </View>
      <Slider
        height={78}
        width={170}
        min={1}
        max={100}
        onChange={() => console.log("Intensity")}
        maximumTrackTintColor={theme.colors.secondaryContainer}
        minimumTrackTintColor={theme.colors.primaryContainer}
        showBallIndicator={false}
      />
    </View>
  );
}
