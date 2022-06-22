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
import AccIcon from './assets/icon/account.svg'
import CartICon from './assets/icon/briefcase.svg'
import HomeIcon from './assets/icon/home.svg'
import SearchIcon from './assets/icon/search.svg'
import Purchase from "./screen/Purchase";
import ProductInfo from "./screen/ProductInfo";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel : false,
      tabBarStyle : {
        height : 70,
        elevation : 5,
        shadowOpacity : 0.25,
        shadowRadius : 3.5
      },
     
    })}
  >
    <Tab.Screen name="Home" component={Home}  options={{
          title: 'Home',
          
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily : 'SFB',
          
          },
          tabBarIcon : ({focused})=>(
            <HomeIcon width={35} height={35} fill={focused ? colors.nightRider : colors.ligthGray} />
          )
            
          
    }}/>
    <Tab.Screen name="Search" component={Search} options={{
          title: 'Search',
          
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily : 'SFB',
          
          },
          tabBarIcon : ({focused})=>(
            <SearchIcon width={30} height={30} fill={focused ? colors.nightRider : colors.ligthGray} />
          )
            
          
    }} />
    <Tab.Screen name="Cart" component={Cart}  options={{
          title: 'Cart',
          
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily : 'SFB',
        
          },
          tabBarIcon : ({focused})=>(
            <CartICon width={35} height={35} fill={focused ? colors.nightRider : colors.ligthGray} />
          )
            
    }}/>
    <Tab.Screen name="Account" component={Account}  options={{
          title: 'Account',
          
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily : 'SFB',
        
          },
          tabBarIcon : ({focused})=>(
            <AccIcon width={35} height={35} fill={focused ? colors.nightRider : colors.ligthGray} />
          )
    }}/>
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
        <Stack.Screen name="Purchase" component={Purchase} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} options={
        {headerShown : false}}/>
       </Stack.Navigator>
      </NavigationContainer>
  </>
  );
};



export default App;
