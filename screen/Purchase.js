import react,{useState,useEffect} from "react";
import {View,Text,StyleSheet,ImageBackground,Dimensions} from 'react-native'
import CustomerButton from "../components/customButton";
import colors from "../assets/colors";
import { DbService } from "../service/db";
import Cart from "./Cart";
const CartPurchase = ({cart})=>{
    console.log("cart",cart)
    return(
        <View style={styles.cart}>
            <ImageBackground imageStyle={{borderRadius : 5}} style={styles.imageItem} source={{uri : cart.imageUrl}}>
                <View style={styles.textView}>
                <Text style={styles.textImage}>{cart.quantity}</Text>
                </View>
            </ImageBackground>
        </View>
    )
} 
const Purchase = ({order,data})=>{
    const [cartItem,setCartItem] = useState([])
    const [addresses,setAddresses] = useState([])
    const [address,setAddress] = useState()
    const [total,setTotal] = useState(0.0)
    const onCick = (text)=>{
        console.log(text)
    }
    useEffect(()=>{
        const getCart = ()=>{
            let total = 0;
            const data = DbService.getCartDummy()
            data.map((cart)=>{
                total += cart.price * cart.quantity 
            })
            setCartItem(data)
            setTotal(total)
        }
        getCart()
        
    },[])
    return(
        <View style={{backgroundColor : colors.white,flex : 1}}>
      
        <View style={styles.purchaseContainer}>
            <View>
                <View style={styles.addressContainer}>
                    <Text style={styles.title}>Address</Text>
                    <CustomerButton text={"Add address"} buttonStyle={styles.addButton}  onPress={()=>onCick('hellop ')}/>
                </View>
                <View style={styles.cartsContainer}>
                    <Text style={styles.title}>Cart</Text>
                    <View style={styles.cartItem}>
                        {cartItem.map((cart,index)=>(
                            <CartPurchase key={index} cart={cart}/>
                        ))}
                    </View>
                </View>
                <View style={styles.totalSection}>
                           <Text style={{fontFamily : 'SFM',fontSize : 18}}>Total</Text>
                           <Text style={{fontFamily : 'SFB',fontSize : 22}}>${total.toFixed(2)}</Text>
                </View>
            </View>
            <CustomerButton text={"Make an order"} buttonStyle={styles.addButton}  onPress={()=>onCick('hellop ')}/>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    addressContainer : {

    },
    title : {
        fontFamily : 'SFB',
        fontSize : 20
    },
    addButton : {
        backgroundColor : colors.nightRider,
       
        borderRadius:10,
        paddingVertical : 10,
    },
    cart : {
        marginVertical : 10,
        marginRight : 10,
        width : Dimensions.get('window').width * 0.20,
        height : Dimensions.get('window').width * 0.25,
        borderRadius : 2,
    },
    cartsContainer : {
      
    },
    cartItem : {
      justifyContent : 'flex-start',
      flexWrap : "wrap",
      flexDirection : 'row',
 
    },
    purchaseContainer : {
        flex : 1,
        justifyContent : "space-between",
        margin :  10
    },
    imageItem : {
        height : "100%",
        width : "100%",
        borderRadius : 300,
    },
    textView : {
        position: 'absolute',
        right : 0,
        bottom: 0,
        marginRight : 2
    },
    textImage : {
       fontFamily : 'SFB', 
    },
    totalSection : {
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
})
export default Purchase;