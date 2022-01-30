import * as React from 'react';
import { BottomNavigation, Text,Colors } from 'react-native-paper';
import Main from './main';
import Hospital  from './hospitals';
import Profile from './profile';


const home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'record', title: 'Record', icon: 'ballot-recount' },
    { key: 'hospital', title: 'Hospitals', icon: 'hospital-building' },
    { key: 'profile', title: 'Profile', icon: 'account-child-circle' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    record: Main,
    hospital: Hospital,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: Colors.purple500 }}
     
    />
  );
};

export default home;