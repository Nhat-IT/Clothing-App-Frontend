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
import { DbService } from "../service/db";
import CustomerButton from "../components/customButton";
import UNIQLO from "../assets/icon/UNIQLO.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addItem } from "../redux/shopping-cart/cartItemsSlice";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0.0);
  const getCart = async () => {
    const value = await AsyncStorage.getItem("cart");
    if (value != null) {
      console.log(value);
    }
  };
  useEffect(() => {
    const getItems = () => {
      let total = 0;
      const data = DbService.getCartDummy();
      data.map((cart) => {
        total += cart.price * cart.quantity;
      });

      setTotal(total);

      setItems(data);
    };

    console.log("item", items.length);
    getItems();
    const unsubscribe = navigation.addListener("focus", () => {
      getCart();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      {items.length < 1 ? (
        <View style={styles.emptyCart}>
          <UNIQLO fill={colors.red} />
          <Text style={{ fontFamily: "SFB", fontSize: 20, marginVertical: 50 }}>
            Your cart is empty
          </Text>
          <Text style={{ fontFamily: "SFM", fontSize: 10, marginBottom: 5 }}>
            Check out our
          </Text>
          <CustomerButton text={"Catalog"} buttonStyle={styles.catalogButton} />
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.cartList}>
            <ScrollView style={styles.scrollView}>
              {items.map((cart) => (
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
                dispatch(addItem('3'))
                AsyncStorage.removeItem('token')
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
