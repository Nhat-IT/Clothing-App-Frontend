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
const Item = ({ title }) => {
  return (
    <View style={styles.item}>
    <Image source={title.productImage} style={styles.imageItem} />
    <Text style={styles.title}>{title.name}</Text>
    <Ionic name="heart-outline" />
    <Text style={{width: 100}}>{title.price}</Text>
  </View>
  )
};

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getDataFromDatabase();
  }, [navigation]);

  getDataFromDatabase = () => {
    let productList = [];
    for (let index = 0; index < Items.length; index++) {
      console.log(Items[index].images)
      productList.push(Items[index]);
    }
    setProducts(productList);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableHighlight
                  onPress={() => navigation.navigate('ProductInfo', {productID: item.id})}
                  underlayColor={"#e7e9eb"}
                  style={styles.touch}

                >
                  <Item title={item} />
                </TouchableHighlight>
              </>
            );
          }}
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
