import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text,StyleSheet,Platform,StatusBar as PhoneBar, View ,Keyboard} from 'react-native';
import { Appbar, Badge } from 'react-native-paper';
const StatusBarHeight=Platform.OS === 'ios' ? 11 :PhoneBar.currentHeight;
const Header =(props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const keyboardShowListener = React.useRef(null);
  const keyboardHideListener = React.useRef(null);
  React.useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () => setIsOpen(true));
    keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () => setIsOpen(false));
    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    }
  })
  const styles = StyleSheet.create({
    bottom: {
      backgroundColor:'#5115e8',
      left: 0,
      right: 0,
      position:'absolute',
      height:isOpen===true?props.height+StatusBarHeight:props.height,
      paddingTop:isOpen===false?0:StatusBarHeight,
      top:!isOpen&&StatusBarHeight||isOpen&&0,
    }
  });
  return (
      <>
      <StatusBar backgroundColor='#5115e8' hidden={isOpen} animated={true} style="inverted"/>
      <Appbar style={styles.bottom}>
       {props.childern}
  </Appbar>
    </>
  );
};
export default Header;