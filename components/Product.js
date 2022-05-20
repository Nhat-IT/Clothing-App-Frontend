import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

export default Product = () => {
    return (
      <View style={{}}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://product.hstatic.net/200000000131/product/trang-2_28b287e352d741c7acfa72487b3d17f5_master.jpg",
          }}
        />
        <Text>Áo Polo Nam</Text>
        <Text>125.000</Text>
      </View>
    );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  tinyLogo: {
    width: windowWidth / 2 - 10,
    height: 'auto',
    borderRadius: 10,
    marginTop: 20
  },
});
