/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import WorkspaceMenuTitle from 'components/WorkspaceMenuTitle';
import WorkspaceSubMenu from 'components/WorkspaceSubMenu';
import WorkspaceCollectionList from 'components/WorkspaceCollectionList';

const WorkspaceMenu = () => {
  return (
    <View
      style={{
        height: '100%',
        width: 300,
        backgroundColor: 'grey',
      }}>
      <WorkspaceMenuTitle />
      <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
        <WorkspaceSubMenu />
        <WorkspaceCollectionList />
      </View>
    </View>
  );
};

export default WorkspaceMenu;
