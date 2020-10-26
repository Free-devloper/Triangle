import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import {enableScreens} from 'react-native-screens'
import TriangleApp from './app/NavHandling/index';
export default function App() {
  enableScreens();
  return (
    <>
    <TriangleApp/>
   </> 
  );
}


