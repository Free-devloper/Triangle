import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../../assets/Theme';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MyCard from '../../../Components/Card';
import ProductCard from '../../../Components/Card/ProductCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import { categorydata,categoriesimg } from '../Categories/categorydummydata';
 const SellComp=()=>{
     return(
<SafeAreaView style={styles.container}>
        <FlatList 
        data={categoriesimg}
        style={styles.container1}
        renderItem={(item,index)=>{
            console.log(item.item)
            return(
            <MyCard title={item[0]} name={require('../../../assets/AppIcons/Appliances.png')}/>
            )
        }}  
        numColumns={3}
        />
        {/* <MyCard title='Health' name={require('../../../assets/AppIcons/Health.png')}/>
        <MyCard title='Education' name={require('../../../assets/AppIcons/Education.png')}/>
        
        <MyCard title='Automobiles' name={require('../../../assets/AppIcons/Automobile.png')} />
        <MyCard title='Clothing' name={require('../../../assets/AppIcons/Clothes.png')} />
        <MyCard title='Electronics' name={require('../../../assets/AppIcons/Electronics.png')}/> */}
        {/* <MyCard title='Automobiles' name={require('../../../assets/AppIcons/Automobile.png')} />
        <MyCard title='Clothing' name={require('../../../assets/AppIcons/Clothes.png')} />
        <MyCard title='Electronics' name={require('../../../assets/AppIcons/Electronics.png')}/>
        <MyCard title='Furniture' name={require('../../../assets/AppIcons/Furniture.png')}/>
        <MyCard title='Jobs' name={require('../../../assets/AppIcons/Jobs.png')}/>
         <MyCard title='Phones' name={require('../../../assets/AppIcons/Phones.png')}/>
        <MyCard title='Services' name={require('../../../assets/AppIcons/Services.png')}/>
        <MyCard title='Realestate' name={require('../../../assets/AppIcons/Realestate.png')}/>
         <MyCard title='Animals' name={require('../../../assets/AppIcons/Animals.png')}/>
        <MyCard title='Laptop' name={require('../../../assets/AppIcons/Laptop.png')}/>
        <MyCard title='Community' name={require('../../../assets/AppIcons/Community.png')}/>
         <MyCard title='Personals' name={require('../../../assets/AppIcons/Personals.png')}/>
        <MyCard title='Travel' name={require('../../../assets/AppIcons/Travels.png')}/>
        <MyCard title='Internet' name={require('../../../assets/AppIcons/Internet.png')}/> */}
</SafeAreaView>
     )
    }

export default SellComp;   
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:20
    },container1:{
        width:'100%'
        },browsetxtcontainer:{
    },browsetxtcontainertxt:{
        ...theme.fonts.regular,
        fontSize:16
    },Viewallcontainer:{
        alignItems:'center',
        justifyContent:'center'
    },containertwo:{
        flex:1,
        marginTop:20,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },containerthree:{
        flex:1,
        marginTop:20,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
});