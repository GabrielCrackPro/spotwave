/* eslint-disable no-unused-vars */
import { FlatList, StyleSheet, View } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Track from "../components/Track";
import Player from "../components/Player";
import { AppContext } from "../AppContext";

const Playlist = ({ route }) => {
  const { playlistId, playlistName } = route.params;
  const { accessToken } = useContext(AppContext);

  const [playlistTracks, setPlaylistTracks] = useState([]);
  useEffect(() => {
    const getPlaylistTracks = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        setPlaylistTracks(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getPlaylistTracks();
  }, [playlistId]);
  return (
    <View>
      <Header screen="Other" title={playlistName} />
      <FlatList
        data={playlistTracks}
        keyExtractor={(item) => item.track.album.id}
        renderItem={({ item }) => {
          console.log(item.track);
          return <Track track={item.track} />;
        }}
      />
      <Player />
    </View>
  );
};

export default Playlist;

const styles = StyleSheet.create({});
