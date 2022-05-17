import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
} from "react-native";
import { FlatListSlider } from "react-native-flatlist-slider";
import Product from "./components/Product";

const arr = [1, 2, 3, 4, 5, 6, 7];


export default App = () => {
  const scrollViewRef = useRef();
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      desc: "Silent Waters in the mountains in midst of Himilayas",
    },
    {
      image:
        "https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80",
      desc: "Red fort in India New Delhi is a magnificient masterpeiece of humans",
    },
  ];
  return (
    <View>
      <FlatListSlider data={images} />
      <View
        style={{
          flexDirection: "row",
          borderTopLeftRadius: 35,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
        }}
      >
        <View
          style={[
            styles.categories,
            { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
          ]}
        >
          <Text style={styles.textCate}>Men</Text>
        </View>
        <View style={[styles.categories, styles.active]}>
          <Text style={styles.textCate}>Women</Text>
        </View>
        <View style={styles.categories}>
          <Text style={styles.textCate}>Kids</Text>
        </View>
        <View
          style={[
            styles.categories,
            { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
          ]}
        >
          <Text style={styles.textCate}>Baby</Text>
        </View>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
          ref = {scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  categories: {
    backgroundColor: "#CCFFCC",
    width: 70,
    height: 40,
  },
  textCate: {
    textAlign: "center",
    alignContent: "center",
    lineHeight: 40,
  },
  active: {
    backgroundColor: "#FFCCFF",
  },
});
