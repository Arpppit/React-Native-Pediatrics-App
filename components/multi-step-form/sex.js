import { View, Text } from 'react-native';
import React from 'react';
import { TextInput , RadioButton, Button,Colors} from 'react-native-paper';
import styles from './styles' 
const Sex = () => {
    const [checked, setChecked] = React.useState("Male");
  return (
    <>
    <View style= {styles.container}>
    <Text style= {styles.subTitles}> Hi There! Nice to meet you. </Text>
    <Text style= {styles.subTitles}> Are you baby-girl or baby-boy</Text>
    
    <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
<View>
        <Text >  Male</Text>
        <RadioButton
        value="Male"
        color={Colors.purple500}
      
     
      />
      </View>
    <View>
        <Text> Female </Text>
       <RadioButton

        value="Female"
        color={Colors.purple500}
        
      />
    </View>
    </RadioButton.Group>
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

export default Sex;