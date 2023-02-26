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

  const [categories, setCategories] = useState([]);
  const { accessToken } = useContext(AppContext);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/browse/categories",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        setCategories(data.categories.items);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const handleSelectCategory = (id) => {
    console.log(`Selected: ${id}`);
    navigation.navigate("List", { id });
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
          data={categories}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ padding: 5 }}>
                <GenreCard
                  name={item.name}
                  imageUri={item.icons[0].url}
                  onPress={() => handleSelectCategory(item.id)}
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
