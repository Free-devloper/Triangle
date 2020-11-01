import * as React from 'react';
import { StyleSheet, View,Image,Dimensions } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import { Avatar, Button, Card,Text, Title, Paragraph, Badge, Divider } from 'react-native-paper';
import theme from '../../assets/Theme';
import { MaterialIcons} from '@expo/vector-icons';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const ProductCard = (props) => {
    const [favorite,setfavorite]=React.useState(props.fav);
    const addToFavorite=()=>{
        favorite==false ? setfavorite(true) : setfavorite(false)
    }
    return(
        <>
    <Card style={styles.container}>
        <Badge style={styles.floatingTextLabel}>
          Featured
        </Badge>
   
        <View style={styles.contentcontainer}>
            <View style={styles.imgcontainer}>
                <Image source={require('../../assets/ImageBackground/productbg.png')} style={styles.img}  />
            </View>
            <View style={styles.containerlkeprice}>
                <View style={styles.pricecontainer}><Text style={styles.imgtxt}>$1500</Text></View>
                <View style={styles.lkecontainer}><AntDesign onPress={()=>{addToFavorite()}} name={favorite&&'heart'||!favorite&&'hearto'} color={favorite&&'#ff9705'||!favorite&&'grey'} size={16} /></View>
            </View>
            <View style={styles.adtitle}>
                <Text numberOfLines={2} style={styles.adtitletxt}>Brand new Sofa with   3year</Text>
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.locationdetailscontainer}><MaterialIcons name='location-on' size={12}/><Text numberOfLines={2} style={styles.locationdetailscontainertxt}>Lower Manhattan</Text><Divider style={{borderWidth:0.5,width:12,transform:[{rotate:'90deg'}]}}/>
                <Text numberOfLines={2} style={styles.locationdetailscontainertxt}>350 Views</Text>
                <Divider style={{borderWidth:0.5,width:12,transform:[{rotate:'90deg'}]}}/>
                <Text style={styles.locationdetailscontainertxt} numberOfLines={2}>6 hours Ago</Text>
                </View>
            </View>
        </View>
  </Card>
  </>
);
}

export default ProductCard;
const styles=StyleSheet.create({
    container:{
        zIndex:99,
        padding:5,
        borderRadius:5,
        alignItems:'center',
        elevation:1,
        shadowColor:'grey',
        borderColor:'grey',
        borderWidth:0.5,
        overflow:'hidden'
    },contentcontainer:{
        flex:1,
        alignItems:'center',
    },img:{
        maxWidth:windowWidth/2-35,
        maxHeight:windowWidth/2-35,
        width:windowWidth/2-35,
        height:windowWidth/3-20,
    },imgtxt:{
        ...theme.fonts.medium,
        fontSize:14,
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
    },pricecontainer:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },lkecontainer:{
        flex:1,
        alignItems:'flex-end',
        alignSelf:'flex-end',
        marginRight:5,
    },adtitle:{
        flex:1,
        flexDirection:'row',
        alignSelf:'flex-start',
        width:'100%',
        overflow:'hidden',
        marginTop:5
    },adtitletxt:{
       width:windowWidth/2-35,
        ...theme.fonts.medium,
        textAlignVertical:'center',
        textTransform:"capitalize"
    },floatingTextLabel:{
        zIndex:1,
        ...theme.fonts.medium,
        fontSize:10,
        width:'100%',
        position:'absolute',
        borderRadius:0,
        marginTop:15,
        left:-50,
        alignItems:'center',
        justifyContent:'center',
        color:'#fff',
        backgroundColor:'#ff9705',
        transform:[{rotate:'-45deg'}],
        textTransform:"uppercase",
        textAlign:'center'
    },floatingTextLabelTxt:{
        ...theme.fonts.medium,
        textAlign:"center",
        color:'#fff',
    },detailContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        width:'100%',
        paddingTop:10,
        paddingBottom:5,
        justifyContent:'flex-start',
    },locationdetailscontainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },locationdetailscontainertxt:{
        ...theme.fonts.regular,
        flex:1,
        fontSize:11,
        textAlign:'center'
    }
})