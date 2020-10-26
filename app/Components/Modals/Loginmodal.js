import React from 'react'
import {View,Text,StyleSheet,Dimensions, Modal} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Portal,Dialog } from 'react-native-paper';
const Modalcomp=(props)=>{
    return(
        <Portal>
            <Modal style={styles.container} visible={props.visible} onDismiss={props.hidModal}>
                <View style={styles.modalview}>

                </View>
            </Modal>
        </Portal>
            )
        
        }
export default Modalcomp;
const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    modalview:{
        backgroundColor: "red",
        // paddingTop: Dimensions.get('window').height/3,
        // paddingBottom: Dimensions.get('window').height/3,
        // paddingHorizontal:Dimensions.get('window').width/4,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5
        }
    },
})