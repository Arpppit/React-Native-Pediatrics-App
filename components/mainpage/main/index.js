import * as React from 'react';
import { Surface, Text, Avatar, IconButton,Colors } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';


const Main = () => {
    let today = new Date().toISOString().slice(0, 10)
    return (
    <>
    <View style = {styles.header}>
            
    </View>
    <View style = {styles.header1}>
            <Avatar.Icon size ={70} icon='alien' color={'#fff'}/>
            <Text style={styles.subTitles}> Name</Text>
            <Text> Last Updated on {today}</Text>
    </View>
 <View style={styles.row}>
     <View style={styles.item1}>
  <Surface style={styles.surface}>
      <IconButton 
      icon='plus-circle'
      color={'#ffffff'}
      size={30}
      onPress={() => console.log('Pressed')}
      ></IconButton>
     <Text style={styles.subTitles1}>Feeding</Text>
  </Surface>
  </View>
  
  <Surface style={styles.surface}>
      <IconButton 
      icon='medical-bag'
      color={'#ffffff'}
      size={30}
      onPress={() => console.log('Pressed')}
      ></IconButton>
     <Text style={styles.subTitles1}>Vaccination</Text>
  </Surface>

</View>
<View style={styles.row}>
     <View style={styles.item1}>
     <Surface style={styles.surface}>
      <IconButton 
      icon='weight-kilogram'
      color={'#ffffff'}
      size={30}
      onPress={() => console.log('Pressed')}
      ></IconButton>
     <Text style={styles.subTitles1}>Weight</Text>
  </Surface>
  </View>
  
  <Surface style={styles.surface}>
      <IconButton 
      icon='plus-circle'
      color={'#ffffff'}
      size={30}
      onPress={() => console.log('Pressed')}
      ></IconButton>
     <Text style={styles.subTitles1}>Surface</Text>
  </Surface>

</View>
<View style={styles.row}>
     <View style={styles.item2}>
     <Surface style={styles.surface}>
      <IconButton 
      icon='history'
      color={'#ffffff'}
      size={30}
      onPress={() => console.log('Pressed')}
      ></IconButton>
     <Text style={styles.subTitles1}>History</Text>
  </Surface>
  </View>

</View>
  </>
)};

export default Main;

