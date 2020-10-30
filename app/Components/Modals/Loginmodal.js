import React, { useState } from 'react'
import {View,Text,StyleSheet,Image,Dimensions,StatusBar} from 'react-native';
import {FontAwesome,AntDesign} from '@expo/vector-icons'
import {  Providor as PaperProvidor,Button, Portal,Modal } from 'react-native-paper';
import theme from '../../assets/Theme';
import { ScrollView } from 'react-native-gesture-handler';


const StatusBarHeight=Platform.OS === 'ios' ? 20 :StatusBar.currentHeight;
const Modalcomp=(props)=>{
    switch (props.TYPE) {
        case "FACEBOOK":
            return(
                <>
                {/*FACEBOOK MODAL */}
                <Portal>
                  <Modal visible={props.visible} onDismiss={props.hidModal} contentContainerStyle={styles.containerStyle}>
                      {/* <View style={styles.closebtn}>
                      <FontAwesome  name="close" size={30} color="#fff" />
                      </View> */}
                    <View style={styles.contencontainter}>
                        <View style={styles.containerone}>
                            <View style={styles.sicon}><AntDesign color='#4267B2' style={styles.simg} name='facebook-square' size={35}/></View>
                            <View style={styles.clsbtn}><AntDesign onPress={()=>{props.hidModal()}}  name="close" size={26} color="black" /></View>
                        </View>
                        <View style={styles.containertwo}>
                            <Image resizeMode='contain' style={styles.placeholderimg} source={require('../../assets/social_logo/place_holder.png')} />
                        </View>
                        <View style={styles.containerthree}>
                            <Text style={styles.headingtxt}>Chirstopher Berry</Text>
                            <Text style={styles.detailtxt}><Text style={{...theme.fonts.medium}}>Triangle</Text> : Buy & Sell near you will have access to <Text style={{...theme.fonts.medium,color:'red'}}>name, email address</Text> and other <Text style={{...theme.fonts.medium,color:'red'}}>public info</Text></Text>
                        </View>
                        <View style={styles.containerfour}>
                            <Text on style={styles.bottomtxt}>CONTINUE AS CHRISTOPHER</Text>
                        </View>
                    </View>
                  </Modal>
                </Portal>
                </>
                )
            break;
            case "GOOGLE":
                return(
                    <>
                    {/*GOOGLE MODAL */}
                    <Portal>
                      <Modal visible={props.visible} onDismiss={props.hidModal} contentContainerStyle={styles.containerStyle}>
                          {/* <View style={styles.closebtn}>
                          <FontAwesome  name="close" size={30} color="#fff" />
                          </View> */}
                        <View style={styles.gcontencontainter}>
                            <View style={styles.gcontainerone}>
                                <View style={styles.clsbtn}><AntDesign onPress={()=>{props.hidModal()}}  name="close" size={26} color="black" /></View>
                            </View>
                            <View style={styles.containertwo}>
                                <Image resizeMode='contain' style={styles.placeholderimg,{width:150 ,height:150}} source={require('../../assets/Triangle/Logo_simple.png')} />
                            </View>
                            <View style={styles.gcontainerthree}>
                                <Text style={styles.headingtxt}>Choose an account</Text>
                                <Text style={styles.gdetailtxt}>to Continue to The Triangle</Text>
                            </View>
                            <ScrollView maintainVisibleContentPosition={true}  contentContainerStyle={styles.gcontainerfour}>
                                <View style={styles.gcontainerfours}>
                                <View style={styles.gplaceholderimg}><Image source={require('../../assets/social_logo/gplacehoderimg.png')} resizeMode="contain" style={styles.gimg}/></View>
                                <View style={styles.gplacetxt}><Text style={styles.gplacetxtheading}>Christopher Berry</Text>
                                <Text style={styles.gplacetxtdetails}>christopherberry@gmail.com</Text>
                                </View>
                                </View>
                            </ScrollView>
                            <View style={styles.gcontainerfive}>
                                    <Text style={styles.bottomtxtreg}>To continue, Google will share your name,
                                        email address, and profile picture with The Triangle</Text>
                                </View>
                        </View>
                      </Modal>
                    </Portal>
                    </>
                    )
                break;
        default:
            break;
    }


        }
export default Modalcomp;

const styles=StyleSheet.create({
    containerStyle:{
        flex:1,
        opacity:1,
        justifyContent:'center',
        alignItems:'center',
        padding:30
    },
    contencontainter:{
        width:300,
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#fff',
        justifyContent:'space-between'
    },
    gcontencontainter:{
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#fff',
        justifyContent:'flex-start'
    },
    containerone:{
        width:'100%',
        flexDirection:'row',
        padding:20,
        justifyContent:'space-between'
    },
    gcontainerone:{
        width:'100%',
        flexDirection:'row',
        top:20,
        right:20,
        justifyContent:'flex-end'
    },
    sicon:{
        alignItems:'center',
        justifyContent:'center'
    },
    clsbtn:{
        alignItems:'center',
        justifyContent:'center'
    },
    containertwo:{
        justifyContent:'center',
        alignItems:'center'
    },
    placeholderimg:{
        width:120,
        height:120
    },
    containerthree:{
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    gcontainerthree:{
        alignItems:'center',
        justifyContent:'center',
    },
    headingtxt:{
        ...theme.fonts.medium,
        fontSize:24,
    },containerfour:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:'100%',
        padding:20,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#e83e33'
    },
    detailtxt:{
        ...theme.fonts.regular,
        padding:20,
        textAlign:'center',
    },
    gdetailtxt:{
        ...theme.fonts.regular,
        padding:5,
        textAlign:'center',
    },
    bottomtxt:{
        ...theme.fonts.medium,
        textAlign:'center',
        color:'#fff',
        fontSize:15,
    },
    gcontainerfour:{
        flexDirection:'column',
        alignSelf:'center',
        overflow:'scroll'
    },gcontainerfours:{
        flexDirection:'row',
        flexWrap:'wrap',
        padding:30,
        justifyContent:'center',
        alignSelf:'center',

    },
    gplaceholderimg:{
        flex:1,
        justifyContent:'center'
    },
    gimg:{
        width:70,
        height:70
    },
    gplacetxt:{
        flex:2,
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    gplacetxtheading:{
        ...theme.fonts.medium,
        fontSize:16
    },gplacetxtdetails:{
        ...theme.fonts.regular,
        textAlign:'left'
    },gcontainerfive:{
        alignSelf:'center',
        backgroundColor:'#ececec',
    },bottomtxtreg:{
        ...theme.fonts.regular,
        padding:20,
        textAlign:'center'
    }
   
})