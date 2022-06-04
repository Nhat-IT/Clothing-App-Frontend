import React,{useEffect,useState,useRef} from 'react';
import colors from '../assets/colors'
import { DbService } from '../service/db';
import {View,Text,TextInput,StyleSheet,ScrollView} from 'react-native'
import TypeItem from '../components/TypeItem';
import CateItem from '../components/cateItem';
const Search = ()=>{
    const allCategory = useRef([])
    const [category,setCategory] = useState([])
    const [types,setTypes] = useState([])
    const [selectIndex,setSelectIndex] = useState(0)
    useEffect(()=>{
        const getType = ()=>{
            const data = DbService.getType()
            setTypes(data);
            const dataCate = DbService.allCategory()
            allCategory.current = dataCate;
            const getCategory = allCategory.current.filter(cate=>cate.typeId.includes(data[selectIndex].id))
            setCategory(getCategory)
        }
        getType()
        
    },[])
    const onTypeClick = (index,id)=>{
        const getCategory = allCategory.current.filter(cate=>cate.typeId.includes(id))
        setCategory(getCategory)
        setSelectIndex(index)
    }
    return(
        
    <View style={{backgroundColor : '#ffffff',flex : 1}}>
        <View style={styles.pageContainer}>
        <TextInput
        style={styles.input}
        placeholder="Search"

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
                <CateItem cate={cate} last={index+1==category.length}/>
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