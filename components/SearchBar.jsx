/* eslint-disable no-unused-vars */
import { FlatList, Keyboard, StyleSheet, TextInput, View } from "react-native";
import React, { useState, useRef, useContext, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import Button from "./Button";
import { AppContext } from "../AppContext";
import ListCard from "./ListCard";
import Chip from "./Chip";
import searchFilters from "../data/filters";

const SearchBar = ({ variant }) => {
  const inputRef = useRef(null);
  const { accessToken, setSearchResults, searchResults } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [inputVariant, setInputVariant] = useState(variant);
  const [searchFilter, setSearchFilter] = useState(searchFilters[5]);

  const searchContainerStyles = [styles.searchContainer];
  const searchContainerFocusedStyles = [
    styles.searchContainer,
    { width: "100%", margin: 5, backgroundColor: styles.dark.backgroundColor },
  ];
  const searchBarStyles = [styles.searchBar];

  inputVariant &&
    inputVariant == "light" &&
    searchContainerStyles.push(styles.light);
  inputVariant &&
    inputVariant == "dark" &&
    searchContainerStyles.push(styles.dark);

  const handleFocus = () => {
    setInputFocused(true);
    setInputVariant("dark");
  };
  const handleBlur = () => {
    setInputFocused(false);
    setInputVariant(variant);
    setSearchResults(null);
    inputRef.current.blur();
    Keyboard.dismiss();
  };
  const handleTextChange = async (text) => {
    if (text.length >= 3) {
      setSearch(text);
    } else {
      setSearch("");
    }
  };
  const handleSearch = async (type) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${search}&type=${type}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      setSearchResults(data.tracks.items);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearchFilter = (filter) => setSearchFilter(filter);
  return (
    <View style={inputFocused ? styles.searchFocused : {}}>
      <View
        style={
          inputFocused ? searchContainerFocusedStyles : searchContainerStyles
        }
      >
        <Button onPress={inputFocused && handleBlur}>
          <Feather
            name={inputFocused ? "arrow-left" : "search"}
            size={20}
            color={inputVariant == "light" ? "#000" : "#fff"}
          />
        </Button>
        <TextInput
          ref={inputRef}
          placeholder={searchResults ? `You've searched for ${search}` : "What do you feel like listening to?"}
          cursorColor="#fff"
          placeholderTextColor={
            inputVariant == "light" ? "#000" : "#fff" && inputFocused && "gray"
          }
          color={inputVariant == "light" ? "#000" : "#fff"}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleTextChange}
          // TODO: Change to correct filter
          onSubmitEditing={() => handleSearch("tracks")}
          style={searchBarStyles}
        />
      </View>
      <View style={searchResults ? styles.searchResults : { display: "none" }}>
        <FlatList horizontal data={searchFilters} keyExtractor={(item) => item.name} renderItem={({ item }) => {
          return <Chip title={item.name} variant={item === searchFilter ? "light" : "dark"} onPress={() => handleSearchFilter(item)} />;
        }} />
        <FlatList data={searchResults} keyExtractor={(item) => item.id} renderItem={({ item }) => {
          return <ListCard item={item} image={item.album.images[0].url} />;
        }} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchFocused: {
    position: "absolute",
    top: 21,
    padding: 0,
    width: "100%",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    margin: 20,
    borderRadius: 5,
  },
  searchBar: {
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 5,
  },
  searchResults: {
    margin: 10,
  },
  searchFilters: {
    flexDirection: "row"
  },
  dark: {
    backgroundColor: "#131314",
  },
  light: {
    backgroundColor: "#fff",
  },
});
