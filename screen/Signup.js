import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
//Ionicons
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import React, { useState } from "react";
const axios = require("axios").default;

const Signup = ({ navigation }) => {
  const [data, setData] = useState({
    username: "",
    phone: "",
    address: "",
    password: "",
    check_userNameChange: false,
    check_userPhoneChange: false,
    check_userAddressChange: false,
    secureTextEntry: true,
  });
  const userNameChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_userNameChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_userNameChange: false,
      });
    }
  };

  const userPhoneChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        phone: val,
        check_userPhoneChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_userPhoneChange: false,
      });
    }
  };

  const userAddressChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        address: val,
        check_userAddressChange: true,
      });
    } else {
      setData({
        ...data,
        address: val,
        check_userAddressChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    console.log(val)
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

  const handleSignUp = async (username, mobile, address, password) => {
    const data = {
      username,
      mobile,
      address,
      password,
    };
    console.log(data)
    // await AsyncStorage.setItem('token', JSON.stringify("123"))
    await axios
      .post("http://192.168.1.11:5500/api/user/register", data)
      .then(function (response) {
        // dispatch(addToken(response.data));
        console.log(response.data)
        navigation.navigate("Signin")
        setData({
          username: "",
          phone: "",
          address: "",
          password: "",
          check_userNameChange: false,
          check_userPhoneChange: false,
          check_userAddressChange: false,
          secureTextEntry: true,
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={styles.footer}>
      <Text style={[styles.text_footer]}>Username</Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#434343" size={20} />
        <TextInput
          placeholder="Your Username"
          placeholderTextColor="#666666"
          style={[styles.textInput]}
          autoCapitalize="none"
          onChangeText={(val) => userNameChange(val)}
        />
        {data.check_userNameChange === true ? (
          <Feather name="check" color="green" size={20} />
        ) : null}
      </View>

      <Text style={[styles.text_footer, { marginTop: 35 }]}>Phone</Text>
      <View style={styles.action}>
        <Feather name="phone" color="#434343" size={20} />
        <TextInput
          placeholder="Your Phone"
          placeholderTextColor="#666666"
          style={[styles.textInput]}
          autoCapitalize="none"
          onChangeText={(val) => userPhoneChange(val)}
        />
        {data.check_userPhoneChange === true ? (
          <Feather name="check" color="green" size={20} />
        ) : null}
      </View>

      <Text style={[styles.text_footer, { marginTop: 35 }]}>Address</Text>
      <View style={styles.action}>
        <FontAwesome5 name="home" color="#434343" size={20} />
        <TextInput
          placeholder="Your Address"
          placeholderTextColor="#666666"
          style={[styles.textInput]}
          autoCapitalize="none"
          onChangeText={(val) => userAddressChange(val)}
        />
        {data.check_userAddressChange === true ? (
          <Feather name="check" color="green" size={20} />
        ) : null}
      </View>

      <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
      <View style={styles.action}>
        <FontAwesome name="lock" color="#434343" size={20} />
        <TextInput
          placeholder="Your Password"
          placeholderTextColor="#666666"
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
          <TouchableOpacity style={[styles.signIn]} onPress={()=>{handleSignUp(data.username, data.phone, data.address,data.password)}}>
            <Text style={[styles.textSign, { color: "white" }]}>Sign Up</Text>
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
            navigation.goBack();
          }}
        >
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

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
