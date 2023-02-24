/* eslint-disable no-unused-vars */
import { ImageBackground, StyleSheet, View } from "react-native";
import Text from "./Text";
import Button from "./Button";
import React from "react";
import SongPlaceholder from "../assets/song-placeholder.png";

const GenreCard = ({ uri, imageUri, onPress }) => {
  return (
    <ImageBackground
      source={{ uri: imageUri } || SongPlaceholder}
      resizeMode="cover"
    >
      <Button onPress={onPress}>
        <View style={styles.genreCard}></View>
      </Button>
    </ImageBackground>
  );
};

export default GenreCard;

const styles = StyleSheet.create({
  genreCard: {
    padding: 10,
    width: 150,
    height: 140,
  },
});
