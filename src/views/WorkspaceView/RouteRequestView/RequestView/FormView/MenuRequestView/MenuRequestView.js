import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

/**
 * @name MenuRequestView
 *
 * @param {*} { routeRequest, setRouteRequest }
 * @return {View}
 */
const MenuRequestView = ({ routeRequest, setRouteRequest }) => {
  const arrayMenuItem = [
    {
      title: "Params",
      routeRequest: "params",
    },
    {
      title: "Authorization",
      routeRequest: "authorization",
    },
    {
      title: "Headers",
      routeRequest: "headers",
    },
    {
      title: "Body",
      routeRequest: "body",
    },
  ];

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        padding: 10,
      }}
    >
      {arrayMenuItem.map((menuItem, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setRouteRequest(menuItem.routeRequest)}
        >
          <Text>{menuItem.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuRequestView;
