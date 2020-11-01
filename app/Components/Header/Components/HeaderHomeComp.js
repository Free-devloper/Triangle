import * as React from 'react';
import { Text, StyleSheet, Platform, StatusBar as PhoneBar, View } from 'react-native';
import { Badge, Searchbar } from 'react-native-paper';
import FlatIcon from '../../../assets/Fonts';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../assets/Theme';
const HeaderHomeComp = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.Contentcontainer}>
            <View style={styles.locationalert}>
                <View style={styles.locationcontainer}>
                    <FlatIcon name='location' size={24} color='#fff' />
                    <Text style={styles.locationtxt}>Current Location</Text>
                </View>
                <View style={styles.notificationcontainer}>
                    <Ionicons name='ios-notifications' style={{ marginRight: 1 }} size={28} color='#fff' />
                    <Badge style={styles.Badge} size={12}>3</Badge>
                </View>
            </View>
            <View style={styles.Searchbarcontainer}>
                <Searchbar
                    placeholder="Find Cars, Mobile Phones and more"
                    onChangeText={onChangeSearch}
                    value={searchQuery} 
                    style={styles.Searchbar}
                    multiline={false}
                    inputStyle={{fontSize:14,textAlign:"left",...theme.fonts.regular}}
                    />
            </View>
        </View>
    )
}
export default HeaderHomeComp;
const styles = StyleSheet.create({
    Contentcontainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10
    }, locationalert: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    }, locationtxt: {
        ...theme.fonts.medium,
        color: '#fff',
        marginLeft: 5
    }, locationcontainer: {
        flexDirection: 'row'
    }, notificationcontainer: {
        flexDirection: 'row',
    }, Badge: {
        backgroundColor: '#0ec200',
        position: 'absolute',
        alignSelf: 'flex-start',
        right: -7,
    }, Searchbarcontainer: {
        width: '100%',
        marginTop:39,
        alignSelf:'center',
        borderRadius:0,
        position:'absolute',
        padding:5,
        justifyContent: 'center'
    },Searchbar:{
        borderRadius:0,
    }
});