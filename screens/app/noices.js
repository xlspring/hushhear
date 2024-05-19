import { View, Text, ScrollView } from "react-native";
import AppScreenTemplate from "./template";
import { useTheme } from "react-native-paper";
import ToggleItem from "../../components/toggleItem";

export default function NoicesScreen() {
  const theme = useTheme();

  return (
    <AppScreenTemplate>
      <ToggleItem
        text={"Filter noise"}
        style={{
          marginVertical: 15,
        }}
      />
      <ScrollView
        style={{
          borderRadius: 30,
        }}
      >
        <ToggleItem
          text={"Alien noise"}
          icon={"alien-outline"}
          style={{
            marginVertical: 5,
          }}
        />
        <ToggleItem
          text={"Traffic"}
          icon={"car"}
          style={{
            marginVertical: 5,
          }}
        />
        <ToggleItem
          text={"Birds (i saw it)"}
          icon={"bird"}
          style={{
            marginVertical: 5,
          }}
        />
        <ToggleItem
          text={"Anti-sigma"}
          icon={"sigma"}
          style={{
            marginVertical: 5,
          }}
        />
        <ToggleItem
          text={"Water"}
          icon={"water"}
          style={{
            marginVertical: 5,
          }}
        />
        <ToggleItem
          text={"Screech"}
          icon={"bat"}
          style={{
            marginVertical: 5,
          }}
        />
      </ScrollView>
    </AppScreenTemplate>
  );
}
