/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';

const WorkspaceCollectionList = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'green',
      }}>
      <Text>+</Text>
      <Text>Nouvelle collection</Text>
      <Link to="/workspace/request/plop">
        <Text>plop</Text>
      </Link>
      <Link to="/workspace/request/chocolat">
        <Text>Chocolat</Text>
      </Link>
    </View>
  );
};

export default WorkspaceCollectionList;
