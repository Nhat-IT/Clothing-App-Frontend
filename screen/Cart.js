import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useDispatch } from "react-redux";
import colors from "../assets/colors";
import CartItem from "../components/cartItem";
import Popup from "../components/Popup";
import { DbService } from "../service/db";
import CustomerButton from "../components/customButton";
import UNIQLO from "../assets/icon/UNIQLO.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
const axios = require("axios").default;

const Cart = ({ navigation }) => {
  const productCarts = useSelector((state) => state.cartItems.value);
  const userInfor = useSelector((state) => state.user.user);
  const userToken = useSelector((state) => state.user.token);
  console.log("ketqua", userInfor, userToken);
  const dispatch = useDispatch();
  const [order_items, setOrderItems] = useState([]);
  const [total, setTotal] = useState(0.0);
  const [visible, setModalVisible] = useState(false);

  const getCart = async () => {
    const value = await AsyncStorage.getItem("cart");
    if (value != null) {
      console.log(value);
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getCart();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const getItems = () => {
      let total = 0;
      productCarts.map((item) => {
        console.log(item, "---------");
        total += item.price * item.quantity;
      });

      setTotal(total);
    };
    getItems();
  }, [productCarts]);

  const getOrderItems = () => {
    let order_items = [];
    productCarts.map((item) => {
      console.log("itemnhatne", item);
      order_items = [
        ...order_items,
        {
          detail_product_id: item.detail_product_id,
          quantity: item.quantity,
          price: item.price,
        },
      ];
      setOrderItems(order_items);
    });
  };

  const orderProduct = () => {
    getOrderItems();
    if (userInfor && userToken) {
      const data = {
        mobile: userInfor.mobile,
        name: userInfor.username,
        amount: total,
        address: userInfor.address,
        order_items: order_items,
      };
      axios("http://192.168.1.11:5500/api/order", {
        method: "post",
        headers: { "auth-token": userToken },
        data: data,
      })
        .then(function (response) {
          console.log(response);
          setModalVisible(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      navigation.navigate("StackSign");
    }
  };

  return (
    <>
      <Popup notify={"Order Successful !"} visible={visible} setModalVisible={setModalVisible} />
      <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
        {productCarts.length < 1 ? (
          <View style={styles.emptyCart}>
            <UNIQLO fill={colors.red} />
            <Text
              style={{ fontFamily: "SFB", fontSize: 20, marginVertical: 50 }}
            >
              Your cart is empty
            </Text>
            <Text style={{ fontFamily: "SFM", fontSize: 10, marginBottom: 5 }}>
              Check out our
            </Text>
            <CustomerButton
              text={"Home"}
              buttonStyle={styles.catalogButton}
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
          </View>
        ) : (
          <View style={styles.mainContainer}>
            <View style={styles.cartList}>
              <ScrollView style={styles.scrollView}>
                {productCarts.map((cart) => (
                  <CartItem key={cart.id} cart={cart} />
                ))}
              </ScrollView>
            </View>
            <View style={styles.btmContainer}>
              <View style={{}}>
                <View style={styles.line}></View>
                <View style={styles.totalSection}>
                  <Text style={{ fontFamily: "SFM", fontSize: 18 }}>Total</Text>
                  <Text style={{ fontFamily: "SFB", fontSize: 22 }}>
                    ${total.toFixed(2)}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.nightRider,
                  borderColor: "red",
                  borderRadius: 10,
                  marginHorizontal: 5,
                  paddingVertical: 12,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  orderProduct();
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                    fontFamily: "SFSB",
                    fontSize: 20,
                  }}
                >
                  Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  emptyCart: {
    marginTop: 30,
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mainContainer: {
    margin: 10,
    marginHorizontal: 15,
    flex: 1,
    // backgroundColor : colors.red,
    flexDirection: "column",
    // justifyContent : 'space-between'
  },
  catalogButton: {
    paddingHorizontal: 100,
    backgroundColor: colors.nightRider,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btmContainer: {
    flex: 1,
    marginVertical: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  totalSection: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollView: {
    flexDirection: "column",
    marginVertical: 10,
  },
  cartList: {
    flex: 2.5,
  },
  line: {
    marginTop: 30,
    marginBottom: 15,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  orderButton: {
    color: colors.black,
  },
});
export default Cart;
