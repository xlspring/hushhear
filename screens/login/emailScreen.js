import { View, Text } from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";
import LoginScreenTemplate from "./template";
import LoginButton from "../../components/loginButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail } from "../../redux/reducers/login";

export default function EmailScreen(props) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const ip = useSelector((state) => state.connection.ip);

  const [email, setEmail] = useState("");
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const [nextScreen, setNextScreen] = useState("");

  const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

  useEffect(() => {
    checkEmail();
  }, [email]);

  const checkEmail = () => {
    console.log("email check");
    if (emailRegex.test(email)) {
      console.log("Email success");
      dispatch(setUserEmail(email));
      axios
        .get(`http://${ip}:3535/check-account?email=${email}`)
        .then((res) => {
          res.status === 200
            ? setNextScreen("PasswordLoginScreen")
            : setNextScreen("SignupScreen");
        })
        .then(() => {
          setIsNextEnabled(true);
        });
    }
  };

  return (
    <LoginScreenTemplate
      header={"Enter your email"}
      icon={"email"}
      text={
        "We need to know your email to continue. Please, enter it in the box below. Don't worry - we won't spam"
      }
      secondaryButton={
        <LoginButton mode={"text"} onPress={() => props.navigation.goBack()}>
          Back
        </LoginButton>
      }
      primaryButton={
        <LoginButton
          mode={"contained"}
          disabled={!isNextEnabled}
          onPress={() => {
            console.log(nextScreen);
            props.navigation.navigate(nextScreen);
          }}
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
        label={"Email address"}
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
    </LoginScreenTemplate>
  );
}
