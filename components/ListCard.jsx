/* eslint-disable no-unused-vars */
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Text from "./Text";
import SongPlaceholder from "../assets/song-placeholder.png";

const ListCard = ({ item, image }) => {
  return (
    <TouchableOpacity>
      <View style={styles.listCard}>
        <Image source={{ uri: image } || SongPlaceholder} style={styles.listCardImage} />
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
    borderColor: "#131314"
  },
  listCardImage: {
    height: 70,
    width: 70
  },
  listCardButton: {
    justifyContent: "space-around"
  }
});
