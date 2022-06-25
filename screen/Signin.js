import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addToken, addUser } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
const axios = require("axios").default;

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "nhat",
    password: "123",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const handleLogin = async (username, password) => {
    const data = {
      username,
      password,
    };
    // await AsyncStorage.setItem('token', JSON.stringify("123"))
    await axios
      .post("http://192.168.1.11:5500/api/user/login", data)
      .then(function (response) {
        dispatch(addToken(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.footer}>
      <Text style={[styles.text_footer]}>Username</Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#434343" size={20} />
        <TextInput
          placeholder="Your Username"
          placeholderTextColor="#434343"
          style={[styles.textInput]}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
        {data.check_textInputChange === true ? (
          <Feather name="check-circle" color="#434343" size={20} />
        ) : null}
      </View>

      <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
      <View style={styles.action}>
        <FontAwesome name="lock" color="#434343" size={20} />
        <TextInput
          placeholder="Your Password"
          placeholderTextColor="#434343"
          style={[styles.textInput]}
          autoCapitalize="none"
          secureTextEntry={data.secureTextEntry ? true : false}
          onChangeText={(val) => handlePasswordChange(val)}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          <Feather name="eye-off" color="#434343" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <LinearGradient colors={["#000000", "#434343"]} style={[styles.signIn]}>
          <TouchableOpacity
            style={[styles.signIn]}
            onPress={() => {
              handleLogin(data.username, data.password);
            }}
          >
            <Text style={[styles.textSign, { color: "white" }]}>Sign In</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          style={[
            styles.signIn,
            {
              borderColor: "#434343",
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
