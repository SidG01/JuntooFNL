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
import { useState } from 'react';
const windowHeight = Dimensions.get('window').height;

function signUpScreen(): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
    <SafeAreaView style={styles.root}>
        <View style={{}}>
          <Text style={styles.title}>Create an Account</Text>
          <CustomInput value = {username} setValue = {setUsername} placeholder = "Username" 
          secureTextEntry = {false}></CustomInput>
          <CustomInput value = {email} setValue = {setEmail} placeholder = "Email" 
          secureTextEntry = {false}></CustomInput>
          <CustomInput value = {password} setValue = {setPassword} placeholder = "Password" 
          secureTextEntry = {true}></CustomInput>
          <CustomInput value = {passwordRepeat} setValue = {setPasswordRepeat} placeholder = "Repeat Password" 
          secureTextEntry = {true}></CustomInput>
          <LoginButton onPress={onSigninPressed} text="Sign In" type = "one"></LoginButton>
          <LoginForgotPass onPress={onForgotPassPressed} text="Forgot Password?"></LoginForgotPass>
          <GoogleLogin onPress={onGoogleLoginPressed} text="Sign in with Google"></GoogleLogin>
          <NewAccount onPress={onNewAccountPressed} text="Create New Account"></NewAccount>
        </View>
      </SafeAreaView>
  );
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
    },
    title: {
      alignItems: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      color: "#051C60",
      margin: 10,
    }
  });

export default signUpScreen;
