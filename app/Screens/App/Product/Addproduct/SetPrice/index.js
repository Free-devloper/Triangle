import * as React from 'react';
import { SafeAreaView, View,StatusBar } from 'react-native';
import HeaderSellComp from '../../../../../Components/Header/Components/HederSellComp';
import Header from '../../../../../Components/Header/Index';
import SetPriceComp from './setpricecomp';
const StatusBarHeight=Platform.OS === 'ios' ? 20 :StatusBar.currentHeight;
function SetPrice(props) {
    return (
        <>
        <Header height={50} childern={<HeaderSellComp HeaderTitle={'Set a Price'}/>} />
        <View  style={{flex:1,width:'100%',height:'100%',backgroundColor:'#fff',marginTop:50+StatusBarHeight,}}>
            <SetPriceComp />
        </View>
        </>
    )
}

export default SetPrice;