/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';

const ParamsView = ({match}) => {
  console.log('paramsview', match);
  return (
    <View>
      <Text>params</Text>
    </View>
  );
};

export default ParamsView;
