import React from 'react';
import {View,Dimensions,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'

import colors from '../assets/colors';
import Camera from '../assets/icon/camera.svg'
const CardItem = ({text,onClick,last})=>{
  return(
      <View style={[styles.cardItem,{borderBottomWidth : last ? 2 : 0}]}>
          <Text style={styles.cardText}>{text}</Text>
      </View>
  )
}
const Account = ()=>{
    return(
        <View style={{flex : 1,backgroundColor : colors.white}}>
          <View style={styles.accountContainer}>
       
            <TouchableOpacity 
                style={styles.profileContainer}
                onPress = { () => 
               console.log('hello world')}> 
             <Camera width={40} height={40} fill={colors.black}/>
             <Text style={{fontFamily : 'SFB',fontSize : 10 }}>Add a photo</Text>
            </TouchableOpacity>
        
             <CardItem text={"Personal data"} />
             <CardItem text={"Address"} />
             <CardItem text={"My orders"} last={true}/>
          
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
  accountContainer : {
    flexDirection : 'column',
    marginVertical : 10,
    backgroundColor : colors.white,
    marginHorizontal : 20,
  },
  profileContainer : {
    marginVertical : 10,
    justifyContent: 'center',
    width : Dimensions.get('window').width * 0.32,
    height : Dimensions.get('window').width * 0.32,
    borderRadius : Dimensions.get('window').width * 0.32,
    alignItems : 'center',
    alignSelf : 'center',
    backgroundColor : colors.ligthGray
  },
  cardItem : {
      
      paddingVertical : 15,
      borderTopWidth : 2,
      borderColor : colors.ligthGray
      // backgroundColor : colors.red
  },
  cardText : {
      fontFamily : 'SFSB',
      textAlignVertical : 'center',
      fontSize : 18,
     
  },
})
export default Account;