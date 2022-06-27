import React,{useEffect,useState,useRef} from 'react';
import colors from '../assets/colors'
import { DbService } from '../service/db';
import { CateService } from '../service/CategoryService';
import {View,Text,TextInput,StyleSheet,ScrollView} from 'react-native'
import TypeItem from '../components/TypeItem';
import CateItem from '../components/cateItem';
import { ProductService } from '../service/ProductService';
import AsyncStorage from "@react-native-async-storage/async-storage";
const Search = ({navigation})=>{
    const allCategory = useRef([])
    const [category,setCategory] = useState([])
    const [types,setTypes] = useState([])
    const [selectIndex,setSelectIndex] = useState(0)
    useEffect(()=>{
        const getType = async ()=>{
            const data = await CateService.getAllTypes()
            setTypes(data);
            const dataCate =await CateService.getAllCate()
            allCategory.current = dataCate;
            const getCategory = allCategory.current.filter(cate=>cate.typeid == data[selectIndex].id)
            setCategory(getCategory)
            const product = await ProductService.getAllProducts()
            await AsyncStorage.setItem("products", JSON.stringify(product));
        }
        getType()
    },[navigation])

    
    const onCateClick = (id)=> {
        navigation.navigate("ProductCate", {id : id})
    }
    const onTypeClick = (index,id)=>{
        console.log("typeId",id,allCategory)
        const getCategory = allCategory.current.filter(cate=>cate.typeid==id)
        setCategory(getCategory)
        setSelectIndex(index)
    }
    const searchItem = (text)=>{
        const getCategory = allCategory.current.filter(cate=>cate.typeid==types[selectIndex].id &&cate.title.toUpperCase().includes(text.toUpperCase()))
        setCategory(getCategory)
    }
    return(
        
    <View style={{backgroundColor : '#ffffff',flex : 1}}>
        <View style={styles.pageContainer}>
        <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={text=>searchItem(text)}
        />
        <View style={styles.typeContainer}>
            {types.map((type,index)=>(
                <TypeItem key={index}  type={type} selectIndex={selectIndex} index={index} onTypeClick={onTypeClick}>
                </TypeItem>
            ))}
        </View>
        <View style={styles.cateContainer}>
        <ScrollView style={styles.scrollView}>
            {category.map((cate,index)=>(
                <CateItem key={cate.id} cate={cate} last={index+1==category.length}  onClick={onCateClick}/>
            ))}
            </ScrollView>
        </View>
        </View>
    </View>
        
    )
}

const styles = StyleSheet.create({
    pageContainer : {
        backgroundColor : colors.white,
        marginHorizontal : 20,
        flexDirection : 'column',
        flex : 1
    },
    typeContainer : {
        backgroundColor : colors.ligthGray,
        alignItems : 'center',
        borderRadius : 10,
        flexDirection : 'row'
    },
    cateContainer : {
        flex : 1,
        marginTop : 50,
       marginBottom : 5,
    },

    input: {
        fontSize : 13,
       
        marginVertical : 15,
        padding: 5,
        borderRadius : 10,
        backgroundColor : colors.ligthGray
      },
    
      scrollView : {
          flexDirection : 'column',
         
       
      }

})
export default Search;