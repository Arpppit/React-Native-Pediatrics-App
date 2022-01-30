import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { Avatar, TextInput } from 'react-native-paper';

const Profile = () => {
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
    <TextInput
      label="Name"
      value={'Male'}
      styles={styles.inputL}
      disabled={true}
    />
    </View>
    <View style={styles.row}>
    <TextInput
      label="Age"
      value={'23 yrs'}
      styles={styles.inputL}
      disabled={true}
    />
    </View>
    <View style={styles.row}>
    <TextInput
      label="Weight"
      value={'78 kgs'}
      styles={styles.inputL}
      disabled={true}
    />
    </View>
    <View style={styles.row}>
    <TextInput
      label="Height"
      value={'6ft'}
      styles={styles.inputLast}
      disabled={true}
    />
    </View>
    </>
  );
};

export default Profile;
