import * as React from 'react';
import {Text, View, ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import Bannerpage  from '../bannerpage';
import Sex from './sex';
import Name from './name'
import Age from './age';
import Weight  from './weight';
import homepage from '../bannerpage';
import styles from './styles';

const FormSlider = () => {

  return (
      <>
      <View style={styles.horizCont}>
        <ScrollView 
       
        pagingEnabled={true}
        >
       <Bannerpage></Bannerpage>
       <Name></Name>
       <Age></Age>
       <Sex></Sex>
       <Weight></Weight>
       </ScrollView>
       </View>
    </>
  );
};

export default FormSlider;