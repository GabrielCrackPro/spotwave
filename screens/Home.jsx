/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import Player from "../components/Player";
import MiniCard from "../components/MiniCard";
import Chip from "../components/Chip";
import Text from "../components/Text";
import sampleData from "../data/sampleData";
import { AppContext } from "../AppContext";

const Home = () => {
  const { userPlaylists, setUserPlaylists, accessToken } =
    useContext(AppContext);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        await setUserPlaylists(data.items);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlaylists();
  }, []);

  return (
    <View style={styles.home}>
      <StatusBar style="auto" />
      <Header screen="Home" />
      <View style={styles.chips}>
        <FlatList
          horizontal
          data={sampleData.Home.chips}
          renderItem={({ item }) => {
            return <Chip title={item} variant="dark" key={item} />;
          }}
        />
      </View>
      <View style={styles.miniCardsContainer}>
        <FlatList
          style={styles.miniCards}
          data={userPlaylists && userPlaylists.splice(0, 6)}
          keyExtractor={(item) => item.id}
          numColumns={2}
          numRows={3}
          renderItem={({ item }) => (
            <View style={styles.miniCardWrapper}>
              <MiniCard title={item.name} thumbnail={item.images[0].url} />
            </View>
          )}
        />
      </View>
      <View style={styles.recommendations}>
        <MaterialCommunityIcons name="playlist-music" size={24} color="#fff" />
        <Text>Recommendations go here</Text>
      </View>
      <Player />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  chips: {
    flexDirection: "row",
  },
  miniCardsContainer: {
    height: 320,
    borderBottomWidth: 1,
    borderBottomColor: "#131314",
  },
  miniCards: {
    padding: 10,
  },
  recommendations: {
    alignItems: "center",
    justifyContent: "center",
  },
});
