import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { COLOURS, Items } from "../service/dbNhat.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from "react-native-vector-icons/Entypo";
import Ionic from "react-native-vector-icons/Ionicons";
import colors from "../assets/colors.js";

const ProductInfo = ({ route, navigation }) => {
  const { productID } = route.params;
  const width = Dimensions.get("window").width;
  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  let [product, setProduct] = useState({ a: 1 });
  let rates = [];
  let [icon, setIcon] = useState("heart");
  const [selectedSize, setSelectSize] = useState(-1);
  const changeNameIcon = () => {
    if (icon === "heart") {
      setIcon("heart-outline");
    } else {
      setIcon("heart");
    }
  };
  const addToCart = async () => {
    if (selectedSize != -1) {
      const item = {
        productID: productID,
        quantity: 1,
        size: Object.keys(product.size)[selectedSize],
      };
      try {
        const value = await AsyncStorage.getItem("cart");
        if (value != null) {
          const newCart = [];
          const datas = JSON.parse(value);
          let isOld = datas.find((c) => c.productID == item.productID);

          if (isOld) {
            isOld.quantity += item.quantity;
          } else {
            datas.push(item);
          }
          await AsyncStorage.setItem("cart", JSON.stringify(datas));

        } else {
          await AsyncStorage.setItem("cart", JSON.stringify([item]));
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("out of stock");
    }
  };

  getRate = () => {
    let arrRate = [];
    let rate = product.rate;
    do {
      arrRate.push(1);
      rate = rate - 1;
    } while (rate > 0.5);
    if (rate == 0.5) arrRate.push(0.5);
    arrRate = arrRate.concat(new Array(5 - arrRate.length).fill(0));
    rates = arrRate;
  };

  const getDataFromDatabase = async () => {
    for (let i = 0; i < Items.length; i++) {
      if (Items[i].id === productID) {
        let index = 0;
        for (const s in Items[i].size) {
          if (Items[i].size[s] > 0) {
            setSelectSize(index);
            break;
          }
          index++;
        }
        await setProduct(Items[i]);
        return;
      }
    }
  };

  useEffect(() => {
    getDataFromDatabase();
  }, [navigation]);

  getRate();
  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
        <StatusBar
          backgroundColor={COLOURS.backgroundLight}
          barStyles="dark-content"
        />
      </View>
    );
  };

  return (
    <View
      width="100%"
      height="100%"
      backgroundColor={COLOURS.white}
      position="relative"
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            backgroundColor: "#eceff1",
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 16,
              paddingLeft: 16,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack("Home");
              }}
            >
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundDark,
                  padding: 12,
                  backgroundColor: COLOURS.white,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={product.images ? product.images : null}
            horizontal
            snapToInterval={width} //Trượt 1 khoảng bằng độ rộng màn hình
            decelerationRate={0.8} //Tốc độ cuộn
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false} // Ẩn thanh trượt
            bounces={true}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              marginTop: 32,
            }}
          >
            {product.images
              ? product.images.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [
                      index - 2,
                      index - 1,
                      index,
                      index + 1,
                      index + 2,
                    ],
                    outputRange: [0.2, 0.2, 1, 0.2, 0.2],
                    extradata: "clamp",
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: "16%",
                        height: 3.4,
                        backgroundColor: COLOURS.black,
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}
                    ></Animated.View>
                  );
                })
              : null}
          </View>
        </View>
        <View
          style={{
            width: "90%",
            // backgroundColor: "red",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 7,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                width: 240,
                fontFamily: "Macondo-Regular",
              }}
            >
              {product.name}
            </Text>
            <TouchableOpacity onPress={changeNameIcon}>
              <Ionic name={icon} style={{ fontSize: 20 }} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 7,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {product.price} VND
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flexDirection: "row" }}>
                {rates.map((item) => {
                  let name =
                    item == 1
                      ? "star"
                      : item == 0.5
                      ? "star-half-outline"
                      : "star-outline";
                  return <Ionic name={name} style={{ fontSize: 17 }} />;
                })}
              </View>
              <Text style={{ marginLeft: 7 }}>{product.rate}</Text>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ marginBottom: 10, fontWeight: "bold" }}>Size</Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "space-between",
                justifyContent: "space-around",
              }}
            >
              {product.size
                ? Object.keys(product.size).map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        disabled={
                          product.size[Object.keys(product.size)[index]] == 0
                            ? true
                            : false
                        }
                        onPress={() => {
                          if (
                            product.size[Object.keys(product.size)[index]] != 0
                          ) {
                            setSelectSize(index);
                          }
                        }}
                      >
                        <Text
                          style={{
                            width: 50,
                            height: 50,
                            textDecorationLine:
                              product.size[Object.keys(product.size)[index]] ==
                              0
                                ? "line-through"
                                : "none",
                            backgroundColor:
                              product.size[Object.keys(product.size)[index]] ==
                              0
                                ? colors.ligthGray
                                : "#e5eddf",
                            borderRadius: 10,
                            textAlign: "center",
                            lineHeight: 50,
                            fontWeight: "bold",
                            borderWidth: index == selectedSize ? 3 : 0,
                            color:
                              product.size[Object.keys(product.size)[index]] ==
                              0
                                ? colors.gray
                                : colors.black,
                          }}
                        >
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  })
                : null}
            </View>
          </View>
          <View
            style={{
              marginTop: 13,
            }}
          >
            <Text
              flexDirection="column"
              style={{ fontWeight: "bold", marginBottom: 7 }}
            >
              Mô tả
            </Text>
            {product.description
              ? product.description.map((item) => {
                  return <Text>+ {item}</Text>;
                })
              : null}
          </View>
          <TouchableOpacity
            onPress={() => {
              addToCart();
              console.log("Them vao gio")
            }}
          >
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                backgroundColor: COLOURS.black,
                borderRadius: 10,
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 20, color: COLOURS.white }}>
                Thêm vào giỏ
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
