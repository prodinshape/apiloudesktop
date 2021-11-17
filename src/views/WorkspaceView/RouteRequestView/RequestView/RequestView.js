/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import ResponseView from "./ResponseView";
import FormView from "./FormView";

const RequestView = ({ match }) => {
  const { requestId } = match.params;

  return (
    <NativeRouter>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 400,
            padding: 10,
          }}
        >
          <FormView requestId={requestId} />
        </View>
        <ResponseView requestId={requestId} />
      </View>
    </NativeRouter>
  );
};
export default RequestView;
