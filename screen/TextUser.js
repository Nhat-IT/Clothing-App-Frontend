import react, { useState ,useEffect, useRef} from "react";
import { useRoute } from '@react-navigation/native';
import {TouchableOpacity,Text,View,TextInput,StyleSheet} from 'react-native'
import colors from "../assets/colors";
import { useNavigation } from '@react-navigation/native';
import CustomerButton from "../components/customButton";

import Check from '../assets/icon/check.svg'

const TextUser = ()=>{
    const navigation = useNavigation();
    const route = useRoute();
    const {title,values,id,isNumber} = route.params
    const [value,setValue] = useState(values)
    const valueRef = useRef(values)
    useEffect(()=>{
      navigation.setOptions({   
        title : title,
        headerRight : ()=>(
      <TouchableOpacity onPress={()=>{
        route.params.onGoBack({key : id, "value" : valueRef.current != '' ?  valueRef.current : value })
        navigation.goBack()
        
    }}>
         <Check width={30} height={30} fill={"#5B5EA6"}/>
        
      </TouchableOpacity>
      
      )
      })
    },[])
    return(
       <View style={{flex : 1,backgroundColor : colors.white}}>
        <View style={styles.textInputView}>
        {value != '' ? <Text style={styles.label}>{title}</Text> : <></> }
             <TextInput
                 style={styles.input}
                 placeholder={title}
                 autoFocus={true}
                 value={value}
                onChangeText={text=>{setValue(text)
                  valueRef.current = text}}
                 keyboardType={isNumber ? 'number-pad' : 'default'}
             />
        <Text style={styles.changeLabel}> you can change your <Text style={{color : colors.black}}>{id}</Text> up here</Text>
    </View>
  
       </View>
    )
}
const styles = StyleSheet.create({
    label : {
        fontSize : 10,
        color : colors.gray
      },
      textInputView : {
        marginHorizontal : 10,
        marginVertical : 10
      },
      input: {
        color : colors.black,
        fontSize : 13,
     
        padding: 5,
        borderBottomColor: colors.gray,
        borderBottomWidth : 1
      },
      changeLabel : {
        marginTop : 10,
        fontFamily : 'SFM',
        color : colors.gray
      }
})

export default TextUser;