import React from 'react';
import {useFonts,Lato_400Regular,Lato_700Bold,Lato_300Light,Lato_100Thin} from '@expo-google-fonts/lato';
import {Provider as PaperProvider} from 'react-native-paper'
import 'react-native-gesture-handler';
import Navigator from './routes';
import { AppLoading } from 'expo';
import { useState } from 'react';
import theme from '../assets/Theme/index'
const TriangleApp=()=>{
let [fontsLoaded, error] =  useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_300Light,
    Lato_100Thin
})
if(!fontsLoaded){
return (
         <AppLoading/>
          );
}else{
return(
    <>
<PaperProvider theme={theme}>
 <Navigator />
 </PaperProvider>
    </>
    )
    }
}
export default TriangleApp;