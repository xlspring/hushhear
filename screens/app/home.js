import { View } from "react-native";
import { Portal, useTheme } from "react-native-paper";
import AppScreenTemplate from "../template";
import HeadphoneCard from "../../components/headphonePicture";
import { useSelector } from "react-redux";
import IconButton from "../../components/iconButton";
import BatteryTile from "../../components/batteryTile";
import ANCTile from "../../components/ANCTile";
import Menu from "../../components/menu";
import IntensitySlider from "../../components/intensitySlider";
import DeviceModal from "./deviceModal";

export default function HomeScreen(props) {
  const theme = useTheme();
  const headphone = useSelector((state) => state.headphones);
  const deviceModalVisible = useSelector(
    (state) => state.menu.deviceModalVisible,
  );

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
            <IconButton name={"magnify"} secondName={"stop"} size={46} />
            <IconButton name={"link-variant"} secondName={"lock"} size={46} />
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
            <IntensitySlider />
          </View>
        </View>
      </View>
      <Portal>
        <Menu navigation={props.navigation} />
        {deviceModalVisible ? <DeviceModal /> : null}
      </Portal>
    </AppScreenTemplate>
  );
}
