import { FieldArray } from "formik";
import React, { useState } from "react";
import { Button, TextInput, View, TouchableOpacity, Text } from "react-native";

const BodyView = ({
  register,
  routeRequest,
  body,
  handleBlur,
  handleChange,
}) => {
  if (routeRequest !== "body") {
    return null;
  }

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          height: 25,
          borderWidth: 1,
          borderColor: "black",
        }}
      >
        <View style={{ width: 200 }}>
          <Text>Key</Text>
        </View>
        <View style={{ width: 200 }}>
          <Text>Value</Text>
        </View>
      </View>
      <FieldArray
        name="body"
        render={({ insert, remove, push }) => (
          <View>
            {body.length > 0 &&
              body.map((bodyItem, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 25,
                    borderWidth: 1,
                    borderColor: "black",
                  }}
                >
                  <View
                    style={{
                      minWidth: 200,
                      width: "50%",
                      borderWidth: 1,
                      borderColor: "black",
                      height: "100%",
                    }}
                  >
                    <TextInput
                      name={`body.${index}.key`}
                      onChangeText={handleChange(`body.${index}.key`)}
                      onBlur={handleBlur(`body.${index}.key`)}
                      placeholder="Key"
                      value={bodyItem.key}
                    />
                  </View>
                  <View
                    style={{
                      minWidth: 200,
                      width: "50%",
                      borderWidth: 1,
                      borderColor: "black",
                      height: "100%",
                    }}
                  >
                    <TextInput
                      name={`body.${index}.value`}
                      onChangeText={handleChange(`body.${index}.value`)}
                      onBlur={handleBlur(`body.${index}.value`)}
                      value={bodyItem.value}
                      placeholder="Value"
                    />
                  </View>

                  <TouchableOpacity onPress={() => remove(index)}>
                    <View>
                      <Text>x</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            <Button
              title="Add term"
              className="secondary"
              onPress={() => push({ key: "", value: "" })}
            ></Button>
          </View>
        )}
      />
    </View>
  );
};

export default BodyView;
