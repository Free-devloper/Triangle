import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../../assets/Theme';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MyCard from '../../../Components/Card';
import ProductCard from '../../../Components/Card/ProductCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import { categorydata } from '../Categories/categorydummydata';
 const HomeComp=(props)=>{
     return(
<SafeAreaView style={styles.container}>
<ScrollView contentContainerStyle={{width:'100%',paddingBottom:20}} showsHorizontalScrollIndicator={false} indicatorStyle='white' >
    <View style={styles.container1}>
        <View style={styles.browsetxtcontainer}><Text style={styles.browsetxtcontainertxt}>Browse Categories</Text></View>
        <View style={styles.Viewallcontainer}><TouchableOpacity containerStyle={{flex:1}}><Text style={styles.browsetxtcontainertxt,{color:'red'}} onPress={()=>props.navigation.navigate('Categories',{data:categorydata,HeaderTitle:'Categories',inner:false})}>View All</Text></TouchableOpacity></View>
    </View>
    <View style={styles.containertwo}>
        <MyCard title='Appliances' name={require('../../../assets/AppIcons/Appliances.png')}/>
        <MyCard title='Health' name={require('../../../assets/AppIcons/Health.png')}/>
        <MyCard title='Education' name={require('../../../assets/AppIcons/Education.png')}/>
    </View>
    <View style={styles.containertwo}>
        <MyCard title='Business' name={require('../../../assets/AppIcons/Business.png')}/>
        <MyCard title='Automobiles' name={require('../../../assets/AppIcons/Automobile.png')} />
        <MyCard title='Clothing' name={require('../../../assets/AppIcons/Clothes.png')} />
    </View>
    <View style={styles.containertwo}>
    <MyCard title='Electronics' name={require('../../../assets/AppIcons/Electronics.png')}/>
        <MyCard title='Furniture' name={require('../../../assets/AppIcons/Furniture.png')}/>
        <MyCard title='Jobs' name={require('../../../assets/AppIcons/Jobs.png')}/>
    </View>
    <View style={styles.container1}>
        <View style={styles.browsetxtcontainer,{marginTop:20}}><Text style={styles.browsetxtcontainertxt}>Reccomendations For You</Text></View>
    </View>
    <View style={styles.containerthree}>
        <ProductCard fav={true}/>
        <ProductCard fav={false} />
    </View>
    <View style={styles.containerthree}>
        <ProductCard fav={true}/>
        <ProductCard fav={true} />
    </View>
    <View style={styles.containerthree}>
        <ProductCard fav={true}/>
        <ProductCard fav={false} />
    </View>
</ScrollView>
</SafeAreaView>
     )
    }

export default HomeComp;   
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:15,
        paddingHorizontal:20,
        flexBasis:100,
        flexDirection:"column",
        justifyContent:'space-between',
        backgroundColor:'#fff',
    },container1:{
        flexDirection:'row',
        justifyContent:'space-between'
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