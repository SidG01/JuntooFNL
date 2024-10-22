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

import CustomInput1 from '../components/CustomInput1';
import { useState } from 'react';
import LoginForgotPass1 from '../components/LoginForgotPass1';
import LoginButton1 from '../components/LoginButton1';
import GoogleLogin1 from '../components/GoogleLogin1';
import NewAccount1 from '../components/NewAccount1';
import MicrosoftLogin from '../components/MicrosoftLogin';
import HomeScreen from './HomeScreen';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../App';
type NavigationProps = NativeStackNavigationProp<StackParamList>;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../../App';


const windowHeight = Dimensions.get('window').height;

const LoginScreen1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<NavigationProps>();

  function onSigninPressed() {
    console.log("signed in");
    navigation.navigate('Home');
  }
  function onForgotPassPressed() {
    console.log("forgot password");
    navigation.navigate('ResetPass')
  }
  function onGoogleLoginPressed() {
    console.log("login with google");
    // navigation.navigate('Home')
  }
  function onMicrosoftLoginPressed() {
    console.log("login with microsoft");
    // navigation.navigate('Home')
  }
  function onNewAccountPressed() {
    console.log("New Account");
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.root}>
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

  
  const styles = StyleSheet.create({
      root: {
        paddingVertical: '30%'  
        
      },
      logo: {
          maxWidth: 400,
          maxHeight: 400,
          alignItems: 'center',
          height: windowHeight * 0.2
      }
    });

export default LoginScreen1