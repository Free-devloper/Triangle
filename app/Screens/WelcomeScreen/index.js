import React from 'react';
import {View,Image,Text,StyleSheet, TouchableWithoutFeedbackComponent} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
const WelcomScreen=(props)=>{
    return(<>
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('Auth')}}>
        <Image source={require('../../assets/Triangle/Login_logo.png')} resizeMode='contain' style={styles.logoimg} />
        </TouchableOpacity>
    </SafeAreaView>
    </>
);
}
export default WelcomScreen;
const styles= StyleSheet.create({
    container:{
        flex:1,
        flexBasis:100,
        justifyContent:'center',
        alignItems:'center'
    },
    logoimg:{
         width:250,
    }
});