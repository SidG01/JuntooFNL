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
import CustomInput1 from '../components/CustomInput1';
import { useState } from 'react';
import LoginForgotPass1 from '../components/LoginForgotPass1';
import LoginButton1 from '../components/LoginButton1';
import GoogleLogin1 from '../components/GoogleLogin1';
import NewAccount1 from '../components/NewAccount1';
import MicrosoftLogin from '../components/MicrosoftLogin';
const windowHeight = Dimensions.get('window').height;

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../App';
type NavigationProps = NativeStackNavigationProp<StackParamList>;

const SignUpScreen1 = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const navigation = useNavigation<NavigationProps>();

  function onTermsOfUsePressed() {
      console.log("signed in");
  }
  function onPrivacyPolicyPressed() {
      console.log("signed in");
  }
  function onSigninPressed() {
      console.log("signed in");
      navigation.navigate('LogIn');
  }
  function onSignUpPressed() {
      console.log("signed up");
      navigation.navigate('EmailConfirm');
  }
  function onGoogleLoginPressed() {
      console.log("login with google");
  }
  function onMicrosoftLoginPressed() {
      console.log("login with microsoft");
  }

    return (
        <View>
            <Text style={styles.title}>Create an Account</Text>
            <CustomInput1 value = {username} setValue = {setUsername} placeholder = "Username" secureTextEntry = {false}></CustomInput1>
            <CustomInput1 value = {email} setValue = {setEmail} placeholder = "Email" secureTextEntry = {false}></CustomInput1>
            <CustomInput1 value = {password} setValue = {setPassword} placeholder = "Password" secureTextEntry = {true}></CustomInput1>
            <CustomInput1 value = {passwordRepeat} setValue = {setPasswordRepeat} placeholder = "Repeat Password" secureTextEntry = {true}></CustomInput1>
            <LoginButton1 onPress={onSignUpPressed} text="Sign Up" type = "one"></LoginButton1>
            <Text style={styles.text}>By signing up, you confirm that you accept our 
                <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text>
             and 
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
             </Text>
            <GoogleLogin1 onPress={onGoogleLoginPressed} text="Sign in with Google"></GoogleLogin1>
            <MicrosoftLogin onPress={onMicrosoftLoginPressed} text="Sign in with Microsoft"></MicrosoftLogin>
            <NewAccount1 onPress={onSigninPressed} text="Have an Account? Sign In"></NewAccount1>
        </View>
  )
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

export default SignUpScreen1