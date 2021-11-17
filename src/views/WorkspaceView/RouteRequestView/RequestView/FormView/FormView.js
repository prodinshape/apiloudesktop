import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import useRequest from "hooks/request/useRequest";

import BodyView from "./BodyView";
import ParamsView from "./ParamsView";
import RequestSend from "./RequestSend";
import MenuRequestView from "./MenuRequestView";

const FormView = ({ requestId }) => {
  const [dataForm, setDataForm] = useState({});
  const [stop, setStop] = useState(false);
  const [routeRequest, setRouteRequest] = useState("params");

  const { refetch } = useRequest(dataForm);

  useEffect(() => {
    if (dataForm && stop) {
      setStop(false);
      refetch();
    }
  });

  return (
    <Formik
      initialValues={{
        url: "",
        method: "get",
        headers: [],
        params: [],
        body: [
          {
            key: "",
            value: "",
          },
        ],
      }}
      onSubmit={(values) => {
        const formatBody = values.body.reduce(
          (obj, item) => Object.assign(obj, { [item.key]: item.value }),
          {}
        );

        const formatData = { ...values, requestId, body: formatBody };

        console.log(formatData);
        setStop(true);
        setDataForm(formatData);
      }}
    >
      {(props) => {
        const { values, handleChange, handleBlur, handleSubmit } = props;

        return (
          <View>
            <View style={{ padding: 10 }}>
              <Text>{requestId}</Text>
            </View>
            <RequestSend
              url={values.url}
              handleChange={handleChange}
              handleBlur={handleBlur}
              requestId={requestId}
              handleSubmit={handleSubmit}
            />
            <MenuRequestView
              setRouteRequest={setRouteRequest}
              routeRequest={routeRequest}
            />
            <View style={{ height: 300 }}>
              <ScrollView style={{ height: "100%" }} horizontal={true}>
                <BodyView
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  body={values.body}
                  routeRequest={routeRequest}
                  requestId={requestId}
                />
                <ParamsView routeRequest={routeRequest} />
                <ParamsView routeRequest={routeRequest} />
                <ParamsView routeRequest={routeRequest} />
              </ScrollView>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default FormView;
