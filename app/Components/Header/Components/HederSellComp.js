import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import {Appbar} from 'react-native-paper'
import theme from '../../../assets/Theme' 
const HeaderSellComp=(props)=>{
    const navigation=useNavigation();
     return(
         <>
      <Appbar.BackAction onPress={()=>{navigation.goBack()}} color='#fff' />
      <Appbar.Content title={props.HeaderTitle} style={styles.contenttext}/>
      </>
     )
 }
 const styles=StyleSheet.create({
     contenttext:{
         ...theme.fonts.medium,
         left:-10
     }
 })
 export default HeaderSellComp;