import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
//Ionicons
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";

import React, { useState } from "react";

const Signup = ({ navigation }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = (val) => {
    console.log(val);
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
      paassword: val,
    });
  };

  const updateSecureTextEntry = () => {
    console.log("a");
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.footer}>
      <Text style={[styles.text_footer]}>Username</Text>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="green" size={20} />
        <TextInput
          placeholder="Your Username"
          placeholderTextColor="#666666"
          style={[styles.textInput]}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
        {data.check_textInputChange === true ? (
          <Feather name="check-circle" color="green" size={20} />
        ) : null}
      </View>

      <Text style={[styles.text_footer, { marginTop: 35 }]}>Name</Text>
      <View style={styles.action}>
        <Ionicons name="person-circle" color="green" size={20} />
        <TextInput
          placeholder="Your Name"
          placeholderTextColor="#666666"
          style={[styles.textInput]}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
        {data.check_textInputChange === true ? (
          <Feather name="check-circle" color="green" size={20} />
        ) : null}
      </View>

      <Text style={[styles.text_footer, { marginTop: 35 }]}>Address</Text>
      <View style={styles.action}>
        <FontAwesome5 name="home" color="green" size={20} />
        <TextInput
          placeholder="Your Address"
          placeholderTextColor="#666666"
          style={[styles.textInput]}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
        />
        {data.check_textInputChange === true ? (
          <Feather name="check-circle" color="green" size={20} />
        ) : null}
      </View>

      <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
      <View style={styles.action}>
        <FontAwesome name="lock" color="green" size={20} />
        <TextInput
          placeholder="Your Password"
          placeholderTextColor="#666666"
          style={[styles.textInput]}
          autoCapitalize="none"
          secureTextEntry={data.secureTextEntry ? true : false}
          onChangeText={(val) => handlePasswordChange(val)}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          <Feather name="eye-off" color="green" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity
          style={[styles.signIn, { backgroundColor: "#02c39a" }]}
        >
          <Text style={[styles.textSign, { color: "black" }]}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.signIn,
            {
              borderColor: "#009387",
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
