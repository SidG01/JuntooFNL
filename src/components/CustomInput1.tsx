import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput1 = ({value, setValue, placeholder, secureTextEntry}:{[key:string]:any}) => {
  return (
    <View style={styles.container}>
      <TextInput value = {value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secureTextEntry} style={styles.input}></TextInput>
    </View>
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