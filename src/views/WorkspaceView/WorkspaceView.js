/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View } from "react-native";
import WorkspaceMenu from "components/WorkspaceMenu";
import RouteRequestView from "./RouteRequestView";

const WorkspaceView = ({ match }) => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
        <WorkspaceMenu />
        <View
          style={{
            width: "100%",
            flex: 1,
            height: "100%",
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          <RouteRequestView />
        </View>
      </View>
    </View>
  );
};
export default WorkspaceView;
