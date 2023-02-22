/* eslint-disable no-unused-vars */
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfilePicture from "../assets/profile.png";
import Button from "./Button";
import Text from "./Text";

const Header = ({ screen }) => {
  const hours = new Date().getHours();
  const time = {
    morning: hours > 0 && hours <= 12,
    afternoon: hours > 13 && hours <= 20,
    night: hours > 21 && hours <= 23
  };
  const navigation = useNavigation();
  const headerText = {
    Home: time.morning && "Good Morning" || time.afternoon && "Good Afternoon" || time.night && "Good Night",
    Search: "Search",
    Library: "Your Library",
  }[screen];
  const headerActions = {
    Home: ["bell-outline", "history"],
    Search: ["camera-outline"],
    Library: ["magnify", "plus"],
  };
  const handleButtonPress = (action) => {
    const screenMap = {
      "bell-outline": "Search",
      "history": "Search",
      "camera-outline": "Search",
      "magnify": "Search",
      "plus": "Search",
    };
    navigation.navigate(screenMap[action]);
  };

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Image
          source={ProfilePicture}
          alt="picture"
          style={styles.profileImage}
        />
        <Text subHeading bold style={styles.headerText}>
          {headerText}
        </Text>
      </View>
      <View style={styles.right}>
        {headerActions[screen].map((action) => (
          <Button
            key={action}
            onPress={() => handleButtonPress(action)}
            style={styles.button}
          >
            <MaterialCommunityIcons
              name={action}
              color={styles.button.color}
              size={28}
            />
          </Button>
        ))}
      </View>
    </View >
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#131314",
  },
  headerText: {
    marginLeft: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    height: 30,
    width: 30,
  },
  right: {
    flexDirection: "row",
  },
  button: {
    padding: 15,
    color: "#9b9b9b",
  },
});
