/* eslint-disable no-unused-vars */
import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "./Text";

const LoginHeader = () => {
  return (
    <View style={styles.loginHeader}>
      <Text bold heading style={{ color: "#169443" }}>
        SpotWave
      </Text>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  loginHeader: {
    position: "absolute",
    top: 0,
    width: "100%",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#131314",
  },
});
