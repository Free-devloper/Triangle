import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text,FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderSellComp from '../../../Components/Header/Components/HederSellComp'
import Header from '../../../Components/Header/Index'
import CategoriesComp from './CategoriesComp'
export default function Categories(){
  const  route=useRoute();
    return (
        <>
        <Header height={50} childern={<HeaderSellComp HeaderTitle={route.params.HeaderTitle}/>} />
        <SafeAreaView style={styles.container}>
        <CategoriesComp />
        </SafeAreaView>
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        flexWrap:'wrap',
        padding:10,
        marginTop:50,
        backgroundColor:'#fff'
    }
})
