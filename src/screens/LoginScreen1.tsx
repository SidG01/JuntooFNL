import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  useWindowDimensions,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomInput from '../components/customInput';
import LoginButton from '../components/LoginButton';
import LoginForgotPass from '../components/loginForgotPass';
import GoogleLogin from '../components/GoogleLogin';
import NewAccount from '../components/newAccount';
import CustomInput1 from '../components/CustomInput1';
import { useState } from 'react';
import LoginForgotPass1 from '../components/LoginForgotPass1';
import LoginButton1 from '../components/LoginButton1';
import GoogleLogin1 from '../components/GoogleLogin1';
import NewAccount1 from '../components/NewAccount1';
import MicrosoftLogin from '../components/MicrosoftLogin';
const windowHeight = Dimensions.get('window').height;

const LoginScreen1 = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <CustomInput1 value = {username} setValue = {setUsername} placeholder = "Username" secureTextEntry = {false}></CustomInput1>
      <CustomInput1 value = {password} setValue = {setPassword} placeholder = "Password" secureTextEntry = {true}></CustomInput1>
      <LoginButton1 onPress={onSigninPressed} text="Sign In" type = "one"></LoginButton1>
      <LoginForgotPass1 onPress={onForgotPassPressed} text="Forgot Password?"></LoginForgotPass1>
      <GoogleLogin1 onPress={onGoogleLoginPressed} text="Sign in with Google"></GoogleLogin1>
      <MicrosoftLogin onPress={onMicrosoftLoginPressed} text="Sign in with Microsoft"></MicrosoftLogin>
      <NewAccount1 onPress={onNewAccountPressed} text="Create New Account"></NewAccount1>
    </View>
  )
}

function onSigninPressed() {
    console.log("signed in");
  }
  function onForgotPassPressed() {
    console.log("forgot password");
  }
  function onGoogleLoginPressed() {
    console.log("login with google");
  }
  function onMicrosoftLoginPressed() {
    console.log("login with microsoft");
  }
  function onNewAccountPressed() {
    console.log("New Account");
  }
  
  const styles = StyleSheet.create({
      root: {
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
      },
      logo: {
          maxWidth: 400,
          maxHeight: 400,
          alignItems: 'center',
          height: windowHeight * 0.2
      }
    });

export default LoginScreen1