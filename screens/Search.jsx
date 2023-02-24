/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Text from "../components/Text";
import Header from "../components/Header";
import Player from "../components/Player";
import SearchBar from "../components/SearchBar";
import GenreCard from "../components/GenreCard";
import { AppContext } from "../AppContext";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();

  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const { accessToken } = useContext(AppContext);

  useEffect(() => {
    const getFeaturedPlaylists = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/browse/featured-playlists",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        setFeaturedPlaylists(data.playlists.items);
      } catch (error) {
        console.log(error);
      }
    };
    getFeaturedPlaylists();
  }, []);

  const handleSelectGenre = (name) => {
    console.log(`Selected: ${name}`);
    navigation.navigate("Playlists", { name });
    // TODO: Create playlists screen
  };
  return (
    <View style={styles.search}>
      <Header screen="Search" />
      <SearchBar variant="light" />
      <View style={styles.explore}>
        <Text subHeading bold center>
          Explore
        </Text>
        <FlatList
          data={featuredPlaylists}
          numColumns={2}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <View style={{ padding: 5 }}>
                <GenreCard
                  name={item.name}
                  imageUri={item.images[0].url}
                  onPress={() => handleSelectGenre(item.name)}
                />
              </View>
            );
          }}
        />
      </View>
      <Player />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flex: 1,
  },
  explore: {
    margin: 10,
  },
});
