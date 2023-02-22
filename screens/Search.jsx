/* eslint-disable no-unused-vars */
import { FlatList, StyleSheet, View } from "react-native";
import Text from "../components/Text";
import React from "react";
import Header from "../components/Header";
import Player from "../components/Player";
import SearchBar from "../components/SearchBar";
import GenreCard from "../components/GenreCard";
import sampleData from "../data/sampleData";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();

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
          data={sampleData.Search.genres}
          numColumns={2}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return <View style={{ padding: 5 }}>
              <GenreCard name={item.name} onPress={() => handleSelectGenre(item.name)} />
            </View>;
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
    margin: 10
  },
});
