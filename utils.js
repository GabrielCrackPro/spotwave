import { useContext } from "react";
import { AppContext } from "./AppContext";

const callSpotifyAPI = async (endpoint) => {
  const { accessToken } = useContext(AppContext);
  const response = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export default callSpotifyAPI;
