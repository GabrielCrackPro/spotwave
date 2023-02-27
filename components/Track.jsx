/* eslint-disable no-unused-vars */
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import Text from "./Text";
import Button from "./Button";
import { AppContext } from "../AppContext";

const Track = ({ track }) => {
  const { accessToken } = useContext(AppContext);
  const trackData = {
    name: track.name,
    image: track.album.images[0].url,
    artists: track.album.artists,
  };
  const handleTrackPlay = async (trackUri) => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({ uri: track.preview_url });
      await soundObject.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity onPress={handleTrackPlay} style={styles.track}>
      <Image source={{ uri: trackData.image }} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.infoLeft}>
          <Text bold>{trackData.name}</Text>
          <Text>
            {trackData.artists.map((artist) => artist.name).join(", ")}
          </Text>
        </View>
        <View style={styles.infoRight}>
          <Button>
            <MaterialCommunityIcons
              name="heart-outline"
              color="#fff"
              size={24}
            />
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Track;

const styles = StyleSheet.create({
  track: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#131314",
  },
  image: {
    height: 50,
    width: 50,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  infoLeft: {
    marginLeft: 10,
  },
  infoRight: {
    alignItems: "center",
  },
});
