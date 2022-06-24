import React, { useState, useRef, useEffect } from "react";
import colors from "../assets/colors";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { COLOURS, Items } from "../service/dbNhat.js";
import Ionic from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const Item = ({ title }) => {
  return (
    <View style={styles.item}>
    <Image source={title.productImage} style={styles.imageItem} />
    <Text style={styles.title}>{title.name}</Text>
    <Ionic name="heart-outline" />
    <Text style={{width: 100,fontFamily : "SFSB"}}>Đ {title.price}</Text>
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
   backgroundColor : colors.white,
    alignItems : "center"
    
  },
  item: {
    height: 300,
    padding: 20,
    width: "45%",
    borderRadius: 20,
  },
  title: {
    width: 100,
    fontSize: 12,
  },
  imageItem: {
    marginBottom : 10,
    maxWidth: windowWidth * 0.4,
    height: 180,
    borderRadius: 10,
  },
  touch: {
    borderRadius: 10,
  },
});

export default Home;