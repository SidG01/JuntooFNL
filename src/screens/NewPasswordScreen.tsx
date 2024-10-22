import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';
import CustomInput1 from '../components/CustomInput1';
import { useState } from 'react';
import LoginForgotPass1 from '../components/LoginForgotPass1';
import LoginButton1 from '../components/LoginButton1';
import GoogleLogin1 from '../components/GoogleLogin1';
import NewAccount1 from '../components/NewAccount1';
import MicrosoftLogin from '../components/MicrosoftLogin';
import ConfEmSecBtn from '../components/ConfEmSecBtn';
const windowHeight = Dimensions.get('window').height;

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPass, setnewPass] = useState('');


    return (
        <View>
            <Text style={styles.title}>Reset Password</Text>
            <CustomInput1 value = {code} setValue = {setCode} placeholder = "Enter Code" secureTextEntry = {false}></CustomInput1>
            <CustomInput1 value = {newPass} setValue = {setnewPass} placeholder = "Enter newPassword" secureTextEntry = {false}></CustomInput1>
            <LoginButton1 onPress={onSubmitPressed} text="Submit" type = "one"></LoginButton1>
            <ConfEmSecBtn onPress={onSigninPressed} text="Back to Sign In"></ConfEmSecBtn>
        </View>
  )
}
function onSubmitPressed() {
    console.log("code confirm pressed");
}
function onSigninPressed() {
    console.log("signed in");
}
  
  const styles = StyleSheet.create({
      root: {
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
      },
      title: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: "#051C60",
        margin: 10,
      },
      text: {
        color: 'grey',
        marginVertical: 10,
        marginHorizontal: 10,
      },
      link: {
        color: '#FDB075',
      },
    });

export default NewPasswordScreen