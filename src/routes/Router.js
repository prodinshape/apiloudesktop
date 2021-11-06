import React from 'react';
import {StyleSheet, Text, View, AppRegistry} from 'react-native';

import {NativeRouter, Route, Switch} from 'react-router-native';
import WorkspaceView from 'views/WorkspaceView';
import Header from 'components/Header';

const Router = props => {
  console.log('Router', props);

  return (
    <NativeRouter>
      <Header />
      <Route path="/workspace" component={WorkspaceView} />
    </NativeRouter>
  );
};

export default Router;
