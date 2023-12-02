import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../core/theme";

type Props = {
  children: React.ReactNode;
};

const BaseboardText = ({ children }: Props) => (
  <Text style={styles.text}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 20,
    color: theme.colors.outline,
    textAlign: "center",
    marginBottom: 5,
    verticalAlign: "bottom",
    position: 'absolute',
    bottom: "2%",
    textDecorationStyle: 'solid'
  }
});

export default memo(BaseboardText);
