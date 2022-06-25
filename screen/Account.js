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
import { deleteUser } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
const axios = require("axios").default;

const CardItem = ({ text, onClick, last, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.cardItem, { borderBottomWidth: last ? 2 : 0 }]}>
        <Text style={styles.cardText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Account = () => {
  const token = useSelector((state) => state.user.token);
  console.log("helooo")
  const [tokenUser, setTokenUser] = useState("");
  console.log("tokeennn", token);
  const dispatch = useDispatch();

  const getUser = (tokenUser) => {
    axios
      .get("http://192.168.1.11:5500/api/user", {
        headers: {
          "auth-token": tokenUser,
        },
      })
      .then(function (response) {
        // handle success
        console.log("res", response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    setTokenUser(token);
    getUser(token);
  });

  const handleLogOut = () => {
    dispatch(deleteUser());
  };

  const navigation = useNavigation();
  const onPressPer = () => {
    navigation.navigate("UserInfo");
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.accountContainer}>
        <TouchableOpacity style={styles.profileContainer}>
          <Camera width={40} height={40} fill={colors.black} />
          <Text style={{ fontFamily: "SFB", fontSize: 10 }}>Add a photo</Text>
        </TouchableOpacity>

        <CardItem text={"Personal data"} onPress={onPressPer} />
        <CardItem text={"Address"} />
        <CardItem text={"My orders"} last={true} />
        <LinearGradient
          colors={["#2193b0", "#6dd5ed"]}
          style={styles.linearGradient}
        >
          <TouchableOpacity
            style={styles.linearGradient}
            onPress={handleLogOut}
          >
            <Text style={{ fontSize: 15 }}>Log out</Text>
          </TouchableOpacity>
        </LinearGradient>
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
    borderTopWidth: 2,
    borderColor: colors.ligthGray,
    // backgroundColor : colors.red
  },
  cardText: {
    fontFamily: "SFSB",
    textAlignVertical: "center",
    fontSize: 18,
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
