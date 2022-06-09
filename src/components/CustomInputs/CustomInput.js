/*import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder} 
        style={styles.input}
        secureTextEntry={secureTextEntry} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#191A1C',
      width: '80%',

      borderColor: ' #e8e8e8',
      borderWidth: 1,
      borderRadius: 5,

      paddingHorizontal: 10, 
      marginVertical: 5,
    },
    input: {
      color: 'white',
    },
});

export default CustomInput;
*/
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#180526',
    width: '100%',
    
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    color: 'white',
  },
});

export default CustomInput;
