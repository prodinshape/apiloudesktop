import React from "react";
import { TextInput, View } from "react-native";

import JsonView from "./JsonView";
import TextView from "./TextView";

const RouteResponseView = ({ returnResponse, routeResponse }) => {
  return (
    <View style={{ height: "100%", margin: 5 }}>
      <TextView returnResponse={returnResponse} routeResponse={routeResponse} />
      <JsonView returnResponse={returnResponse} routeResponse={routeResponse} />
    </View>
  );
};

export default RouteResponseView;
