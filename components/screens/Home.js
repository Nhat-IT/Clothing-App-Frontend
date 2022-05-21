import React, { useState, useRef, useEffect } from "react";
import { FlatListSlider } from "react-native-flatlist-slider";
import Product from "./ProductInfo";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
  TouchableHighlight,
} from "react-native";
import { COLOURS, Items } from "../database/Database";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionic from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const Item = ({ title, data }) => (
  <View style={{ borderRadius: 20 }}>
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('Search')
      }
      underlayColor={"#e7e9eb"}
      style={styles.touch}
    >
      <View style={styles.item}>
        <Image source={title.images[0]} style={styles.imageItem} />
        <Text style={styles.title}>{title.name}</Text>
        <Ionic name="heart-outline" />
        <Text>{title.price}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

const Home = (navigation) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getDataFromDatabase();
  }, [navigation]);

  getDataFromDatabase = () => {
    let productList = [];
    for (let index = 0; index < Items.length; index++) {
      productList.push(Items[index]);
    }
    setProducts(productList);
  };

  const renderItem = ({ item, navigation }) => <Item title={item} data={navigation}/>;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          navigation = {navigation}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
  },
  item: {
    height: 300,
    padding: 20,
    width: "48%",
    borderRadius: 50,
  },
  title: {
    width: 100,
    fontSize: 12,
  },
  imageItem: {
    maxWidth: 140,
    height: 180,
    borderRadius: 20,
  },
  touch: {
    borderRadius: 30,
  },
});



export default Home;
