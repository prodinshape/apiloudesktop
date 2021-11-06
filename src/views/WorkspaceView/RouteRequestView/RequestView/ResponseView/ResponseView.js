/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import useRequest from 'hooks/request/useRequest';

const ResponseView = ({requestId}) => {
  const {data} = useRequest({
    requestId,
  });

  console.log(requestId);

  return (
    <ScrollView
      style={{
        height: '100%',
        backgroundColor: '#654321',
        width: '100%',
      }}>
      <View
        style={{
          height: '100%',
          backgroundColor: '#654321',
          width: '100%',
          padding: 20,
        }}>
        <Text>Response : </Text>
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};

export default ResponseView;
