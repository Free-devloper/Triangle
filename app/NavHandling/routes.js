import React, { useState } from 'react';
import {Image,StyleSheet,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, Header,} from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginWithPhone from '../Screens/Auth/Login/Loginwith_phone';
import LoginConfirmationCode from '../Screens/Auth/Login/Confirmationcode';
import LoginWithEmail from '../Screens/Auth/Login/LoginWithEmail';
import Home from '../Screens/App/Home';
import Chat from '../Screens/App/Chat';
import Sell from '../Screens/App/Sell';
import MyAd from '../Screens/App/MyAds';
import Account from '../Screens/App/Account';
import theme from '../assets/Theme/index';
import FlatIcon from '../assets/Fonts/index'
import {Loading} from '../Screens/Loading';
const Stack=createStackNavigator();
const BottomTab=createBottomTabNavigator();
const WelcomeStack=()=>{
    return(
    <>
    <Stack.Navigator initialRouteName='welcomeindex' headerMode='none'>
        <Stack.Screen name='welcomeindex' component={WelcomeScreen}/>
        <Stack.Screen name='Auth' component={AuthStack}/>
    </Stack.Navigator>
   </>
    )
}
const AuthStack=()=>{
    return(
        <Stack.Navigator initialRouteName='Login' headerMode='none'>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='LoginWithPhone' component={LoginWithPhone}/>
            <Stack.Screen name='LoginConfirmationCode' component={LoginConfirmationCode}/>
            <Stack.Screen name="LoginWithEmail" component={LoginWithEmail}/>
            <Stack.Screen name="AppTab" component={AppTab}/>
        </Stack.Navigator>
    )
}
const AppTab=()=>{
    return(
        <BottomTab.Navigator initialRouteName='Home' tabBarOptions={{style:styles.tabbarstyle,inactiveTintColor:'#000',activeTintColor:'#fff',activeBackgroundColor:'#5115e8',iconStyle:styles.iconstyle,tabStyle:styles.tabStyle,labelStyle:styles.labeltxt}}>
            <BottomTab.Screen name="HOME" component={Home} options={{tabBarLabel:'HOME',tabBarIcon: ({color,size}) => (
           <FlatIcon name='home' size={size} color={color}/> 
          )}} />
            <BottomTab.Screen name="Chats" component={Chat} options={{tabBarLabel:'CHATS',tabBarIcon: ({color,size}) => (
           <FlatIcon name='chat' size={size} color={color}/> 
          )}}   />
            <BottomTab.Screen name="Sell" component={Sell} options={{tabBarLabel:'Sell',tabBarIcon: ({color,size}) => (
           <FlatIcon name='camera' size={size} color={color}/> 
          )}}    />
            <BottomTab.Screen name="Myads" component={MyAd} options={{tabBarLabel:'Myads',tabBarIcon: ({color,size}) => (
           <FlatIcon name='clipboard' size={size} color={color}/> 
          )}}  />
            <BottomTab.Screen name="Account" component={Account} options={{tabBarLabel:'Account',tabBarIcon: ({color,size}) => (
           <FlatIcon name='user' size={size} color={color}/> 
          )}}/>
        </BottomTab.Navigator>
    )
}
const Navigator=(props)=>{
const [Auth,setAuth]=useState(false);
    return(
        <>
        <NavigationContainer>
        {!Auth&&<WelcomeStack />}
        </NavigationContainer>
        </>
    )
}
const styles=StyleSheet.create({
    tabbarstyle:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignSelf:'center',
        alignItems:'center',
    },
   tabStyle:{
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-between',
    }, labeltxt:{
        ...theme.fonts.medium,
        textAlign:'center',
        fontSize:12,
        textTransform:'uppercase'
    },iconstyle:{
    }
})

export default Navigator;
