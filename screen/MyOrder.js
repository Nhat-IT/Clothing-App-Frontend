import React, { useEffect ,useState} from "react";
import { View, StyleSheet, ScrollView,Text } from 'react-native'
import colors from "../assets/colors";
import { DbService } from "../service/db";

const CardOrder = ({ item }) => {
    return (
        <View style={styles.containerCard}>
        <View style={styles.cardView}>
            <Text style={{fontFamily : 'SFM' , fontSize : 15}}>order date : <Text style={styles.textDate} > {item.created_at}</Text></Text>
            <View style={styles.midCard}>
              
                <View style={styles.midLeft}>
                    <Text style={styles.textMidLeft}>{item.name}</Text>
                    <Text style={styles.textMidLeft}>{item.address}</Text>
                    <Text style={styles.textMidLeft}>{item.mobile}</Text>
                </View>
                <View style={styles.midRight}>
                    <Text>{item.status}</Text>
                    <Text style={styles.textDate}>{item.modified_at}</Text>
                </View>
               
                
            </View>
            <View style={styles.btm}>
                    <Text style={{fontFamily : 'SFSB', fontSize : 20}}>Total</Text>
                    <Text style={{fontFamily : 'SFSB', fontSize : 20}}>{item.amount} đ</Text>
                </View>
            <View style={styles.rightCard}>

            </View>

        </View>
        </View>
    )
}
const MyOrder = () => {
    const [orders, setOrder] = useState([])
    useEffect(() => {
        const getOrder = async () => {
            const data = DbService.getMyorder()
            console.log(data)
            setOrder(data)
        }
        getOrder()

    }, [])
    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <View styles={styles.container}>
                <ScrollView style={styles.scrollView}>
                    {orders.map((order, index) => (
                        <CardOrder item={order} key={index} />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        flexDirection: 'column',
    },
    cardView: {
        
        paddingVertical : 20,
        marginHorizontal : 10,
        flexDirection :  'column',
        justifyContent : 'space-evenly'
    },
    midCard : {
        marginVertical : 10,
        flexDirection :  'row',
        justifyContent : 'space-between',
        alignContent : 'center',
        alignItems : 'center'
    },
    midLeft : {
        flex : 1,
        flexDirection :  'column',
    },
    midRight : {
        flex : 1,
        flexDirection :  'column',
        alignContent : 'center',
        justifyContent : 'center',
        alignItems : 'center'
        
    },
    btm : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    containerCard : {
        backgroundColor : colors.ligthGray,
        margin : 15,
    },
    textMidLeft : {
        fontFamily : 'SFM',
        colors : colors.black,
    },
    textDate : {
       color : colors.gray,
       fontSize : 13, 
       fontFamily :  'SFM'
    }
    

})

export default MyOrder