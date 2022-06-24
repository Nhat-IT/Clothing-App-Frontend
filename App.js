<<<<<<< HEAD
import { StatusBar } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import Home from "./components/screens/Home";
import Search from "./components/screens/Search";
import Cart from "./components/screens/Cart";
import Account from "./components/screens/Account";
import ProductInfo from "./components/screens/ProductInfo";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="SubHome" component={Home} />
      <HomeStack.Screen name="ProductInfo" component={ProductInfo} />
    </HomeStack.Navigator>
  );
}

export default App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <NavigationContainer>
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
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{ tabBarBadge: 3 }}
          />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
=======
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
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import Home from "./screen/Home";
import Search from "./screen/Search";
import Cart from "./screen/Cart";
import Account from "./screen/Account";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccIcon from "./assets/icon/account.svg";
import CartICon from "./assets/icon/briefcase.svg";
import HomeIcon from "./assets/icon/home.svg";
import SearchIcon from "./assets/icon/search.svg";
import Purchase from "./screen/Purchase";
import ProductInfo from "./screen/ProductInfo";
import UserInfo from "./screen/UserInfo";
import TextUser from "./screen/TextUser";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { store } from "./redux/store";
import { Provider } from "react-redux";

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          elevation: 5,
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",

          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "SFB",
          },
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={35}
              height={35}
              fill={focused ? colors.nightRider : colors.ligthGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Search",

          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "SFB",
          },
          tabBarIcon: ({ focused }) => (
            <SearchIcon
              width={30}
              height={30}
              fill={focused ? colors.nightRider : colors.ligthGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Cart",

          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "SFB",
          },
          tabBarIcon: ({ focused }) => (
            <CartICon
              width={35}
              height={35}
              fill={focused ? colors.nightRider : colors.ligthGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          title: "Account",

          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "SFB",
          },
          tabBarIcon: ({ focused }) => (
            <AccIcon
              width={35}
              height={35}
              fill={focused ? colors.nightRider : colors.ligthGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              cardStyle: {
                backgroundColor: colors.white,
              },
            }}
          >
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserInfo"
              component={UserInfo}
              options={{
                headerTitleAlign: "center",
                title: "User Infomation",
              }}
            />
            <Stack.Screen name="Purchase" component={Purchase} />
            <Stack.Screen
              name="ProductInfo"
              component={ProductInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="TextUser" component={TextUser} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
>>>>>>> Vilayded
