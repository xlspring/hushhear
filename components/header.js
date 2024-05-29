import { View, Text } from "react-native";
import styled from "styled-components/native";
import {
  Avatar,
  IconButton,
  TouchableRipple,
  useTheme,
} from "react-native-paper";
import { useDispatch } from "react-redux";
import { toggleDeviceModal, toggleMenu } from "../redux/reducers/menu";
import { useNavigation } from "@react-navigation/native";

export default function Header(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      {props.back ? (
        <IconButton
          icon={"arrow-left"}
          size={36}
          style={{
            marginHorizontal: 0,
            marginVertical: 0,
            height: 52,
            width: 52,
          }}
          onPress={() => navigation.goBack()}
        />
      ) : (
        <IconButton
          icon={"plus"}
          size={36}
          style={{
            marginHorizontal: 0,
            marginVertical: 0,
            height: 52,
            width: 52,
          }}
          onPress={() => dispatch(toggleDeviceModal(true))}
        />
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TitleText
          style={{
            fontFamily: "GSans-Bold",
            color: theme.colors.onBackground,
          }}
        >
          HUSH
        </TitleText>
        <TitleText
          style={{
            fontFamily: "GSans-Bold",
            color: theme.colors.primary,
          }}
        >
          HEAR
        </TitleText>
      </View>
      <TouchableRipple onPress={() => dispatch(toggleMenu(true))}>
        <Avatar.Icon size={52} icon={"account"} />
      </TouchableRipple>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TitleText = styled(Text)`
  font-size: 24px;
`;
