/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import BodyView from './BodyView';
import ParamsView from './ParamsView';
import RequestSend from './RequestSend';
import ResponseView from './ResponseView';
import {useForm, Controller} from 'react-hook-form';
import useRequest from 'hooks/request/useRequest';

const RequestView = ({match}) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm();
  const [dataForm, setDataForm] = useState({});

  const {data, isLoading, refetch} = useRequest(dataForm);

  useEffect(() => {
    console.log('refetch');
    console.log(dataForm);
    refetch();
  }, [dataForm, refetch]);

  const onSubmit = data => {
    setDataForm({...data, requestId, method: 'get'});
  };

  const {requestId} = match.params;

  return (
    <NativeRouter>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'purple',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: 400,
            backgroundColor: '#123456',
            padding: 10,
          }}>
          <View style={{padding: 10}}>
            <Text>{requestId}</Text>
          </View>
          <RequestSend
            setValue={setValue}
            requestId={requestId}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            control={control}
          />
          <View style={{width: '100%', flexDirection: 'row', padding: 10}}>
            <Link to={`/params`}>
              <Text>Params</Text>
            </Link>
            <Link to={`/authorization`}>
              <Text>Authorization</Text>
            </Link>
            <Link to={`/headers`}>
              <Text>Headers</Text>
            </Link>
            <Link to={`/body`}>
              <Text>Body</Text>
            </Link>
          </View>
          <View>
            <Route exact path={`/params`} component={ParamsView} />
            <Route exact path={`/authorization`} component={ParamsView} />
            <Route exact path={`/headers`} component={ParamsView} />
            <Route exact path={`/body`} component={BodyView} />
          </View>
        </View>
        <ResponseView requestId={requestId} />
      </View>
    </NativeRouter>
  );
};
export default RequestView;
