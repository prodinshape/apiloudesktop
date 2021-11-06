/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NoRequestView = () => {
  console.log('no reuqe');
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  getData();

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: 'purple',
        height: '100%',
      }}>
      <Text>Pas de request</Text>
    </View>
  );
};

export default NoRequestView;
