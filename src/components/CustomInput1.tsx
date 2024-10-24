import { View, TextInput, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const CustomInput1 = ({control, name, rules={}, placeholder, secureTextEntry}:{[key:string]:any}) => {
  return (
    <>
      {/* <TextInput value = {value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secureTextEntry} style={styles.input}></TextInput> */}
    
      <Controller rules={rules} control={control} name={name} render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
        <View style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8'}]}>
        <TextInput value={value} onChangeText={onChange} onBlur={onBlur} placeholder={placeholder} style={[styles.input, {}]} secureTextEntry={secureTextEntry}></TextInput>
        </View>
        {error && (
          <Text style={{color: 'red', alignSelf: 'stretch', padding: '3%'}}>{error.message || '*Required Field'}</Text>
        )}
        </>
        )}>
          
        </Controller>

    </>
  )
}
const styles = StyleSheet.create({
      container: {
          backgroundColor: 'white',
          width: '90%',
          padding: '5%',
          alignSelf: 'center',
        
          borderColor: '#e8e8e8',
          borderWidth: 1,
          borderRadius: 13,

          paddingHorizontal: 10,
          marginVertical: 5,
 
      },
      input: {
        fontSize: 16,
        
      }
    });

export default CustomInput1