import { View, Text } from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";
import LoginScreenTemplate from "./template";
import LoginButton from "../../components/loginButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setGlobalIp } from "../../redux/reducers/connection";

export default function ServerScreen(props) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [ip, setIp] = useState("");
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  const ipRegex = new RegExp(
    /(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/gm,
  );

  useEffect(() => {
    checkIp(ip);
  }, [ip]);

  const checkIp = (ip, targetPort) => {
    if (ipRegex.test(ip)) {
      const url = `http://${ip}:${targetPort || 3535}/`;
      axios
        .get(url, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((res) => {
          if (res.data.app === "hushhear") {
            console.log("yuh");
            pushIp(ip);
          } else {
            console.log("didnt enable");
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  const pushIp = (ip) => {
    dispatch(setGlobalIp(ip));
    setIsNextEnabled(true);
  };

  return (
    <LoginScreenTemplate
      header={"Input the server address"}
      icon={"web"}
      text={"Input your server's IP address below"}
      secondaryButton={
        <LoginButton mode={"text"} onPress={() => props.navigation.goBack()}>
          Back
        </LoginButton>
      }
      primaryButton={
        <LoginButton
          mode={"contained"}
          disabled={!isNextEnabled}
          onPress={() => props.navigation.navigate("EmailScreen")}
        >
          Next
        </LoginButton>
      }
    >
      <TextInput
        style={{
          marginTop: 35,
        }}
        mode={"outlined"}
        label={"IP address"}
        value={ip}
        onChangeText={(text) => setIp(text)}
      />
    </LoginScreenTemplate>
  );
}
