import React, { useEffect, useState,useRef } from 'react';
import {View,Text,StyleSheet,Dimensions,SafeAreaView,Keyboard, Image,StatusBar, KeyboardAvoidingView, Platform} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {TextInput,Button, Portal} from 'react-native-paper';
import theme from '../../../assets/Theme';
const StatusBarHeight=Platform.OS === 'ios' ? 20 :StatusBar.currentHeight;
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const LoginWithPhone=(props)=>{
    const [email,setemail]=useState('');
    const onChanged=(txt)=>{setemail(txt)}
    const [isOpen, setIsOpen] = useState(false);
    const keyboardShowListener = useRef(null);
    const keyboardHideListener = useRef(null);
  
    useEffect(() => {
      keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () => setIsOpen(true));
      keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () => setIsOpen(false));
  
      return () => {
        keyboardShowListener.current.remove();
        keyboardHideListener.current.remove();
      }
    })
    return(<>
    <SafeAreaView style={styles.container}>
        <View> 
    <View style={styles.logocontainer}>
    {!isOpen&& <Image resizeMethod='auto' style={styles.loginlogo} resizeMode='contain' source={require('../../../assets/Triangle/Login_logo.png')} />}
    </View>
    <View style={styles.containerone}>
        <View style={styles.textcontainer}><Text style={styles.txtheading}>Enter Your Phone Number</Text><Text style={styles.txtdetails}>We will send a confirmation code
to your email</Text></View>
        <View style={styles.inputcontainer}>
            <View style={styles.countryinput}>
            <TextInput dense={true} theme={styles.inputtheme} keyboardType={"email-address"}  value={email} onChangeText={(txt)=>{onChanged(txt)}}  style={styles.inputsty} label={<Text style={{color:'red'}}>Email Address</Text>}/>
     </View>
        </View>
    </View>
    </View>
    <View style={[styles.containerfour,{marginTop:isOpen ? 10:0}]}>
   <Button style={{borderRadius:5,padding:10,}} mode="contained" onPress={() =>{props.navigation.navigate('LoginConfirmationCode')}}>
    <Text style={{...theme.fonts.medium}}>Next</Text>
  </Button>
    </View>
    </SafeAreaView>
    </>
);
}
export default LoginWithPhone;
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:Platform.OS === 'ios' ? 25 :StatusBar.currentHeight+5,
        justifyContent:'space-between',
        backgroundColor:'#fff',
    },
    logocontainer:{

    },
    loginlogo:{ 
        width:windowWidth,
        height:windowHeight/3
    },
    textcontainer:{
        padding:20,
        alignItems:'center',
    },
    txtheading:{
        ...theme.fonts.medium,
        fontSize:22,
        marginBottom:10,
        textAlign:'center'
    },txtdetails:{
        ...theme.fonts.regular,
        textAlign:'center',
        paddingHorizontal:20
    },inputcontainer:{
        flexDirection:'row',
        justifyContent:'center',
        padding:30
    },countryinput:{
        flex:1
    },
    inputsty:{
        ...theme.fonts.regular,
        backgroundColor:'#fff',
        fontSize:18,
    },
    containerfour:{
    width:'100%',
    alignSelf:'stretch',
    padding:30
    }

});