import React from 'react';
import {View,Text,Image} from 'react-native'
const Account = ({navigation})=>{
    return(
        <>
        <View>
        <Image 
             
              source={{
                uri: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441464/item/goods_58_441464.jpg?width=1600&impolicy=quality_75',
              }}
              />
        </View>
        </>
    )
}

export default Account;