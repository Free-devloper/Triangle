import React from 'react'
import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../Components/Header/Index';
import SellComp from './SellComp';
import HeaderSellComp from '../../../Components/Header/Components/HederSellComp';
const Sell=(props)=>{
    return(
        <>
        <Header height={50} childern={<HeaderSellComp HeaderTitle={'What are you Offering?'}/>} />
        <View style={{flex:1,width:'100%',height:'100%',backgroundColor:'#fff',marginTop:50,}}>
        <SellComp {...props}/>
        </View>
        </>
    )
}
export default Sell;