/* eslint-disable no-unused-vars */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Library from "../screens/Library";

const HomeTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Home: focused ? "home-variant" : "home-variant-outline",
            Search: focused ? "magnify-close" : "magnify",
            Library: focused
              ? "music-box-multiple"
              : "music-box-multiple-outline",
          };
          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: "#169443",
        tabBarInactiveTintColor: "#9b9b9b",
        tabBarStyle: {
          backgroundColor: "#000",
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
