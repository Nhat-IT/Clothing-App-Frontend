import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../assets/colors";
const CateItem = ({ cate, last, onClick }) => {
    
    return (
        <TouchableOpacity onPress={()=>onClick(cate.id)}>
            <View style={[styles.cateItem, { borderBottomWidth: last ? 2 : 0 }]}>
                <Text style={styles.cateText}>{cate.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    cateItem: {

        paddingVertical: 15,
        borderTopWidth: 2,
        borderColor: colors.ligthGray
        // backgroundColor : colors.red
    },
    cateText: {
        fontFamily: 'SFSB',
        textAlignVertical: 'center',
        fontSize: 18,

    },
})
export default CateItem;