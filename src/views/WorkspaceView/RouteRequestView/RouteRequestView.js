/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import {Switch, Route, Link} from 'react-router-native';
import NoRequestView from './NoRequestView';
import RequestView from './RequestView';

const RouteRequestView = ({match}) => {
  return (
    <Switch>
      <Route exact path="/workspace" component={NoRequestView} />
      <Route path={'/workspace/request/:requestId'} component={RequestView} />
    </Switch>
  );
};
export default RouteRequestView;
