import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { ProgressBar, TouchableRipple, useTheme } from "react-native-paper";
import { toggleDeviceModal } from "../../redux/reducers/menu";

export default function DeviceModal() {
  const dispatch = useDispatch();
  const theme = useTheme();

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "75%"], []);

  // callbacks
  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    index === -1 ? dispatch(toggleDeviceModal(false)) : console.log("oof");
  }, []);

  // renders
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            handleStyle={{
              backgroundColor: theme.colors.secondaryContainer,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            handleIndicatorStyle={{
              backgroundColor: theme.colors.onSecondaryContainer,
            }}
          >
            <BottomSheetView
              style={[
                styles.contentContainer,
                {
                  backgroundColor: theme.colors.secondaryContainer,
                },
              ]}
            >
              <View
                style={{
                  width: "100%",
                  height: 5,
                }}
              >
                <ProgressBar
                  indeterminate={true}
                  color={theme.colors.primary}
                />
              </View>
              <Text
                style={{
                  color: theme.colors.onSecondaryContainer,
                  fontFamily: "GSans-Regular",
                  fontSize: 36,
                  alignSelf: "flex-start",
                  marginLeft: 15,
                  marginTop: 15,
                  marginBottom: 30,
                }}
              >
                Found devices
              </Text>
              <TouchableRipple
                style={{ width: "100%" }}
                onPress={() => console.log("yeah")}
              >
                <View
                  style={[
                    styles.optionContainer,
                    {
                      backgroundColor: theme.colors.background,
                    },
                  ]}
                >
                  <Image
                    source={require("../../assets/headphones/1.png")}
                    style={styles.img}
                  />
                  <Text
                    style={[{ color: theme.colors.onBackground }, styles.text]}
                  >
                    HushHear Pro
                  </Text>
                </View>
              </TouchableRipple>
              <TouchableRipple
                style={{ width: "100%" }}
                onPress={() => console.log("yeah")}
              >
                <View
                  style={[
                    styles.optionContainer,
                    {
                      backgroundColor: theme.colors.background,
                    },
                  ]}
                >
                  <Image
                    source={require("../../assets/headphones/2.png")}
                    style={styles.img}
                  />
                  <Text
                    style={[{ color: theme.colors.onBackground }, styles.text]}
                  >
                    HushHear Flex
                  </Text>
                </View>
              </TouchableRipple>
              <TouchableRipple
                style={{ width: "100%" }}
                onPress={() => console.log("yeah")}
              >
                <View
                  style={[
                    styles.optionContainer,
                    {
                      backgroundColor: theme.colors.background,
                    },
                  ]}
                >
                  <Image
                    source={require("../../assets/headphones/3.png")}
                    style={styles.img}
                  />
                  <Text
                    style={[{ color: theme.colors.onBackground }, styles.text]}
                  >
                    HushHear Lite
                  </Text>
                </View>
              </TouchableRipple>
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    height: 80,
    width: 80,
    margin: 15,
  },
  optionContainer: {
    marginHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderRadius: 15,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: "GSans-Regular",
  },
});
