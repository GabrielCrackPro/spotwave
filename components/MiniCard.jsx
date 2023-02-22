/* eslint-disable no-unused-vars */
import { StyleSheet, Image } from "react-native";
import React from "react";
import Text from "./Text";
import CardPlaceholder from "../assets/song-placeholder.png";
import Button from "./Button";

const MiniCard = ({ thumbnail, title }) => {
  return (
    <Button style={styles.miniCard}>
      <Image
        source={{ uri: thumbnail } || CardPlaceholder}
        style={styles.thumbnail}
      />
      <Text bold>{title}</Text>
    </Button>
  );
};

export default MiniCard;

const styles = StyleSheet.create({
  miniCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    height: 60,
    width: 60,
  },
});
