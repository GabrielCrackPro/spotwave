/* eslint-disable no-unused-vars */
import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
        userProfile,
        setUserProfile,
        userPlaylists,
        setUserPlaylists,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
