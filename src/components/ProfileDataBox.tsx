import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const ProfileDataBox = ({text, inputText}: any) => {
  return (
    <View style={styles.header}>
        <Text style={styles.textValue}>{text}</Text>
      <TextInput style={styles.input}>{inputText}</TextInput>
    </View>
  )
}

export default ProfileDataBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    textValue: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        // backgroundColor: 'white',
        width: '80%',
        padding: '1%',
        // alignSelf: 'center',
        alignItems: 'flex-end',
        // marginLeft: '2.5%',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 13,
        fontSize: 16,
        paddingHorizontal: 10,
        // marginVertical: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 20,
    },
    title: {
        color: "black",
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: '3.5%'
    },
})