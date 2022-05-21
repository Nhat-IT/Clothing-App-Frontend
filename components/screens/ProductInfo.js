import { View, Text, StyleSheet, Image, FlatList, Dimensions, Animated } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { COLOURS, Items } from "../database/Database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductInfo = ({ route, navigation }) => {
  const { productID } = route.params;

  const width = Dimensions.get('window').width;
  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  let [product, setProduct] = useState({ a: 1 });

  const getDataFromDatabase = async () => {
    for (let i = 0; i < Items.length; i++) {
      if (Items[i].id === productID) {
        await setProduct(Items[i]);
        return;
      }
    }
    console.log(product);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDatabase();
    });

    return unsubscribe;
  }, [navigation]);

  const renderProduct = ({item, index}) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={product.images ? product.images : null}
        horizontal
        renderItem={renderProduct}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={width}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "50%",
  },
});

export default ProductInfo;
