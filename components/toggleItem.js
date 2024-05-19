import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch, useTheme } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ToggleItem(props) {
  const theme = useTheme();
  const [switchState, setSwitchState] = useState(false);
  const flipSwitch = () => setSwitchState(!switchState);

  return (
    <View
      style={[
        styles.container,
        props.style,
        { backgroundColor: theme.colors.secondaryContainer },
      ]}
    >
      <View style={styles.content}>
        {props.icon && (
          <MaterialCommunityIcons
            name={props.icon}
            size={30}
            color={theme.colors.onSecondaryContainer}
            style={styles.icon}
          />
        )}
        <Text
          style={[styles.text, { color: theme.colors.onSecondaryContainer }]}
        >
          {props.text}
        </Text>
      </View>
      <Switch
        value={switchState}
        onValueChange={flipSwitch}
        style={styles.switch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    paddingVertical: 41,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontFamily: "GSans-Regular",
    fontSize: 24,
  },
  switch: {
    marginRight: 20,
  },
});
