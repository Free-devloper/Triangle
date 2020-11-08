import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../../assets/Theme';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MyCard from '../../../Components/Card';
import ProductCard from '../../../Components/Card/ProductCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import { categorydata,categoriesimg } from '../Categories/categorydummydata';
 const SellComp=(props)=>{
     return(
<SafeAreaView style={styles.container}>
        <FlatList 
        showsVerticalScrollIndicator={false}
        data={categoriesimg}
        style={styles.container1}
        keyExtractor={(item,index)=>item[0]+index}
        renderItem={(item,index)=>{
            return(
            <MyCard {...props} title={item.item[0]} action={()=>{props.navigation.navigate('Product',{screen:'AddProductDetailsScreen'})}} imgurl={item.item[1]}/>
            )
        }}  
        numColumns={3}
        />
</SafeAreaView>
     )
    }

export default SellComp;   
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:20
    },container1:{
        width:'100%'
        },browsetxtcontainer:{
    },browsetxtcontainertxt:{
        ...theme.fonts.regular,
        fontSize:16
    },Viewallcontainer:{
        alignItems:'center',
        justifyContent:'center'
    },containertwo:{
        flex:1,
        marginTop:20,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },containerthree:{
        flex:1,
        marginTop:20,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
});