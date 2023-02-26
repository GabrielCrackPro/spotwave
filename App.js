/* eslint-disable no-unused-vars */
import React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabNavigator from "./navigators/HomeTabNavigator";
import Player from "./screens/Player.jsx";
import Login from "./screens/Login";
import { AppContextProvider } from "./AppContext";
import List from "./screens/List";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <AppContextProvider>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} />
          <Stack.Screen name="Player" component={Player} />
          <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
