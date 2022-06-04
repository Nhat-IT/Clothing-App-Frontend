import react from "react";
import { View,Text,StyleSheet } from "react-native";
const CateItem = ({cate,last})=>{
    return(
        <View style={[styles.cateItem,{borderBottomWidth : last ? 1 : 0}]}>
            <Text style={styles.cateText}>{cate.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cateItem : {
        
        paddingVertical : 15,
        borderTopWidth : 1,
      
        // backgroundColor : colors.red
    },
    cateText : {
        fontFamily : 'SFSB',
        textAlignVertical : 'center',
        fontSize : 16,
       
    },
})
export default CateItem;