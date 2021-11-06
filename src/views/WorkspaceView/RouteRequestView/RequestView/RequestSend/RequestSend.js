/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import useRequest from 'hooks/request/useRequest';
import {Controller} from 'react-hook-form';

const RequestSend = ({
  requestId,
  onSubmit,
  handleSubmit,
  control,
  setValue,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        borderRadius: 5,
        backgroundColor: 'brown',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}>
      {/* <Controller
        control={control}
        render={({value}) => (
          <Picker
            selectedValue={value}
            onValueChange={itemValue => setValue('language', itemValue)}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Html" value="html" />
          </Picker>
        )}
        name="language"
      /> */}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={{width: '50%', backgroundColor: '#451234'}}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="url"
        rules={{required: true}}></Controller>
      <Button title="Send" onPress={handleSubmit(onSubmit)}></Button>
    </View>
  );
};

export default RequestSend;
