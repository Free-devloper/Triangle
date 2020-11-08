import React from 'react';
import {Text,StyleSheet} from 'react-native';
import theme from '../../assets/Theme/index';
 const Apptext=({childern})=>{
    return(
        <Text style={styles.fontsty}>
            {childern}
        </Text>
    )
}
export default Apptext
const styles=StyleSheet.create({
    fontsty:{
        ...theme.fonts.regular,
        fontSize:12
    }
});