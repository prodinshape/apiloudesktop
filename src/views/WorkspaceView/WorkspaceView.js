/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import Header from 'components/Header';
import WorkspaceMenu from 'components/WorkspaceMenu';
import RouteRequestView from './RouteRequestView';
import {NativeRouter, Route, Switch} from 'react-router-native';
import NoRequestView from './RouteRequestView/NoRequestView';
import RequestView from './RouteRequestView/RequestView';

const WorkspaceView = ({match}) => {
  console.log('WorkspaceView', match);
  console.log('raaaaah');
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View style={{flex: 1, width: '100%', flexDirection: 'row'}}>
        <WorkspaceMenu />
        <View
          style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'brown',
            height: '100%',
          }}>
          <RouteRequestView />
        </View>
      </View>
    </View>
  );
};
export default WorkspaceView;
