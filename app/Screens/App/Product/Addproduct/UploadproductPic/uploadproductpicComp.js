import React, { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView, View, Image, Text,TouchableOpacity,StyleSheet,Button} from 'react-native';
import {Button as PaperButton} from 'react-native-paper'
import theme from '../../../../../assets/Theme/index'
import { ScrollView } from 'react-native-gesture-handler';
const uploadproductpicComp = (props) => {
    const [imguploadc,setimguploadc]=useState(false)
    const [image, setImage] = useState([]);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                let { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            allowsEditing: true,
            quality: 1
        })
        // let result = await ImagePicker.launchImageLibraryAsync({
        //     mediaTypes: ImagePicker.MediaTypeOptions.All,
        //     allowsEditing: true,
        //     aspect: [4, 3],
        //     allowsMultipleSelection:true,
        //     quality: 1,
        // });

        if (!result.cancelled) {
            setImage(image => ([...image, result.uri]));
            console.log(image.length);
            if(image.length>=4)
            {
                setimguploadc(true)
            }
        }
    };
    const pickGalleyImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(image => ([...image, result.uri]));
            if(image.length>=5)
            {
                setimguploadc(true)
            }
        }
    };
    return (
        <ScrollView contentContainerStyle={{flex:1,flexBasis:100}}>
        <View style={styles.container}>
            {imguploadc&&<Text style={{color:'red'}}>*Maximum 6 pics can be uploaded</Text>}
            <View style={styles.imgcontainer}>
                {image.length < 1 && <Image resizeMode="contain" source={require('../../../../../assets/ImageBackground/Upload_Img_BackGround.png')} style={styles.img} />
                }
                {image.length<1&&<Text style={{textAlign:'center',width:'100%',paddingHorizontal:80,...theme.fonts.regular}}>Upload more photos increaces your chances of closing a deal</Text>}
                {image && image.map((item, index) => (
                    <Image key={index} source={{ uri: item }} resizeMode="contain" style={{ width: 100, height: 100,margin:10,aspectRatio:1 }} />
                )
                )}
            </View>
            <View style={styles.btncontainer}>
                <TouchableOpacity disabled={imguploadc} style={styles.btn} onPress={pickGalleyImage}> 
                    <Image source={require('../../../../../assets/AppIcons/Upload_Icon.png')} style={styles.btnimg} resizeMode="contain" />          
                    <Text style={styles.btntext}>Upload</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={imguploadc} style={styles.btn} onPress={pickImage}> 
                    <Image source={require('../../../../../assets/AppIcons/Camera_Icon.png')} style={styles.btnimg} resizeMode="contain" />          
                    <Text style={styles.btntext}>Click Picture</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.nxtbtn}>
                <PaperButton mode="contained" disabled={!image.length<1 ? false:true} onPress={()=>alert('Success')}   style={styles.btnnext} >
                    NEXT
                </PaperButton>
            </View>
        </View>
        </ScrollView>
    )

}
export default uploadproductpicComp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent:'flex-start',
    }, imgcontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow:1,
        marginBottom:20,
    }, img: {
        width: '100%',
        height: '100%',
        padding:10
    }, btncontainer: { 
        marginTop:20,
        flex:2,
        alignItems: 'flex-start', 
        flexWrap:'wrap',
        flexShrink:1,
        flexDirection:'row',
        justifyContent:"space-around" 
    },nxtbtn:{
        alignSelf:'flex-end',
        width:'100%',
    },btnnext:{
        justifyContent:'flex-end',  
        padding:10,
        borderRadius:5
    },btn:{ 
        width:100,
        height:100,
        aspectRatio:1,
        alignItems:'center',
        justifyContent:'center',
        borderColor:"grey",
        borderWidth:0.4,
        borderRadius:5
    }
    ,btnimg:{
        height:50,
        width:50
    },btntext:{
        marginTop:5,
        textAlign:'center'
    }
})