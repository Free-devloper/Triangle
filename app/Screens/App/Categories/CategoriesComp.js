import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text,FlatList, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

function getArrayDepth(value) {
    return Array.isArray(value) ? 
      1 + Math.max(...value.map(getArrayDepth)) :
      0;
  }
  
const CategoriesComp=()=>{
    const route=useRoute();
    const navigation=useNavigation();
    // <Text>{route.params.data[1][1][0]}</Text>7
    const ItemPress = (item) => {  
        console.log(getArrayDepth(item));
        {getArrayDepth(item)>=2?navigation.navigate('Categories',{data:item[1],HeaderTitle:item[0],inner:getArrayDepth(item)>=2?true:false}) :
        alert('Depth Reached')
    }
    } 
    const renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 10,  
                    width: "100%",  
                    backgroundColor: "#fff",  
                }}  
            />  
        );  
    }; 

    return (
        <>
         <View style={styles.container}>  
                <FlatList  
                    data={route.params.data}
                    keyExtractor={(item, index) =>item[0]+index}
                    renderItem={({item}) =>  
                        <TouchableOpacity style={styles.item}  
                              onPress={()=>{ItemPress(item)}}><Text>{getArrayDepth(item)>=2?item[0]:item}</Text></TouchableOpacity>}  
                    ItemSeparatorComponent={renderSeparator}  
                />  
            </View>  
        </>
    )
}
const styles = StyleSheet.create({  
    container: {  
        flex: 1,
        width:"100%"
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,
        backgroundColor:'#fff'  
    },  
})  

export default CategoriesComp;
