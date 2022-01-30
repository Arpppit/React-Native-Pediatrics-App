import { View, Text } from 'react-native';
import React from 'react';
import { TextInput ,Button,Colors} from 'react-native-paper';
import styles from './styles';

const Age = () => {
    const [age, setAge] = React.useState('0-3');
  return (
    <>
    <View style={styles.container}>
    <Text>With time we need to be more careful towards body ..</Text>
    <Text> What age group do you belong </Text>
    {/* <TextInput
      label="Your Age"
      value={text}
      onChangeText={text => setText(text)}
    /> */}
   
    <Button
    icon="account-arrow-right"
    mode='contained'
    label = 'next'
    color={Colors.purple500}
    size={20}
    style={styles.nextButton}
    onPress={() => console.log('Pressed')}
    
  >Next</Button>
    </View>
    </>
  );
};


export default Age;
