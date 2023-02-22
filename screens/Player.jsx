/* eslint-disable no-unused-vars */
// TODO: Add press events and functions to all buttons

import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Text from "../components/Text";
import Button from "../components/Button";
import Chip from "../components/Chip";
import SongPlaceholder from "../assets/song-placeholder.png";
import { useNavigation } from "@react-navigation/native";

const Player = ({ route }) => {
  const [isPlayPressed, setIsPlayPressed] = useState(false);
  const [isNextPressed, setIsNextPressed] = useState(false);
  const [isPrevPressed, setIsPrevPressed] = useState(false);
  const [isLikePressed, setIsLikePressed] = useState(false);
  const [isSharePressed, setIsSharePressed] = useState(false);
  const [isMenuPressed, setIsMenuPressed] = useState(false);

  const [playerActive, setPlayerActive] = useState(false);

  const navigation = useNavigation();
  const { song } = route.params;

  const handlePressIn = (callback) => callback(true);
  const handlePressOut = (callback) => callback(false);

  const handlePlayerActive = () => setPlayerActive((prev) => !prev);

  const playButtonStyles = [styles.playerButton, styles.playPauseButton];
  const prevButtonStyles = [styles.playerButton, styles.prevButton];
  const nextButtonStyles = [styles.playerButton, styles.nextButton];
  const likeButtonStyles = [styles.playerButton, styles.likeButton];
  const shareButtonStyles = [styles.playerButton, styles.shareButton];
  const menuButtonStyles = [styles.playerButton, styles.menuButton];

  isPlayPressed && playButtonStyles.push(styles.buttonPressed);
  isNextPressed && nextButtonStyles.push(styles.buttonPressed);
  isPrevPressed && prevButtonStyles.push(styles.buttonPressed);
  isLikePressed && likeButtonStyles.push(styles.buttonPressed);
  isSharePressed && shareButtonStyles.push(styles.buttonPressed);
  isMenuPressed && menuButtonStyles.push(styles.buttonPressed);

  return (
    <View style={styles.player}>
      <View style={styles.playerHeader}>
        <View style={styles.playerHeaderButtons}>
          <Button onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-down" size={30} color="#fff" />
          </Button>
          <Button>
            <Feather name="speaker" size={30} color="#fff" />
          </Button>
        </View>
      </View>
      <View style={styles.sections}>
        <Chip variant="light" title="Playing" />
        <Chip variant="dark" title="Lyrics" />
      </View>
      <View style={styles.controls}>
        <View style={styles.songInfo}>
          <Image
            source={song.image || SongPlaceholder}
            style={styles.songImage}
          />
          <View style={{ flexDirection: "column" }}>
            <Text subHeading bold style={styles.songTitle}>
              {song.title}
            </Text>
            <Text style={styles.songArtist}>{song.artist}</Text>
          </View>
        </View>
        <View style={styles.progress}>
          <Text>Progress</Text>
        </View>
        <View style={styles.playerButtons}>
          <Button
            style={playButtonStyles}
            onPressIn={() => handlePressIn(setIsPlayPressed)}
            onPressOut={() => handlePressOut(setIsPlayPressed)}
            onPress={handlePlayerActive}
          >
            <FontAwesome
              name={playerActive ? "pause" : "play"}
              size={24}
              color="#000"
            />
          </Button>
          <Button
            style={prevButtonStyles}
            onPressIn={() => handlePressIn(setIsPrevPressed)}
            onPressOut={() => handlePressOut(setIsPrevPressed)}
          >
            <Feather name="skip-back" size={24} color="#fff" />
          </Button>
          <Button
            style={[nextButtonStyles, { marginRight: 30 }]}
            onPressIn={() => handlePressIn(setIsNextPressed)}
            onPressOut={() => handlePressOut(setIsNextPressed)}
          >
            <Feather name="skip-forward" size={24} color="#fff" />
          </Button>
          <Button
            style={likeButtonStyles}
            onPressIn={() => handlePressIn(setIsLikePressed)}
            onPressOut={() => handlePressOut(setIsLikePressed)}
          >
            <MaterialCommunityIcons
              name={song.liked ? "cards-heart" : "cards-heart-outline"}
              size={24}
              color="#fff"
            />
          </Button>
          <Button
            style={shareButtonStyles}
            onPressIn={() => handlePressIn(setIsSharePressed)}
            onPressOut={() => handlePressOut(setIsSharePressed)}
          >
            <MaterialCommunityIcons name="share" size={24} color="#fff" />
          </Button>
          <Button
            style={menuButtonStyles}
            onPressIn={() => handlePressIn(setIsMenuPressed)}
            onPressOut={() => handlePressOut(setIsMenuPressed)}
          >
            <MaterialCommunityIcons name="menu" size={24} color="#fff" />
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  player: {
    flex: 1,
    marginBottom: 10,
  },
  playerHeader: {
    marginTop: 30,
    padding: 5,
  },
  playerHeaderButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sections: {
    flexDirection: "row",
  },
  controls: {
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    padding: 30,
  },
  songInfo: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 10,
  },
  songImage: {
    borderRadius: 10,
    marginBottom: 30,
    marginRight: 30,
    transform: [{ scale: 2 }],
  },
  progress: {
    justifyContent: "center",
    alignItems: "center",
  },
  playerButtons: {
    flexDirection: "row",
  },
  playerButton: {
    borderRadius: 50,
    marginRight: 20,
    padding: 10,
  },
  playPauseButton: {
    backgroundColor: "#fff",
  },
  nextButton: {
    borderColor: "#fff",
    borderWidth: 1,
  },
  prevButton: {
    borderColor: "#fff",
    borderWidth: 1,
  },
  likeButton: {
    borderColor: "#fff",
    borderWidth: 1,
  },
  shareButton: {
    borderColor: "#fff",
    borderWidth: 1,
  },
  menuButton: {
    borderColor: "#fff",
    borderWidth: 1,
  },
  buttonPressed: {
    backgroundColor: "#169433",
  },
});
