/* eslint-disable no-unused-vars */
import { StyleSheet } from "react-native";
import React from "react";
import Text from "./Text";
import Button from "./Button";

const Chip = ({ title, variant, onPress }) => {
  const chipStyles = [styles.chip];
  variant &&
    (variant == "dark" && chipStyles.push(styles.dark) || variant == "light" && chipStyles.push(styles.light));
  return (
    <Button style={chipStyles} onPress={onPress}>
      <Text bold style={variant == "light" && styles.darkText || variant == "dark" && styles.lightText}>{title}</Text>
    </Button>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    margin: 5,
    padding: 5,
    borderRadius: 100
  },
  light: {
    backgroundColor: "#fff",
  },
  dark: {
    backgroundColor: "#131314",
    borderWidth: 1,
    borderColor: "#fff"
  },
  lightText: {
    color: "#fff"
  },
  darkText: {
    color: "#000"
  }
});
