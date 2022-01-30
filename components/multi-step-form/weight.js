import { View, Text } from 'react-native';
import React from 'react';
import { TextInput , Button,Colors} from 'react-native-paper';
import styles from './styles';
const Weight = () => {
    const [text, setText] = React.useState("");
  return (
    <>
    <View style={styles.container}>
    <Text style= {styles.subTitles}> Weight </Text>
    <TextInput
      label="Name"
      value={text}
      styles={styles.inputL}
      onChangeText={text => setText(text)}
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

export default Weight;
