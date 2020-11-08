import * as React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import { Avatar, Button, Card,Text, Title, Paragraph } from 'react-native-paper';
import theme from '../../assets/Theme';

const MyCard = (props) => {
    // let imgurl=`../../assets/AppIcons/${props.name}.png`;
    return(
    <Card style={styles.container} onPress={()=>{props.action()}}>
        <View style={styles.contentcontainer}>
            <Image source={props.imgurl}  style={styles.img} resizeMode='contain' />
    <Text style={styles.imgtxt}>{props.title}</Text>
        </View>
  </Card>
);
}

export default MyCard;
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        margin:5,
        borderRadius:5,
        elevation:1,
        shadowColor:'grey',
        borderColor:'grey',
        borderWidth:0.3,
    },contentcontainer:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
    },img:{
        width:50,
        height:50
    },imgtxt:{
        ...theme.fonts.regular,
        fontSize:12,
        marginTop:10,
        alignSelf:'center'
    }
})