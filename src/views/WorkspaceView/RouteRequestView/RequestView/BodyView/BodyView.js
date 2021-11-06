/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';

const BodyView = ({match}) => {
  console.log('paramsview', match);
  return (
    <View>
      <Text>body</Text>
    </View>
  );
};

export default BodyView;
