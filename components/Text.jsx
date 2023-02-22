/* eslint-disable no-unused-vars */
import { StyleSheet, Text as RNText } from "react-native";
import React from "react";

const Text = ({ children, heading, subHeading, bold, center, style }) => {
  const textStyles = [styles.text];
  heading && textStyles.push(styles.heading);
  subHeading && textStyles.push(styles.subHeading);
  bold && textStyles.push(styles.bold);
  center && textStyles.push(styles.center);
  style && textStyles.push(style);

  return <RNText style={textStyles}>{children}</RNText>;
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  heading: {
    fontSize: 24,
  },
  subHeading: {
    fontSize: 18,
  },
  bold: {
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
});
