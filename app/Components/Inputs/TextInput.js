import React from 'react'
import { StyleSheet } from 'react-native';
import {TextInput} from 'react-native-paper';
import theme from '../../assets/Theme';
function Input(props) {
    return (
        <TextInput underlineColor={'black'} enablesReturnKeyAutomatically={true} theme={theme} mode="outlined" value={props.value} onChangeText={(val)=>props.onChangeText(val)} style={styles.input} {...props}  />
    )
}

export default Input;
const styles=StyleSheet.create({
    input:{
        ...theme.fonts.regular,
    }
})
