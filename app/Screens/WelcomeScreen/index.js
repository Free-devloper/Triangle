import React from 'react';
import {View,Image,Text,StyleSheet,} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../assets/Theme';
const WelcomScreen=(props)=>{
    return(<>
    <SafeAreaView style={styles.container}>
        <View style={styles.imgcontainer}>
        <Image source={require('../../assets/Triangle/Login_logo.png')} onMagicTap={()=>{props.navigation.navigate('Auth')}} resizeMode='contain' style={styles.logoimg} /> 
        </View>
        <View style={styles.btncontainer}>
            <FontAwesome shouldRasterizeIOS={true} onPress={()=>{props.navigation.navigate('Auth')}} name='arrow-circle-o-right' size={50} color='black' style={styles.btnnext}/>
            <Text style={styles.btntxt}>Continue</Text>
        </View>
    </SafeAreaView>
    </>
);
}
export default WelcomScreen;
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    imgcontainer:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    btncontainer:{
        flex:2,
        backgroundColor:'white',
        alignItems:'center'
    },
    btnnext:{
        backgroundColor:'#fff',
    },
    btntxt:{
        padding:5,
        ...theme.fonts.medium,
    },
    logoimg:{
        width:'90%'
    }
});