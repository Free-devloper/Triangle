import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text } from 'react-native';
import { Appbar } from 'react-native-paper';
const Header = (props) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
      <>
      <StatusBar backgroundColor='#5115e8' animated={true} style="inverted"/>
    <Appbar.Header style={{backgroundColor:'#5115e8',elevation:10}}>
        {props.childern}
        {/* <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
    </Appbar.Header>
    </>
  );
};
export default Header;