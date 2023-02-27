/* eslint-disable no-unused-vars */
import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Text from "../components/Text";
import GenreCard from "../components/GenreCard";
import Header from "../components/Header";
import { AppContext } from "../AppContext";

const List = ({ route }) => {
  const { accessToken } = useContext(AppContext);
  const { id } = route.params;

  const [listContent, setListContent] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const getListContent = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/browse/categories/${id}/playlists`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        setListContent(data.playlists.items);
      } catch (error) {
        console.log(error);
      }
    };
    getListContent();
  }, [id]);
  const handleSelectPlaylist = (playlistId, playlistName) => {
    navigation.navigate("Playlist", { playlistId, playlistName });
  };
  return (
    <View style={styles.list}>
      <Header screen="Playlist" />
      <Text heading bold center>
        {id}
      </Text>
      <FlatList
        data={listContent}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <GenreCard
              imageUri={item.images[0].url}
              style={{ margin: 0 }}
              onPress={() => handleSelectPlaylist(item.id, item.name)}
            />
          );
        }}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
