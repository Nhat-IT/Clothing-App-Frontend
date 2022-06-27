import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../assets/colors";
import Camera from "../assets/icon/camera.svg";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const CardItem = ({ text, onClick, last, onPress, name }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.cardItem,
          {
            borderBottomWidth: last ? 2 : 0,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <Ionicons name={name} size={20} />
        <Text style={styles.cardText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};


const Account = () => {

  const navigation = useNavigation();
  const onPressPer = () => {
    navigation.navigate("UserInfo");
  };

  const onPressOrder =()=>{
    navigation.navigate("MyOrder")
  }
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.accountContainer}>
        <TouchableOpacity style={styles.profileContainer}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 250 }}
            source={{
              uri: "https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/288526138_690744288893953_8128935241550054277_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=AWlVLi2dZ_8AX-s1uEL&_nc_ht=scontent.fdad3-6.fna&oh=03_AVKFFaQRy2_BuMDYTnL8vuFkHphJz8xFUAPjq7I9DyAKIg&oe=62DDEA14",
            }}
          />
          {/* <Camera width={40} height={40} fill={colors.black} />
          <Text style={{ fontFamily: "SFB", fontSize: 10 }}>Add a photo</Text> */}
        </TouchableOpacity>
        <View style={{ marginTop: 40 }}>
          <CardItem
            text={"Personal data"}
            onPress={onPressPer}
            name="person-outline"
            last={true}
          />
          <CardItem text={"My orders"} last={true} name="cart-outline" onPress={onPressOrder}/>
          <CardItem text={"Setting"} name="settings-outline" last={true} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  accountContainer: {
    flexDirection: "column",
    marginVertical: 10,
    backgroundColor: colors.white,
    marginHorizontal: 20,
  },
  profileContainer: {
    marginVertical: 10,
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.32,
    height: Dimensions.get("window").width * 0.32,
    borderRadius: Dimensions.get("window").width * 0.32,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.ligthGray,
  },
  cardItem: {
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderColor: colors.ligthGray,
    // backgroundColor : colors.red
  },
  cardText: {
    fontFamily: "SFSB",
    textAlignVertical: "center",
    fontSize: 18,
    marginLeft: 10,
  },
  linearGradient: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
export default Account;
