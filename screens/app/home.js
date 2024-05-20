import { View } from "react-native";
import { Portal, useTheme } from "react-native-paper";
import AppScreenTemplate from "./template";
import HeadphoneCard from "../../components/headphonePicture";
import { useSelector } from "react-redux";
import IconButton from "../../components/iconButton";
import BatteryTile from "../../components/batteryTile";
import ANCTile from "../../components/ANCTile";
import Menu from "../../components/menu";

export default function HomeScreen() {
  const theme = useTheme();
  const headphone = useSelector((state) => state.headphones);

  return (
    <AppScreenTemplate
      additionalStyles={{
        justifyContent: "space-between",
      }}
    >
      <HeadphoneCard name={headphone.name} pic={headphone.pic} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginBottom: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
            gap: 20,
          }}
        >
          <BatteryTile />
          <ANCTile />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
            gap: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              width: 170,
              justifyContent: "space-between",
            }}
          >
            <IconButton name={"magnify"} size={46} />
            <IconButton name={"link-variant"} size={46} />
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              width: 170,
              justifyContent: "space-between",
            }}
          >
            <IconButton name={"magnify"} size={46} />
            <IconButton name={"link-variant"} size={46} />
          </View>
        </View>
      </View>
      <Portal>
        <Menu />
      </Portal>
    </AppScreenTemplate>
  );
}
