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

const Header = () => {
  return (
    <View
      style={{
        height: 50,
        width: '100%',
        backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Link to="/workspace">
        <Text>Home</Text>
      </Link>
      <Text>Search</Text>
      <Text>Settings</Text>
    </View>
  );
};

export default Header;
