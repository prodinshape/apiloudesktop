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

  const arrayInput = [
    {
      placeholder: "Key",
      value: "key",
    },
    {
      placeholder: "Value",
      value: "value",
    },
  ];

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
                  {arrayInput.map((input, index1) => (
                    <View
                      key={index1}
                      style={{
                        minWidth: 200,
                        width: "50%",
                        borderWidth: 1,
                        borderColor: "black",
                        height: "100%",
                      }}
                    >
                      <TextInput
                        name={`body.${index}.${input.value}`}
                        onChangeText={handleChange(
                          `body.${index}.${input.value}`
                        )}
                        onBlur={handleBlur(`body.${index}.${input.value}`)}
                        value={bodyItem[input.value]}
                        placeholder={input.placeholder}
                      />
                    </View>
                  ))}

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
