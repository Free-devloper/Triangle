import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../Components/Header/Index'
import HeaderHomeComp from '../../../Components/Header/Components/HeaderHomeComp';
import HomeComp from './HomeComp'
import { StatusBar, Text } from 'react-native';
const StatusBarHeight=Platform.OS === 'ios' ? 11 :StatusBar.currentHeight;
const Home=(props)=>{
    return(
        <>
        <Header childern={<HeaderHomeComp />} height={100}/>
        <ScrollView style={{marginTop:100}}>
        <HomeComp {...props}/>
        </ScrollView>
        </>
    )
} 
export default Home;
