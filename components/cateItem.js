import react from "react";
import { View,Text,StyleSheet } from "react-native";
import colors from "../assets/colors";
const CateItem = ({cate,last})=>{
    return(
        <View style={[styles.cateItem,{borderBottomWidth : last ? 2 : 0}]}>
            <Text style={styles.cateText}>{cate.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cateItem : {
        
        paddingVertical : 15,
        borderTopWidth : 2,
        borderColor : colors.ligthGray
        // backgroundColor : colors.red
    },
    cateText : {
        fontFamily : 'SFSB',
        textAlignVertical : 'center',
        fontSize : 18,
       
    },
})
export default CateItem;