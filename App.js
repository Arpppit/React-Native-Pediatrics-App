import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Pressable } from 'react-native';
import { Button } from 'react-native-web';
import bannerpage  from './components/bannerpage';
import FormSlider from './components/multi-step-form';
import Home from './components/mainpage'
export default function App() {
  return (
    <>
  <FormSlider></FormSlider>
    </>
  );
}