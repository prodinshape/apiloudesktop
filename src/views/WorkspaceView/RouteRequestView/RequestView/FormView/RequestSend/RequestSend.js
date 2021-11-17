/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import useRequest from "hooks/request/useRequest";
import DropDownPicker from "react-native-dropdown-picker";

const RequestSend = ({
  requestId,
  handleSubmit,
  url,
  handleBlur,
  handleChange,
}) => {
  const { isLoading } = useRequest({ requestId });

  const [open, setOpen] = useState(false);
  const [pickerValue, setPickerValue] = useState("get");
  const [items, setItems] = useState([
    { label: "Get", value: "get" },
    { label: "Post", value: "post" },
    { label: "Put", value: "put" },
    { label: "Patch", value: "patch" },
    { label: "Delete", value: "delete" },
  ]);

  return (
    <View
      style={{
        flexDirection: "row",
        zIndex: 10,
        borderRadius: 5,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          padding: 10,
          alignItems: "center",
          width: "90%",
          borderRadius: 5,
          flexDirection: "row",
        }}
      >
        <View style={{ width: 110, zIndex: 1000 }}>
          <DropDownPicker
            open={open}
            value={pickerValue}
            onChangeValue={handleChange("method")}
            style={{ height: 30 }}
            items={items}
            setOpen={setOpen}
            setValue={setPickerValue}
            setItems={setItems}
          />
        </View>
        <View style={{ marginLeft: 10, width: "50%" }}>
          <TextInput
            style={{ width: "100%" }}
            onChangeText={handleChange("url")}
            onBlur={handleBlur("url")}
            value={url}
            placeholder="Enter request url"
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleSubmit} style={{ cursor: "pointer" }}>
        <View>
          {!isLoading && <Text>Send</Text>}
          {isLoading && <ActivityIndicator animating={isLoading} />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RequestSend;
