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
import { useForm, Controller } from 'react-hook-form';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../App';
type NavigationProps = NativeStackNavigationProp<StackParamList>;

const Email_RegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen1 = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const {control, handleSubmit, formState: {errors}, watch} = useForm();
  const pass = watch('password')

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
      <SafeAreaView>
        <View>
            <Text style={styles.title}>Create an Account</Text>
            <CustomInput1 name= 'name' control={control} placeholder = "Full Name" secureTextEntry = {false} 
            rules={{required: '** Full Name is Required **', 
            maxLength: {value: 30, message: "Name is more than 30 characters"}}}></CustomInput1>
            <CustomInput1 name= 'username' control={control} placeholder = "Username" secureTextEntry = {false} 
            rules={{required: '** Username is Required **', minLength: {value: 5, message: "Username is less than 5 characters"}, 
            maxLength: {value: 15, message: "Username is more than 15 characters"}}}></CustomInput1>
            <CustomInput1 name= 'email' control={control} placeholder = "Email" secureTextEntry = {false} 
            rules={{required: '** Email is Required **', pattern: {value: Email_RegEx, message: 'Email is Invalid'}}}></CustomInput1>
            <CustomInput1 name= 'password' control={control} placeholder = "Password" secureTextEntry = {true} 
            rules={{required: '** Password is Required **', minLength: {value: 8, message: "Password is less than 8 characters"}}}></CustomInput1>
            <CustomInput1 name= 'password-repeat' control={control} placeholder = "Repeat Password" secureTextEntry = {true}
            rules={{required: '** Please Repeat Password **', validate: (value: string) => value === pass || 'Passwords do NOT match',}}></CustomInput1>
            
            <LoginButton1 onPress={handleSubmit(onSignUpPressed)} text="Sign Up" type = "one"></LoginButton1>
            
            <Text style={styles.text}>By signing up, you confirm that you accept our
                <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text>
             and 
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
             </Text>
            <NewAccount1 onPress={onSigninPressed} text="Have an Account? Sign In"></NewAccount1>
        </View>
        </SafeAreaView>
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