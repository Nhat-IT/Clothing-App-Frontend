import {View,Text,StyleSheet,Image } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
const ProductCard = ({ title }) => {
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
const styles = StyleSheet.create({
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
})
export default ProductCard