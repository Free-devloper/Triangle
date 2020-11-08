import React, { useState } from 'react'
import { Text,StyleSheet,View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';
import theme from '../../../../assets/Theme';
import Input from '../../../../Components/Inputs/TextInput'
function AddproductComp(props) {
    const [Company, setCompany] = useState('')
    const [Fuel, setFuel] = useState('')
    const [ModelYear, setModel] = useState('')
    const [KMDriven, setKM] = useState('')
    const [ADTitle, setAdtitle] = useState('')
    const [Description, setDescrip] = useState('');
    const [disabled,setdiabled]=useState(false);
    const oneditInput=()=>{
        if(Company==''||Fuel==''||ModelYear==''||KMDriven==''||ADTitle==''||Description=='')
        {
            setdiabled(true)
        }else{
    
            setdiabled(false)
        }
    }
    return (
        <>
        <View style={styles.container}>
            <View style={styles.containertwo}>
                <Text style={styles.containertwotext}>* Required Fields </Text>
            </View>
            <ScrollView>
            <View style={styles.containerthree}>
                <Input mode={'flat'} label='*Company' style={styles.inputStyle} value={Company} onChangeText={(value)=>{setCompany(value)}} />
                <Input mode={'flat'} label='*Fuel' style={styles.inputStyle} value={Fuel} onChangeText={(value)=>{setFuel(value)}} />
                <Input mode={'flat'} label='*Model Year' style={styles.inputStyle} value={ModelYear} onChangeText={(value)=>{setModel(value)}} />
                <Input mode={'flat'} label='*KM Driven' style={styles.inputStyle} value={KMDriven} onChangeText={(value)=>{setKM(value)}} />
                <Input mode={'flat'} label='*Ad Title' style={styles.inputStyle} value={ADTitle} onChangeText={(value)=>{setAdtitle(value)}} />
                <Input mode={'flat'} multiline={true} label="Description"  style={styles.inputStyle} value={Description} onChangeText={(value)=>{setDescrip(value)}} />
                </View>
                </ScrollView>
            <View style={styles.containerfour}>
                <Button mode={"contained"} style={styles.nextbtn} onPress={()=>{props.navigation.navigate('Uploadproductpic')}} disabled={disabled}>
                    NEXT
                </Button>
                </View> 
        </View>
        </>
    )
}

export default AddproductComp

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        flexDirection:'column',
        justifyContent:'space-between'
    },inputStyle:{
        backgroundColor:'#fff',
        borderColor:'#fff'
    },containertwo:{
    },containertwotext:{
        ...theme.fonts.medium,
        color:'red',
    },containerthree:{
        flex:1,
        flexBasis:100
    },containerfour:{
        justifyContent:'flex-start'
    },nextbtn:{
        padding:10,
        borderRadius:5,
    }
});