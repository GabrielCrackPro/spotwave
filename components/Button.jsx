/* eslint-disable no-unused-vars */
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Text from "./Text";

const Button = ({ children, onPress, onPressIn, onPressOut, style }) => {
  const buttonStyles = [styles.button];
  style && buttonStyles.push(style);
  return (
    <TouchableOpacity onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} style={buttonStyles}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10
  }
});
