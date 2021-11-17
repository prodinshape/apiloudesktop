/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Text, View } from "react-native";

const WorkspaceMenuTitle = () => {
  return (
    <View
      style={{
        height: 50,
        padding: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>My workspace</Text>
    </View>
  );
};

export default WorkspaceMenuTitle;
