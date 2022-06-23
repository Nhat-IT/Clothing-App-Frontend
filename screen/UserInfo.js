import {StyleSheet,View,TextInput,Text ,Dimensions,TouchableOpacity} from 'react-native'
import colors from '../assets/colors'
import Camera from '../assets/icon/camera.svg'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Check from '../assets/icon/check.svg'
const TextCustom = ({title,values,setValues,id,isNumber=false,valueRef}) =>{
    const navigation = useNavigation();
    const handleBack = (data)=>{
     
        valueRef.current[data.key] = data.value
        console.log('data',valueRef)
        setValues({...values,[data.key] : data.value})
    }
    return(
    <View style={styles.textInputView}>
        {values[id] != '' ? <Text style={styles.label}>{title}</Text> : <></> }
        <TouchableOpacity 
        onPress={()=>  navigation.navigate('TextUser',{title : title ,values : values[id],id : id,isNumber : isNumber,onGoBack : handleBack })}>
             <TextInput
          
                 style={styles.input}
                 placeholder={title}
                 value={values[id]}
                 editable={false}
           
                 keyboardType={isNumber ? 'number-pad' : 'default'}
             />
        </TouchableOpacity>
    </View>
    )
}
const UserInfo = ()=>{
  const navigation = useNavigation();
    const [values,setValues] = useState({
        'name' : '',
        'address' : '',
        'phone' : ''
    })
    const valueRef = useRef(values)
    useEffect(()=>{
      navigation.setOptions({   
    
        headerRight : ()=>(
      <TouchableOpacity onPress={()=>{
        console.log(valueRef.current)
        navigation.goBack()
        
    }}>
         <Check width={30} height={30} fill={"#5B5EA6"}/>
        
      </TouchableOpacity>
      
      )
      })
      const init = {'name' : 'Toukky','address' : '60 Ngo Si Lien' , 'phone' : '0343409259'}
      valueRef.current = init
      setValues(init)
    },[])
    const onTextChange = (prop)=> (event)=>{
        setValues({...values,[prop] : event.target.values})
    }
    return(
        <View style={{flex : 1,backgroundColor : colors.white}}>
          <View style={styles.container}>
          <TouchableOpacity 
                style={styles.profileContainer}
                onPress = { () => 
               console.log('hello world')}> 
             <Camera width={40} height={40} fill={colors.black}/>
             <Text style={{fontFamily : 'SFB',fontSize : 10 }}>Add a photo</Text>
            </TouchableOpacity>
            <TextCustom title={'Name'} id={'name'} values={values} setValues={setValues} valueRef={valueRef}/>
            <TextCustom title={'Address'} id={'address'} values={values} setValues={setValues} valueRef={valueRef}/>
            <TextCustom title={'Phone'} id={'phone'} values={values} setValues={setValues} isNumber={true} valueRef={valueRef}/>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
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
      container : {
        marginHorizontal : 20
      },
      input: {
        color : colors.black,
        fontSize : 13,
     
        padding: 5,
         borderBottomColor: colors.gray,
        borderBottomWidth : 1
      },
      label : {
        fontSize : 10,
        color : colors.gray
      },
      textInputView : {
        marginVertical : 10
      }
})
export default UserInfo