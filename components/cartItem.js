import React from "react";
import {StyleSheet,View,Image,Text} from 'react-native'
import colors from "../assets/colors";
import Record from '../assets/icon/record.svg'
import Radio from '../assets/icon/radio.svg'

// import { color } from "react-native-reanimated";
const CartItem = ({cart})=>{
    console.log('cartItem',cart)
    return (
        <View style={styles.cartItemContainer}> 
            <Image 
              style={styles.imageItem}
              source={{uri : cart.imageUrl}}/>
              <View style={styles.infoSection}>
                  <View style={styles.cartTitle}>
                     
                       <Text style={{fontFamily : 'SFSB'}} >{cart.name}</Text>
                       <Text style={{fontFamily : 'SFSB'}}>{cart.category}</Text>
                  </View>
                  
                  <View style={styles.colorSection}>
                      <Record width={50} height={50} fill={cart.color.code}/>
                      <Text  style={{fontFamily : 'SFSB'}}>{cart.color.name}</Text>
                  </View>
                  <View style={styles.bottomSection}>
                       <View style={styles.textAura}>
                           <Text style={styles.textTitle}> {cart.size} </Text>
                       </View>
                  </View>
               
                  <View style={styles.bottomSection}>
                       <View style={styles.textAura}>
                           <Text style={styles.quantityText}>x{cart.quantity}</Text>
                       </View>
                       <Text style={styles.priceText}>${(cart.quantity*cart.price).toFixed(2)}</Text>
                  </View>
              </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer : {
        flexDirection : 'row',
        marginVertical : 8,
        // fontFamily : 'Roboto-Regular'
    },
    priceText : {
        fontFamily : 'SFB',
        fontSize : 20,
    },
    imageItem : {
        flex : 1,
        
        width: '100%',
        borderRadius : 5,
    },
    infoSection : {
        flex : 1.3,
        flexDirection : 'column',
        marginVertical : 10,
    },
    textTitle : {
        fontSize : 20,
        fontFamily : 'SFREGULAR'
    }
    ,
    quantityText : {
        fontSize : 18,
        marginRight : 2,
        fontFamily : 'SFREGULAR'
    },
    textAura : {
        justifyContent : 'flex-start',
        // marginVertical : 10,
   
        paddingHorizontal : 6,
        paddingVertical : 5,
        borderRadius : 5,
        backgroundColor : colors.ligthGray
    },
    cartTitle: {
        marginLeft : 8
    },
    colorSection : {
        
        alignItems : 'center',
        flexDirection : 'row',
        
    },
    bottomSection : {
        marginLeft : 8,
        marginVertical : 10,
        // backgroundColor : colors.nightRider,
        alignItems : 'center',
        
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
  });

export default CartItem;