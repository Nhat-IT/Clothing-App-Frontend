import react from "react";
import {TouchableOpacity,Text} from 'react-native'
import colors from "../assets/colors";

const CustomerButton = ({buttonStyle,textStyle,text})=>{
    return(
        <TouchableOpacity 
        style={[    {justifyContent: 'center', 
        alignItems:'center'},buttonStyle ? buttonStyle : { 
        backgroundColor : colors.nightRider,
        borderColor:'red',
        borderRadius:10,
   
        marginHorizontal : 5,
        paddingVertical : 12,
        }]}
        onPress = { () => 
       console.log('hello world')}
        > 
<Text style={textStyle ? textStyle : {color : colors.white,fontFamily : 'SFSB',fontSize : 20}}>{text}</Text>
</TouchableOpacity>
    )
}

export default CustomerButton;