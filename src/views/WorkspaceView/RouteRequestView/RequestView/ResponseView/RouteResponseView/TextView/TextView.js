import React from "react";
import { TextInput, View, Text } from "react-native";

const TextView = ({ returnResponse, routeResponse }) => {
  if (routeResponse !== "text") {
    return null;
  }

  return (
    <Text selectable={true} style={{ padding: 10 }}>
      {JSON.stringify(returnResponse)}
    </Text>
  );
};

export default TextView;
