import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Loading = ({ type }) => {
  console.log(type);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      {type === "loading" ? (
        <LottieView
          source={require("../assets/loading.json")}
          autoPlay
          loop
          style={styles.lottiView}
        />
      ) : (
        <LottieView
          source={require("../assets/loadingHome.json")}
          autoPlay
          loop
          style={styles.lottiView}
        />
      )}
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  lottiView: {
    width: 300,
    height: 300,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
});
