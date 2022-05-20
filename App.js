import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/Home";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Account from "./components/Account";

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, colours }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            }
            else if(route.name === "Search"){
              iconName = focused ? "search" : "search-outline";
            }
            else if(route.name === "Cart"){
              iconName = focused ? "cart" : "cart-outline";
            }
            else if(route.name === "Account"){
              iconName = focused ? "people" : "people-outline";
            }
            return <Ionic name={iconName} size={size} colours={colours}/>
          },
        })}
        
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
