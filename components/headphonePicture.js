import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

import { useTheme } from "react-native-paper";
import Shape from "./shape";
import { useEffect, useState } from "react";

export default function HeadphoneCard(props) {
  const theme = useTheme();

  return (
    <HeadphoneWrapper>
      <ImageStack>
        <Image
          style={{
            zIndex: 99,
            position: "absolute",
          }}
          source={require("../assets/headphones.png")}
        />
        <Shape color={theme.colors.primaryContainer} />
      </ImageStack>
      <Text
        style={{
          color: theme.colors.onBackground,
          fontSize: 32,
          fontFamily: "GSans-Regular",
          marginTop: 16,
        }}
      >
        {props.name}
      </Text>
    </HeadphoneWrapper>
  );
}

const HeadphoneWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ImageStack = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
