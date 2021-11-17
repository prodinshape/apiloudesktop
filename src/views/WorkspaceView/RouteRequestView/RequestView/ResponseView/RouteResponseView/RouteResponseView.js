import React from "react";
import { TextInput } from "react-native";
import { JSONTree } from "react-native-json-tree";
import { Route } from "react-router-native";
import JsonView from "./JsonView";
import TextView from "./TextView";

const RouteResponseView = ({ returnResponse }) => {
  return (
    <>
      <TextView returnResponse={returnResponse} />
      <JsonView returnResponse={returnResponse} />
    </>
  );
};

export default RouteResponseView;
