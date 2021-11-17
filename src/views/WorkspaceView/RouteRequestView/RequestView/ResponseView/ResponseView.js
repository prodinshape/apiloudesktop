/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import useRequest from "hooks/request/useRequest";
import JSONTree from "react-native-json-tree";
import { NativeRouter, Route, Link } from "react-router-native";
import RouteResponseView from "./RouteResponseView";

const ResponseView = ({ requestId }) => {
  const { data, error } = useRequest({
    requestId,
  });

  const returnResponse = data || error;

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        paddingTop: 5,
      }}
    >
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          height: 30,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Response : </Text>
        <View style={{ flexDirection: "row" }}>
          <Text>Status : </Text>
          <Text>{returnResponse ? error?.message || 200 : ""}</Text>
        </View>
      </View>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          height: 30,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Link to="">
          <Text>Text</Text>
        </Link>
        <Link to="/json">
          <Text>JSON</Text>
        </Link>
      </View>
      <View style={{ height: 300 }}>
        {returnResponse && (
          <ScrollView style={{ height: "100%", padding: 5 }}>
            <View style={{ height: "100%", margin: 5 }}>
              <RouteResponseView returnResponse={returnResponse} />
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default ResponseView;
