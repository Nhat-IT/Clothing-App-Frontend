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
      <HomeStack.Screen name="Home" component={Home} />
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
