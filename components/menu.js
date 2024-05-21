import { View, Text } from "react-native";
import { Avatar, Modal, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/reducers/menu";
import { Line } from "react-native-svg";
import MenuItem from "./menuItem";
import { useNavigation } from "@react-navigation/native";
import { setLogin } from "../redux/reducers/login";

export default function Menu(props) {
  const visible = useSelector((state) => state.menu.visible);
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigation = props.navigation;

  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
      }}
      contentContainerStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",

        borderRadius: 30,
        width: 370,
        height: 400,

        backgroundColor: theme.colors.secondaryContainer,
      }}
      visible={visible}
      onDismiss={() => dispatch(toggleMenu(false))}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 16,
          marginVertical: 24,
        }}
      >
        <Avatar.Icon icon={"account"} size={52} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "GSans-Bold",
              fontSize: 20,
              color: theme.colors.onSecondaryContainer,
            }}
          >
            Owuwuwueuwey Uwuerwor
          </Text>
          <Text
            style={{
              fontFamily: "GSans-Regular",
              fontSize: 16,
              color: theme.colors.onSecondaryContainer,
            }}
          >
            OwuwuwueuweyUwuerwor@help.me
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: theme.colors.tertiary,
          height: 1,
          width: 320,
        }}
      />
      <View
        style={{
          width: "100%",
          paddingHorizontal: 24,
        }}
      >
        <MenuItem
          icon={"account-multiple"}
          text={"Switch account"}
          onPress={() => {
            dispatch(setLogin(false));
          }}
        />
        <MenuItem
          icon={"music-box-multiple"}
          text={"Sound library"}
          onPress={() => {
            navigation.navigate("menuScreens", { screen: "library" });
            dispatch(toggleMenu(false));
          }}
        />
        <MenuItem
          icon={"crown-circle"}
          text={"HushHear+"}
          onPress={() => {
            navigation.navigate("menuScreens", { screen: "premium" });
            dispatch(toggleMenu(false));
          }}
        />
        <MenuItem
          icon={"information"}
          text={"About"}
          onPress={() => {
            navigation.navigate("menuScreens", { screen: "about" });
            dispatch(toggleMenu(false));
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: "GSans-Regular",
          fontSize: 14,
          color: theme.colors.onSecondaryContainer,
          marginTop: 8,
          textAlign: "center",
          opacity: 0.5,
        }}
      >
        Help • FAQ • Privacy Policy • © yes inc. 2023
      </Text>
    </Modal>
  );
}
