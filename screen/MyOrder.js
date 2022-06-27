import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import colors from "../assets/colors";
import { useSelector } from "react-redux";
import { OrderService } from "../service/OrderService";
import { FlatList } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

const CardOrderChild = (item) => {
  console.log(item.item.image[0].url);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: 100,
      }}
    >
      <Image
        style={{ width: 50, height: 70 }}
        source={{
          uri: `http://192.168.1.11:5500/${item.item.image[0].url}`,
        }}
      />
      <View style={{ width: "80%" }}>
        <Text style={{fontSize: 15}}>{item.item.nameProduct}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <Text>$ {item.item.price}</Text>
          <Text>Q.ty: {item.item.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

const CardOrder = ({ item }) => {
  const status = { 0: "PROCESSING", 1: "Shipping", 2: "RECEIVED" };
  const colorStatus = { 0: "black", 1: "red", 2: "ligthGray" };

  return (
    <View
      style={{
        width: "100%",
        marginTop: 20,
        borderBottomColor: "black",
        borderBottomWidth: 2,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {item.order.name}
          </Text>
          <AntDesign name={"right"} />
        </View>

        <Text style={{ color: colorStatus[item.order.status] }}>
          {status[item.order.status]}
        </Text>
      </View>
      <FlatList
        data={item.order_items}
        keyExtractor={(item) => item.id}
        renderItem={CardOrderChild}
      />
      <Text style={{marginBottom: 15, fontWeight: 'bold'}}>Tổng cộng tiền: {item.order.amount}.000</Text>
    </View>
  );
};
const MyOrder = () => {
  const [orders, setOrder] = useState([]);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    const getOrder = async () => {
      const data = await OrderService.getMyorder(token);
      console.log("data", data);
      setOrder(data);
    };
    getOrder();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <FlatList
        data={orders}
        keyExtractor={(item, index) => item.order.id}
        renderItem={CardOrder}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default MyOrder;
