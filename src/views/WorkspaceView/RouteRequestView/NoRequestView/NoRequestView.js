/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View, Text } from "react-native";

const NoRequestView = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <Text>Pas de request</Text>
    </View>
  );
};

export default NoRequestView;
