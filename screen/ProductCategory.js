import React, { useState, useRef, useEffect } from "react";
import colors from "../assets/colors";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  Text
} from "react-native";
import Loading from "../components/Loading";
import { useNavigation,useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductService } from "../service/ProductService";
import ProductCard from "../components/ProductCard";
const ProductCategory = () => {
  const navigation = useNavigation()
  const route = useRoute();
  const {id} = route.params
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProduct = async () => {
    var value = await AsyncStorage.getItem("products");
    if (value != null) {
        value=    JSON.parse(value)
    }else{
        value = await ProductService.getAllProducts()
     
    }
    setIsLoading(false);
    value = value.filter(v=>v.product.categoryId == id)
    setProducts(value)
    console.log("id",value)
   
  };
  useEffect(() => {
    getProduct()
  },[]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        {!isLoading ? (
          <>
            <FlatList
              numColumns={2}
              data={products}
              keyExtractor={(item) => item.product.id}
              renderItem={({ item }) => {
                return (
                  <>
                    <TouchableHighlight
                      onPress={() =>
                        navigation.navigate("ProductInfo", {
                          productID: item.product.id,
                        })
                      }
                      underlayColor={"#e7e9eb"}
                      style={styles.touch}
                    >
                      <ProductCard title={item} key={item.id} />
                    </TouchableHighlight>
                  </>
                );
              }}
            />
          </>
        ) : (
          <View style={{ width: '100%', height: '100%', justifyContent: 'center'}}>
       
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
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
    height: 50,
  },
  imageItem: {
    marginBottom: 10,
    width: 150,
    height: 180,
    borderRadius: 10,
  },
  touch: {
    borderRadius: 10,
  },
});

export default ProductCategory;
