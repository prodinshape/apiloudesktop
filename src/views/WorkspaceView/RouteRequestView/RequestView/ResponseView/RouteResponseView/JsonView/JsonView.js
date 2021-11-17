import React from "react";
import { Text } from "react-native";
import JSONTree from "react-native-json-tree";

const JsonView = ({ returnResponse, routeResponse }) => {
  if (routeResponse !== "json") {
    return null;
  }

  return (
    <JSONTree
      data={returnResponse}
      hideRoot={true}
      labelRenderer={(raw) => (
        <Text selectable={true} style={{ fontWeight: "bold" }}>
          {raw}
        </Text>
      )}
      valueRenderer={(raw) => (
        <Text selectable={true} style={{ fontStyle: "italic" }}>
          {raw}
        </Text>
      )}
    />
  );
};

export default JsonView;
