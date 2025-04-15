import {View, Text} from 'react-native';
import React from 'react';
import useUserStore from '../../zustand/stores/useUserStore';
import {styles} from './styles';

const HomeScreen = () => {
  const userDetails: any = useUserStore(state => state.userDetails);
  console.log('userDetails', userDetails);
  return (
    <View style={styles.container}>
      <Text>{userDetails.name}</Text>
      <Text>{userDetails.email}</Text>
    </View>
  );
};

export default HomeScreen;
