/* eslint-disable no-unused-vars */
import { FlatList, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import Header from "../components/Header";
import Player from "../components/Player";
import ListCard from "../components/ListCard";
import { AppContext } from "../AppContext";

const Library = () => {
  const { userPlaylists } = useContext(AppContext);
  console.log(userPlaylists);

  return (
    <View style={styles.library}>
      <Header screen="Library" />
      <FlatList
        data={userPlaylists}
        keyExtractor={(item) => item.href}
        renderItem={({ item }) => {
          return <Text>Aaaa</Text>;
        }}
      />

      <Player />
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  library: {
    flex: 1,
  },
});
