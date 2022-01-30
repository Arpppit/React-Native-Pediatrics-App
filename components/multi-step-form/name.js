import { View, Text } from 'react-native';
import React from 'react';
import { TextInput} from 'react-native-paper';
import { Button, Colors } from 'react-native-paper';
import styles from './styles' 
const Name = () => {
    const [text, setText] = React.useState("");
  return (
    <>
    <View style= {styles.container}>

    <Text style= {styles.subTitles}> What is name of your baby </Text>
    <TextInput
      label="Name"
      value={text}
      onChangeText={text => setText(text)}
      styles={styles.inputL}
    />
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

export default Name;
