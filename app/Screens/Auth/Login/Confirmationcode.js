import React, { useEffect, useState,useRef } from 'react';
import {View,Text,StyleSheet,Dimensions,SafeAreaView,Keyboard, Image,StatusBar, Platform} from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';  
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import theme from '../../../assets/Theme';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const CELL_COUNT = 6;
const LoginConfirmationCode=(props)=>{
    const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [inprops, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
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
        <View style={styles.textcontainer}><Text style={styles.txtheading}>Enter confirmation code</Text><Text style={styles.txtdetails}>We have sent you a 6-digit confirmation
code on <Text style={{...theme.fonts.medium}}>+1-9856471524 </Text> </Text></View>
        <View style={styles.inputcontainer}>
        <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...inprops}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="phone-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
        </View>
        <View style={styles.resendcode}>
       <TouchableOpacity onPress={()=>{}} containerStyle={{flexBasis:100}}>
       <Text style={styles.resendcodetxt}>Resend Confirmation Code</Text>
            </TouchableOpacity>
    </View>
    </View>
    </View>
    <View style={[styles.containerfour,{marginTop:isOpen ? 10:0}]}>
   <Button style={{borderRadius:5,padding:8}} mode="contained" onPress={()=>{props.navigation.navigate('AppTab')}}>
    <Text style={{...theme.fonts.medium}}>Create Account</Text>
  </Button>
    </View>
    </SafeAreaView>
    </>
);
}
export default LoginConfirmationCode;
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
        marginTop:20,
        paddingHorizontal:30,
        alignItems:'center',
    },
    txtheading:{
        ...theme.fonts.medium,
        fontSize:22,
        textAlign:'center'
    },txtdetails:{
        ...theme.fonts.regular,
        textAlign:'center',
        marginTop:10,
        paddingHorizontal:30,
    },
    inputsty:{
        backgroundColor:'#fff',
    },
    containerfour:{
    width:'100%',
    alignSelf:'stretch',
    marginBottom:20,
    paddingHorizontal:25
    },
    root:{
    },
    codeFieldRoot: {
      flexDirection:'row',
      paddingHorizontal:40,
      marginTop:20,
      justifyContent:'space-evenly',
    },
    cellRoot: {
      width: 40,
      height: 'auto',
      alignSelf:'center',
      alignItems:'center',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    cellText: {
      color: '#000',
      fontSize: 26,
      textAlign: 'center',
    },
    focusCell: {
      borderBottomColor: '#007AFF',
      borderBottomWidth: 2,
    },resendcode:{
        marginTop:30,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },resendcodetxt:{
        ...theme.fonts.regular,
        color:'#e83e33',
        textAlign:'center',
        textTransform:'capitalize'
    }

});