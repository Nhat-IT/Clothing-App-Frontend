import React,{useState} from "react";
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native'
import colors from "../assets/colors";
import Record from '../assets/icon/record.svg'
import Radio from '../assets/icon/radio.svg'

import AsyncStorage from "@react-native-async-storage/async-storage";

const CartItem = ({cart})=>{
    const removeFromCarrt = async ()=>{
        const value = await AsyncStorage.getItem('cart')
        const datas = JSON.parse(value)
        const newData = datas.filter(d=>d.productID != cart.productID)
        await AsyncStorage.setItem('cart',JSON.stringify(newData))
    }
    return (
        <View style={styles.cartItemContainer}> 
            <Image 
              style={styles.imageItem}
              source={{uri : cart.imageUrl}}/>
              <View style={styles.infoSection}>
                  <View style={styles.topItem}>
                        <View style={styles.cartTitle}>
                           
                             <Text style={{fontFamily : 'SFSB'}} >{cart.name}</Text>
                             <Text style={{fontFamily : 'SFSB'}}>{cart.category}</Text>
                        </View>
                        <View>
                          <TouchableOpacity style={styles.xIcon}
                          onPress={removeFromCarrt}>
                            <Text style={styles.xText}>X</Text>
                          </TouchableOpacity>
                           
                        </View>
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
        fontSize : 15,
    },
    imageItem : {
        flex : 1,
        
        width: '100%',
        borderRadius : 5,
    },
    infoSection : {
        flex : 1.3,
        flexDirection : 'column',
        marginVertical : 5,
    },
    textTitle : {
        fontSize : 15,
        fontFamily : 'SFREGULAR'
    }
    ,
    quantityText : {
        fontSize : 15,
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
        marginVertical : 5,
        // backgroundColor : colors.nightRider,
        alignItems : 'center',
        
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    topItem :{
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignContent : 'center'
    },
    xText : {
        fontFamily : "SFB",
        fontSize : 16,
        color : colors.white
    },
    xIcon : {
        paddingHorizontal : 5,
        paddingVertical : 2,
        backgroundColor : colors.red,
        borderRadius : 2,
    }

  });

export default CartItem;