import { View, Text } from "react-native";
import AppScreenTemplate from "./template";
import { useTheme } from "react-native-paper";
import VerticalSlider from "rn-vertical-slider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function EQScreen() {
  const theme = useTheme();

  const message = () => {
    console.log("Vertical slab");
  };

  return (
    <AppScreenTemplate>
      <Text
        style={{
          color: theme.colors.onBackground,
          marginVertical: 41,
          textAlign: "center",
          fontFamily: "GSans-Regular",
          fontSize: 24,
        }}
      >
        Tap on the slider to adjust EQ
      </Text>
      <GestureHandlerRootView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 2,
          }}
        >
          {Array.from(Array(11).keys()).map((x) => (
            <VerticalSlider
              min={0}
              max={100}
              width={30}
              height={250}
              onChange={message}
              borderRadius={30}
              value={50}
              maximumTrackTintColor={theme.colors.secondaryContainer}
              minimumTrackTintColor={theme.colors.primary}
              key={x}
            />
          ))}
        </View>
      </GestureHandlerRootView>
    </AppScreenTemplate>
  );
}
