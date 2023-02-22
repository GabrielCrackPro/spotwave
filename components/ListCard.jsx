/* eslint-disable no-unused-vars */
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Text from "./Text";

const ListCard = ({ item, image, imageStyle }) => {
  const imageStyles = [styles.listCardImage];
  imageStyle &&
    imageStyle == "round" &&
    imageStyles.push(styles.listCardImageRound);
  return (
    <TouchableOpacity>
      <View style={styles.listCard}>
        <Image source={{ uri: image }} style={imageStyles} />
        <Text subHeading>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  listCard: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderColor: "#131314",
  },
  listCardImage: {
    height: 70,
    width: 70,
  },
  listCardImageRound: {
    borderRadius: 100,
  },
  listCardButton: {
    justifyContent: "space-around",
  },
});
