/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import Ionic from "react-native-vector-icons/Ionicons";
 import { NavigationContainer } from "@react-navigation/native";
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 
import colors from "./assets/colors";
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from "./screen/Home";
import Search from './screen/Search'
import Cart from "./screen/Cart";
import Account from "./screen/Account";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      
      tabBarIcon: ({ focused, size, colours }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? "ios-home" : "ios-home-outline";
          size = focused ? size + 5 : size;
        } else if (route.name === "Search") {
          iconName = focused ? "search" : "search-outline";
          size = focused ? size + 5 : size;
        } else if (route.name === "Cart") {
          iconName = focused ? "cart" : "cart-outline";
          size = focused ? size + 5 : size;
        } else if (route.name === "Account") {
          iconName = focused ? "people" : "people-outline";
          size = focused ? size + 5 : size;
        }
        return <Ionic name={iconName} size={size} colours={colours} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} options={{
          title: 'Search',
          
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily : 'SFB',
        
          },
    }} />
    <Tab.Screen name="Cart" component={Cart}  options={{
          title: 'Cart',
          
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily : 'SFB',
        
          },
    }}/>
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
  )
}
const App = () => {


  return (
    <>
    <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
      <NavigationContainer>
       <Stack.Navigator screenOptions={{
         
            cardStyle: {
              backgroundColor: colors.white,
            }
       }}>
         <Stack.Screen name='TabNavigator' component={TabNavigator} options={
        {headerShown : false}}/>
       </Stack.Navigator>
      </NavigationContainer>
  </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
