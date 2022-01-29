import { View, Text, ImageBackground, Button, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles'
const homepage = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.headingContainer}> 
      
        <View style = {styles.titles}>
          <Text style = {styles.textTitles}> KidCave</Text>
          <Text style = {styles.subTitles}> Pediatric diet help for kids</Text>
        </View> 
        <ImageBackground source={ require('../../assets/images/homescreen.jpg')} style={styles.banner}></ImageBackground>          
      </View>
      <View style={styles.button}>
        <Text style ={styles.subTitles}> Join Us to get started with more healthcare for your baby. </Text>
      <Button title='Lets Get Started' onPress={() => {Alert.alert('started')}} color='purple' style={styles.startButton}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default homepage;
