import * as React from 'react';
import { Pressable } from 'react-native';
import { List, Colors, Divider, Text } from 'react-native-paper';
import { View  ,SafeAreaView, ScrollView} from 'react-native-web';
import styles  from './styles';
import HModal  from './hospitalModal';
import react from 'react';
const Hospital = () => {
    const [clicked,SetClicked] = react.useState(false)
    return(

<>
    <View style={styles.headingContainer}>
        <Text style ={styles.textTitles}> Hospitals </Text>
    </View>
    <Text style = {styles.subTitles}> Consult from quality doctor in your city.</Text>
    <ScrollView style={styles.container}>
    <Pressable
        onPress={() => {
          console.log(clicked);
          SetClicked(!clicked)
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : '##F8F7FE'
          },
          
        ]}>
    {clicked && <HModal/>}
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
  </Pressable>
  <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
    <Divider />
  <List.Item
    title="First Item"
    description="Item description lorem ipsum asdlka asda kasdj ad  kkasd llawe qr"
    left={props => <List.Icon {...props} icon="hospital-marker" color={Colors.purple500} />}
  />
  </ScrollView>

  </>
)};

export default Hospital;