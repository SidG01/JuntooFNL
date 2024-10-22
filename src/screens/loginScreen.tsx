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
const windowHeight = Dimensions.get('window').height;

function loginScreen(): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
    <SafeAreaView style={styles.root}>
        <View style={{}}>
            {/* <Image source={require('../images/juntooTempImg.png')} style={[styles.logo]} resizeMode='contain' /> */}
            <CustomInput value = {username} setValue = {setUsername} placeholder = "Username" secureTextEntry = {false}></CustomInput>
            <CustomInput value = {password} setValue = {setPassword} placeholder = "Password" secureTextEntry = {true}></CustomInput>
            <LoginButton onPress={onSigninPressed} text="Sign In" type = "one"></LoginButton>
            <LoginForgotPass onPress={onForgotPassPressed} text="Forgot Password?"></LoginForgotPass>
            <GoogleLogin onPress={onGoogleLoginPressed} text="Sign in with Google"></GoogleLogin>
            <NewAccount onPress={onNewAccountPressed} text="Create New Account"></NewAccount>
            <CustomInput1 value = {password} setValue = {setPassword} placeholder = "Password" secureTextEntry = {true}></CustomInput1>
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
    }
  });

export default loginScreen;
