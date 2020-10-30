import * as React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import { Avatar, Button, Card,Text, Title, Paragraph } from 'react-native-paper';
import theme from '../../assets/Theme';

const ProductCard = (props) => {
    return(
    <Card style={styles.container}>
        <View style={styles.contentcontainer}>
        {/* <View style={styles.featuredcontainer}>
            <Text>store</Text>
        </View> */}
            <View style={styles.imgcontainer}>
                <Image source={require('../../assets/ImageBackground/productbg.png')} style={styles.img}  />
            </View>
            <View style={styles.containerlkeprice}>
                <View style={styles.pricecontainer}><Text style={styles.imgtxt}>$1500</Text></View>
                <View style={styles.lkecontainer}><AntDesign name={props.fav&&'heart'||!props.fav&&'hearto'} color={props.fav&&'#ff9705'||!props.fav&&'grey'} size={12} /></View>
            </View>
            <View style={styles.adtitle}>
                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.adtitletxt}>Brand new Sofa with 3year</Text>
            </View>
        </View>
  </Card>
);
}

export default ProductCard;
const styles=StyleSheet.create({
    container:{
        padding:5,
        borderRadius:5,
        alignItems:'center',
        elevation:1,
        shadowColor:'grey',
        borderColor:'grey',
        borderWidth:0.5,
        flexDirection:'column',
    },contentcontainer:{
        flex:1,
        alignItems:'center',
        flexDirection:'column',
    },img:{
        width:140,
        height:80
    },imgtxt:{
        ...theme.fonts.medium,
        fontSize:12,
        marginTop:10,
    },imgcontainer:{
        alignItems:'center',
    },featuredcontainer:{
        backgroundColor:'yellow',
    },containerlkeprice:{
        flex:1,
        flexGrow:1,
        flexDirection:'row',
        flexBasis:100,
        justifyContent:'space-between'
    },pricecontainer:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },lkecontainer:{
        flex:1,
        alignItems:'flex-end',
        alignSelf:'flex-end'
    },adtitle:{
        flex:1,
        flexDirection:'row',
        alignSelf:'flex-start',
        width:'100%',
        overflow:'hidden',
        marginTop:5
    },adtitletxt:{
        width:140,
        ...theme.fonts.medium,
        textAlignVertical:'center',
        textTransform:"capitalize"
    }
})