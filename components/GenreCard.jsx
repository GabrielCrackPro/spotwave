/* eslint-disable no-unused-vars */
import { ImageBackground, StyleSheet, View } from "react-native";
import Text from "./Text";
import Button from "./Button";
import React from "react";
import SongPlaceholder from "../assets/song-placeholder.png";

const GenreCard = ({ name, imageUri, onPress, style }) => {
  const genreCardStyles = [styles.genreCard];
  style && genreCardStyles.push(style);
  return (
    <ImageBackground
      source={{ uri: imageUri } || SongPlaceholder}
      resizeMode="cover"
      style={styles.image}
    >
      <Button onPress={onPress}>
        <View style={genreCardStyles}>
          <Text bold center>
            {name}
          </Text>
        </View>
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
  image: {
    marginTop: 10,
  },
});
