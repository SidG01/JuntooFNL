import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const IconButton = ({onPress, text, width}:{[key:string]:any}) => {
  return (
    <View>
      <Pressable onPress={onPress} style={[styles.container]}>
        <Text style={[styles.text, width={width}]}>{text}</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    root: {
      backgroundColor: "#000000",
    },
    container: {
        alignSelf: 'center',
        backgroundColor: "grey",
        padding: '3.5%',
        width: '100%',
        marginVertical: 10,
        borderRadius: 13,
    },
    text: {
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 20,
    },
  });

export default IconButton