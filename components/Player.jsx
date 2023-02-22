/* eslint-disable no-unused-vars */
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import Text from "./Text";
import Button from "./Button";
import SongPlaceholder from "../assets/song-placeholder.png";
import { useNavigation } from "@react-navigation/native";

const Player = () => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  // TODO: See how to extract song data from Spotify API
  const [song, setSong] = useState({ title: "song", artist: "artist", progress: 0, image: "", liked: false });

  const handlePlayerPress = () => {
    navigation.navigate("Player", { song });
  };
  return (
    <View style={styles.player}>
      <TouchableOpacity onPress={handlePlayerPress} style={{ flexDirection: "row" }}>
        <View style={styles.left}>
          <Image source={song.image || SongPlaceholder} style={styles.songImage} />
          <Text>{song.title}</Text>
        </View>
        <View style={styles.right}>
          <Button>
            <MaterialCommunityIcons name={song.liked ? "cards-heart" : "cards-heart-outline"} size={20} color="#fff" />
          </Button>
          <Button>
            <MaterialCommunityIcons name={isPlaying ? "pause" : "play"} size={30} color="#fff" />
          </Button>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  player: {
    flexDirection: "row",
    padding: 25,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#131314",
    borderBottomColor: "#169443",
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  left: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  right: {
    padding: 15,
    width: "49%",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 10
  }
});
