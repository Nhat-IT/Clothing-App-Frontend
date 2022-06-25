import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <LottieView
      source={require("../assets/loading.json")}
      autoPlay
      loop
      style={{
        width: 300,
        height: 300,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

export default Loading;

const styles = StyleSheet.create({});
