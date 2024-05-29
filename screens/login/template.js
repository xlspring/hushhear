import { View, Text, KeyboardAvoidingView } from "react-native";
import { useTheme } from "react-native-paper";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";

export default function LoginScreenTemplate(props) {
  const theme = useTheme();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 100,
        backgroundColor: theme.colors.background,
      }}
    >
      <MaterialCommunityIcon
        name={props.icon}
        size={100}
        direction={"ltr"}
        color={theme.colors.primary}
      />
      <Text
        style={{
          fontFamily: "GSans-Bold",
          fontSize: 48,
          color: theme.colors.onBackground,
          marginVertical: 20,
          flexWrap: "wrap",
        }}
      >
        {props.header}
      </Text>
      <Text
        style={{
          fontFamily: "GSans-Regular",
          fontSize: 18,
          width: "100%",
          flexWrap: "wrap",
          color: theme.colors.onBackground,
        }}
      >
        {props.text}
      </Text>
      <KeyboardAvoidingView
        behavior={"position"}
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        {props.children}
      </KeyboardAvoidingView>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 15,
          padding: 15,
          borderTopColor: theme.colors.outline,
          borderTopWidth: 0.5,
          marginTop: "auto",
          marginBottom: 10,
          height: 120,
        }}
      >
        {props.secondaryButton}
        {props.primaryButton}
      </View>
    </View>
  );
}
