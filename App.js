import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import colors from "./assets/colors";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
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
import Signin from "./screen/Signin";
import Signup from "./screen/Signup";
import { deleteUser } from "./redux/user/userSlice";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const StackSign = createNativeStackNavigator();

import { store } from "./redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StackSignNavigator = () => {
  return (
    <StackSign.Navigator>
      <StackSign.Screen
        name="Signin"
        component={Signin}
        options={{
          title: "Sign In",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "SFB",
          },
        }}
      />
      <StackSign.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Sign Up",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "SFB",
          },
          headerBackVisible: false,
        }}
      />
    </StackSign.Navigator>
  );
};

const TabNavigator = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const userToken = useSelector((state) => state.user.token);

  const handleLogout = () => {
    dispatch(deleteUser());
  };

  useEffect(() => {
    setToken(userToken);
  }, [userToken]);
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
      {token ? (
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            title: "Account",

            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "SFB",
            },
            headerRight: () => (
              <Ionicons
                name="log-out-outline"
                size={25}
                style={{ marginRight: 10 }}
                onPress={() => {
                  handleLogout();
                }}
              />
            ),
            tabBarIcon: ({ focused }) => (
              <AccIcon
                width={35}
                height={35}
                fill={focused ? colors.nightRider : colors.ligthGray}
              />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="StackSign"
          component={StackSignNavigator}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "SFB",
            },
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <AccIcon
                width={35}
                height={35}
                fill={focused ? colors.nightRider : colors.ligthGray}
              />
            ),
          }}
        />
      )}
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
