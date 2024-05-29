import LoginButton from "../../components/loginButton";
import LoginScreenTemplate from "./template";
import { TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  tryLogin,
  setUserPassword,
  setUserFirstName,
  setUserLastName,
  trySignUp,
} from "../../redux/reducers/login";

export default function SignupScreen(props) {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const signUp = () => {
    dispatch(setUserPassword(password));
    dispatch(setUserFirstName(firstName));
    dispatch(setUserLastName(lastName));

    dispatch(trySignUp());
  };

  return (
    <LoginScreenTemplate
      header={"Finish signing up"}
      icon={"account-multiple-plus"}
      text={"Your email wasn't found in the database. Please, input the form"}
      secondaryButton={
        <LoginButton mode={"text"} onPress={() => props.navigation.goBack()}>
          Go back
        </LoginButton>
      }
      primaryButton={
        <LoginButton
          mode={"contained"}
          onPress={() => {
            signUp();
          }}
        >
          Sign up
        </LoginButton>
      }
    >
      <TextInput
        style={{
          marginTop: 35,
        }}
        mode={"outlined"}
        label={"First Name"}
        autoCapitalize={"words"}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={{
          marginTop: 5,
        }}
        mode={"outlined"}
        label={"Last Name"}
        autoCapitalize={"words"}
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={{
          marginTop: 5,
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
