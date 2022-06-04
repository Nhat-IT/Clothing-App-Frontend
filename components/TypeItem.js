import React from "react";
import colors from "../assets/colors";
import { TouchableOpacity,View,Text,StyleSheet } from "react-native";
const TypeItem = ({ type,selectIndex,onTypeClick,index})=>{
    return(
        <TouchableOpacity 
        style={[styles.typeItem,{backgroundColor : selectIndex == index ? colors.nightRider : colors.ligthGray}]}
        onPress={()=>{onTypeClick(index,type.id)}}>
        <View 
       >
            <Text style={[styles.typeText,{color : selectIndex == index ? colors.white : colors.nightRider}]}>{type.value}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

      typeItem : {
        paddingVertical : 5,
      
       borderRadius : 5,
          
          flex : 1,
      },
      typeText : {
        fontFamily : 'SFSB',
        textAlign : 'center',
        fontSize : 15,
      }

})
export default TypeItem