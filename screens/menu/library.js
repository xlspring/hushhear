import { View, Text, ScrollView } from "react-native";
import AppScreenTemplate from "../template";
import { useTheme } from "react-native-paper";
import LibraryItem from "../../components/libraryItem";
import image from "../../assets/pfp.jpg";

export default function LibraryScreen() {
  const theme = useTheme();
  const image = require("../../assets/pfp.jpg");
  return (
    <AppScreenTemplate
      back
      additionalStyles={{
        width: "100%",
        marginTop: 10,
      }}
    >
      <Text
        style={{
          color: theme.colors.onBackground,
          fontSize: 32,
          fontFamily: "GSans-Bold",
          marginVertical: 30,
        }}
      >
        Sounds library
      </Text>
      <ScrollView
        style={{
          marginBottom: 35,
        }}
      >
        <LibraryItem image={image} text={"Hello"} />
        <LibraryItem
          image={require("../../assets/noises/politician.jpg")}
          text={"Politicians pack"}
        />
        <LibraryItem
          image={require("../../assets/noises/insect.jpg")}
          text={"Insects pack"}
        />
        <LibraryItem
          image={require("../../assets/noises/snoring.jpg")}
          text={"Snoring"}
        />
        <LibraryItem
          image={require("../../assets/noises/keyboard.jpg")}
          text={"Keyboard sounds"}
        />
      </ScrollView>
    </AppScreenTemplate>
  );
}
