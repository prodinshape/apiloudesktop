import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const MenuResponseView = ({ setRouteResponse }) => {
  const arrayMenuItem = [
    {
      title: "Text",
      routeResponse: "text",
    },
    {
      title: "JSON",
      routeResponse: "json",
    },
  ];

  return (
    <View
      style={{
        padding: 5,
        flexDirection: "row",
        height: 30,
        width: "100%",
        alignItems: "center",
      }}
    >
      {arrayMenuItem.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setRouteResponse(item.routeResponse)}
        >
          <View>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuResponseView;
