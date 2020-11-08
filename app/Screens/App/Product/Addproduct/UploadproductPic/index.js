import React, { useState } from 'react'
import { SafeAreaView, View,StatusBar } from 'react-native';
import HeaderSellComp from '../../../../../Components/Header/Components/HederSellComp';
import Header from '../../../../../Components/Header/Index';
import UploadproductpicComp from './uploadproductpicComp';

const StatusBarHeight=Platform.OS === 'ios' ? 20 :StatusBar.currentHeight;
function Uploadproductpic(props) {
    return (
        <>
        <Header height={50} childern={<HeaderSellComp HeaderTitle={'Upload Pictures'}/>} />
        <View  style={{flex:1,width:'100%',height:'100%',backgroundColor:'#fff',marginTop:50+StatusBarHeight,}}>
        <UploadproductpicComp {...props}/>
        </View>
        </>
    )
}

export default Uploadproductpic;
