import { View, Text } from "react-native";
import AppScreenTemplate from "../template";
import { useTheme } from "react-native-paper";
import LibraryItem from "../../components/libraryItem";

export default function LibraryScreen() {
  const theme = useTheme();
  const image = require("../../assets/pfp.jpg");
  return (
    <AppScreenTemplate back>
      <LibraryItem image={image} text={"dummy text"} />
    </AppScreenTemplate>
  );
}
