import React from 'react';
import {View,Text,StyleSheet,Dimensions,SafeAreaView, Image,StatusBar} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../../../assets/Theme';
import Modalcomp from '../../../Components/Modals/Loginmodal';
import {FontAwesome,AntDesign} from '@expo/vector-icons';
import { useState } from 'react';
const StatusBarHeight=Platform.OS === 'ios' ? 20 :StatusBar.currentHeight;
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const Login=(props)=>{
    const [visible,setvisible]=useState(false);
    const hidModal=()=>{setvisible(false)}
    const [mdtype,setmdtype]=useState("FACEBOOK")
    return(<>
    <Modalcomp visible={visible} TYPE={mdtype} hidModal={()=>{hidModal()}}>
        <Text>Modal</Text>
    </Modalcomp>
    <SafeAreaView style={styles.container}>
    <View style={styles.logocontainer}>
        <Image resizeMethod='auto' style={styles.loginlogo} resizeMode='contain' source={require('../../../assets/Triangle/Login_logo.png')} />
    </View>
    <View style={styles.buttonContainer}>
    <View>
    <FontAwesome.Button onPressIn={()=>{setvisible(true); setmdtype('FACEBOOK')}} name="facebook-official" size={30} backgroundColor="#fff" color='#3b5998' style={[{borderColor:'#3b5998'},styles.buttonStyle]} onPress={()=>{}}>
    <Text style={[{color:'#3b5998',},styles.buttonText]}>Continue With Facebook</Text>
  </FontAwesome.Button>
  </View>
  <View>
  <FontAwesome.Button name="google" onPressIn={()=>{setvisible(true);setmdtype("GOOGLE")}} size={30} backgroundColor="#fff" color='red' style={[{borderColor:'red'},styles.buttonStyle]} onPress={()=>{}}>
    <Text style={[{color:'red',},styles.buttonText]}>Continue With Google</Text>
  </FontAwesome.Button>
  </View>
  <View>
  <FontAwesome.Button onPressIn={()=>{props.navigation.navigate('LoginWithPhone')}} name="phone-square" size={30} backgroundColor="#fff" color='green' style={[{borderColor:'green'},styles.buttonStyle]} onPress={()=>{}}>
    <Text style={[{color:'green',},styles.buttonText]}>Continue With Phone</Text>
  </FontAwesome.Button>
  </View>
  <View>
  <FontAwesome.Button onPressIn={()=>{props.navigation.navigate('LoginWithEmail')}} name="envelope" size={30} backgroundColor="#fff" color='grey' style={[{borderColor:'grey'},styles.buttonStyle]} onPress={()=>{}}>
    <Text style={[{color:'grey',},styles.buttonText]}>Continue With Email</Text>
  </FontAwesome.Button>
  </View>
  </View>
    <View style={styles.closebutton}>
    <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{width:25,height:25,justifyContent:'center'}}><AntDesign name="close" size={24} color="black" /></TouchableOpacity>
    </View>
    <View>
        <Text style={styles.termstext}> If you continue you are accepting</Text> 
    </View>
    <View>
    <TouchableOpacity style={styles.touchableterm}><Text style={styles.termstouchabletext}>The Triangle Terms and Conditions and Privacy Policy</Text></TouchableOpacity>
    </View>
    </SafeAreaView>
    </>
);
}
export default Login;
const styles= StyleSheet.create({
    container:{
        flex:1,
        flexBasis:100,
        alignContent:'center',
        alignItems:'center',
        padding:StatusBarHeight+5,
        justifyContent:'space-evenly',
        backgroundColor:'#fff',
    },
    logocontainer:{
    },
    loginlogo:{
        width:windowWidth,
        height:windowHeight/3
    },
    buttonContainer:{
        flex:1,
        flexGrow:1,
        marginTop:20,
        maxHeight:windowHeight,
        maxWidth:windowWidth
    },
    buttonStyle:{
        width:'100%',
        alignContent:'center',
        justifyContent:'flex-start',
        borderStyle:'solid',
        borderRadius:5,
        padding:10,
        borderWidth:2,
        marginBottom:10,
    },
    buttonText:{
        ...theme.fonts.medium,
        textAlignVertical:'center',
        textAlign:'center',fontSize:14,textTransform:'uppercase'
    },
    closebutton:{
        // backgroundColor:'#fff',
        position:'absolute',
        top:StatusBarHeight+10,
        left:windowWidth/12,
        alignSelf:'flex-start',
        borderColor:'#fff',
        borderWidth:0.5,
        borderStyle:'solid',
        borderRadius:50,
        shadowColor:'#000',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.5,
        shadowRadius:10,
    },
    closebuttontxt:{
        textAlign:'center',
        fontSize:18,
    },
    termstext:{
        ...theme.fonts.regular,
        textAlign:'center',
        fontSize:12,
        textTransform:'capitalize'
    },
    termstouchabletext:{
        ...theme.fonts.regular,
        fontSize:12,
        textTransform:'capitalize',
        textAlign:'center',
        textDecorationColor:'#000',
        textDecorationLine:'underline',
    }
});