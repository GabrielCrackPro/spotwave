/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import * as AuthSession from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import Button from "../components/Button";
import Text from "../components/Text";
import spotifyCredentials from "../secrets.js";
import LoginHeader from "../components/LoginHeader";
import { AppContext } from "../AppContext";

const CLIENT_ID = spotifyCredentials.clientId;
const REDIRECT_URI = AuthSession.getRedirectUrl();

const scopesArr = [
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-library-modify",
  "user-library-read",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-read-recently-played",
  "user-top-read",
];
const scopes = scopesArr.join(" ");

const Login = () => {
  const [error, setError] = useState(null);
  const { setAccessToken, userProfile, setUserProfile } =
    useContext(AppContext);
  const navigation = useNavigation();

  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    if (authState && authState.type === "success") {
      // Authentication was successful, do something with the result
    }
  }, [authState]);

  const handleLogin = async () => {
    if (authState !== null) {
      // There's already an active authentication session, so we do nothing
      return;
    }
    try {
      setAuthState({ request: "spotify" });
      const result = await AuthSession.startAsync({
        authUrl:
          "https://accounts.spotify.com/authorize?response_type=token" +
          `&client_id=${CLIENT_ID}` +
          `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
          `&scope=${encodeURIComponent(scopes)}`,
      });

      if (result.type === "success") {
        // Authentication was successful
        setAuthState(result);
        setAccessToken(result.params["access_token"]);

        // Retrieve the user's profile information
        const response = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${result.params["access_token"]}`,
          },
        });
        const data = await response.json();
        setUserProfile(data);

        navigation.navigate("HomeTabNavigator");
      } else {
        setAuthState(null);
        setError("Authentication failed");
      }
    } catch (err) {
      setAuthState(null);
      setError(err.message);
    }
  };
  const handleLogout = async () => {
    if (authState !== null) {
      await fetch("https://accounts.spotify.com/logout");
      setAuthState(null);
      setAccessToken(null);
    }
  };

  return (
    <View style={styles.login}>
      <LoginHeader />
      <SimpleLineIcons
        name="social-spotify"
        size={250}
        color="#169443"
        style={styles.icon}
      />
      <Button
        onPress={authState ? handleLogout : handleLogin}
        style={styles.button}
      >
        <Text bold subHeading>
          {authState ? "Log Out" : "Log in with Spotify"}
        </Text>
        <MaterialIcons
          name={authState ? "logout" : "login"}
          size={24}
          color="#fff"
        />
      </Button>
      {error && <Text>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#169443",
    alignItems: "center",
    borderRadius: 30,
    padding: 15,
  },
  icon: {
    marginBottom: 40,
  },
});

export default Login;
