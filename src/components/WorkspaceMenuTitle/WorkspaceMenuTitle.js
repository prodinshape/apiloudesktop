/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';

const WorkspaceMenuTitle = () => {
  return (
    <View
      style={{
        height: 50,
        width: '100%',
        backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text>My workspace</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>New</Text>
        <Text>Import</Text>
      </View>
    </View>
  );
};

export default WorkspaceMenuTitle;
