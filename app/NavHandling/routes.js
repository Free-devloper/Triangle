import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,} from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import {Loading} from '../Screens/Loading';
const Stack=createStackNavigator();

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
        </Stack.Navigator>
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

export default Navigator;
