import React, { useState, useRef, useEffect } from "react";
import colors from "../assets/colors";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import Loading from "../components/Loading";
import { COLOURS, Items } from "../service/dbNhat.js";
import { useDispatch, useSelector } from "react-redux";
import Ionic from "react-native-vector-icons/Ionicons";
import { addUser } from "../redux/user/userSlice";
import SplashScreen from 'react-native-splash-screen'

const axios = require("axios").default;

const windowWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState({});
  const token = useSelector((state) => state.user.token);
  const getUser = (tokenUser) => {
    axios
      .get("http://192.168.1.11:5500/api/user", {
        headers: {
          "auth-token": tokenUser,
        },
      })
      .then(function (response) {
        // handle success
        dispatch(addUser(response.data));
        setValues({
          name: response.data.username,
          address: response.data.address,
          phone: response.data.mobile,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const getAllProducts = () => {
    console.log("getAllProducts");
    axios
      .get("http://192.168.1.11:5500/api/product")
      .then(function (response) {
        // handle success
        console.log(response.data.data)
        setProducts(response.data.data);
        setIsLoading(false)
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
    getUser(token);
    getAllProducts();
  }, [token]);

  useEffect(() => {}, [navigation]);

  const Item = ({ title }) => {
    console.log("title",title)
    return (
      <View style={styles.item}>
        <Image
          source={{ uri: `http://192.168.1.11:5500/${title.images.url}` }}
          style={styles.imageItem}
        />
        <Text style={styles.title}>{title.product.nameProduct}</Text>
        <Ionic name="heart-outline" />
        <Text style={{ width: 100, fontFamily: "SFSB" }}>
          {title.product.price} Đ
        </Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {!isLoading ? (
          <>
            <FlatList
              numColumns={2}
              data={products}
              keyExtractor={(item) => item.product.id}
              renderItem={({ item }) => {
                return (
                  <>
                    <TouchableHighlight
                      onPress={() =>
                        navigation.navigate("ProductInfo", {
                          productID: item.product.id,
                          rate: Math.floor(Math.random() * 5)
                        })
                      }
                      underlayColor={"#e7e9eb"}
                      style={styles.touch}
                    >
                      <Item title={item} key={item.id} />
                    </TouchableHighlight>
                  </>
                );
              }}
            />
          </>
        ) : (
            <Loading type="loadingHome"/>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  item: {
    height: 300,
    padding: 20,
    width: "45%",
    borderRadius: 20,
  },
  title: {
    width: 100,
    fontSize: 12,
    height: 50,
  },
  imageItem: {
    marginBottom: 10,
    width: 150,
    height: 180,
    borderRadius: 10,
  },
  touch: {
    borderRadius: 10,
  },
});

export default Home;
