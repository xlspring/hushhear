import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/reducers/login";

export default function AccountChooserScreen({ navigation }) {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(setLogin(true));
  };

  return (
    <View>
      <Text>There you will choose an account</Text>
      <Button onPress={login}>LOG IN</Button>
    </View>
  );
}
