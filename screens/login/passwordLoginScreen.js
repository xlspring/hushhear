import LoginButton from "../../components/loginButton";
import LoginScreenTemplate from "./template";
import { TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { tryLogin, setUserPassword } from "../../redux/reducers/login";

export default function PasswordLoginScreen(props) {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(setUserPassword(password));
  }, [password]);

  return (
    <LoginScreenTemplate
      header={"Input your password"}
      icon={"asterisk"}
      text={
        "Your email was found in the database. To finish logging in, please, input your password in the form"
      }
      secondaryButton={
        <LoginButton mode={"text"} onPress={() => props.navigation.goBack()}>
          Go back
        </LoginButton>
      }
      primaryButton={
        <LoginButton
          mode={"contained"}
          onPress={() => {
            console.log("Dispatch try login...");
            dispatch(tryLogin());
          }}
        >
          Log in
        </LoginButton>
      }
    >
      <TextInput
        style={{
          marginTop: 35,
        }}
        mode={"outlined"}
        label={"Password"}
        autoCapitalize={"none"}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
    </LoginScreenTemplate>
  );
}
