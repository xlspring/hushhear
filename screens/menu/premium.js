import { View, Text, Image } from "react-native";
import AppScreenTemplate from "../template";
import { Button, Snackbar, useTheme } from "react-native-paper";
import pfp from "../../assets/pfp.jpg";
import { useState } from "react";

export default function PremiumScreen() {
  const theme = useTheme();
  const premiumGraphic = require("../../assets/pfp.jpg");

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const displaySnackbar = () => {
    setSnackbarVisible(true);

    setTimeout(() => setSnackbarVisible(false), 2000);
  };
  return (
    <AppScreenTemplate back>
      <Image
        source={premiumGraphic}
        style={{
          width: 200,
          height: 200,
          borderRadius: 30,
          marginVertical: 80,
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          fontSize: 32,
          fontFamily: "GSans-Bold",
          color: theme.colors.onBackground,
          textAlign: "center",
        }}
      >
        Get the best...{"\n"} and even more!
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "GSans-Regular",
          color: theme.colors.onBackground,
          marginTop: 40,
        }}
      >
        - Unlimited filtering time{"\n"}- Block more sounds simultaneously{"\n"}
        - Help the developers to pay the bills
      </Text>
      <Button
        mode={"contained"}
        style={{ marginTop: 100 }}
        onPress={displaySnackbar}
      >
        Start the subscription
      </Button>
      <Snackbar
        visible={snackbarVisible}
        style={{ position: "absolute", left: -25, bottom: 20 }}
        onDismiss={() => console.log("+1 sub")}
      >
        Hurray!
      </Snackbar>
    </AppScreenTemplate>
  );
}
