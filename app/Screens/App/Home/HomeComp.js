import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../../assets/Theme';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MyCard from '../../../Components/Card';
import ProductCard from '../../../Components/Card/ProductCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import { categoriesimgdata, categorydata } from '../Categories/categorydummydata';
 const HomeComp=(props)=>{
    const _action=()=>{
        props.navigation.navigate('Product');
    }
     return(
<SafeAreaView style={styles.container}>
    <View style={styles.container1}>
        <View style={styles.browsetxtcontainer}><Text style={styles.browsetxtcontainertxt}>Browse Categories</Text></View>
        <View style={styles.Viewallcontainer}><TouchableOpacity containerStyle={{flex:1}}><Text style={styles.browsetxtcontainertxt,{color:'red'}} onPress={()=>props.navigation.navigate('Categories',{data:categorydata,HeaderTitle:'Categories',inner:false})}>View All</Text></TouchableOpacity></View>
    </View>
    <View style={styles.containertwo}>
    <FlatList 
        data={categoriesimgdata}
        showsHorizontalScrollIndicator={false}
        style={styles.containerList}
        keyExtractor={(item,index)=>item[0]+index}
        renderItem={(item,index)=>{
            return(
            <MyCard {...props} title={item.item[0]} action={()=>{props.navigation.navigate('Product',{screen:'ProductDetailsScreen'})}} imgurl={item.item[1]}/>
            )
        }}  
        numColumns={3}
        />
    </View>
    {/* <View style={styles.containertwo}>
        <MyCard title='Appliances' action={()=>{_action}} {...props} name={require('../../../assets/AppIcons/Appliances.png')}/>
        <MyCard title='Health' action={()=>{_action}} {...props} name={require('../../../assets/AppIcons/Health.png')}/>
        <MyCard title='Education' action={()=>{_action}} {...props} name={require('../../../assets/AppIcons/Education.png')}/>
    </View>
    <View style={styles.containertwo}>
        <MyCard title='Business' action={()=>{_action}} {...props} name={require('../../../assets/AppIcons/Business.png')}/>
        <MyCard title='Automobiles' action={()=>{_action}} {...props} name={require('../../../assets/AppIcons/Automobile.png')} />
        <MyCard title='Clothing' action={()=>{_action}} {...props} name={require('../../../assets/AppIcons/Clothes.png')} />
    </View>
    <View style={styles.containertwo}>
    <MyCard title='Electronics' action={()=>{_action}} {...props} name={require('../../../assets/AppIcons/Electronics.png')}/>
        <MyCard title='Furniture' action={()=>{_action}} {...props} name={require('../../../assets/AppIcons/Furniture.png')}/>
        <MyCard title='Jobs' action={()=>{_action}}s {...props} name={require('../../../assets/AppIcons/Jobs.png')}/>
    </View> */}
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
</SafeAreaView>
     )
    }

export default HomeComp;   
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        flexBasis:100,
        flexDirection:"column",
        justifyContent:'space-between',
        backgroundColor:'#fff',
    },containerList:{
        width:'100%'
    },
    container1:{
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
    },containerthree:{
        flex:1,
        marginTop:20,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
});