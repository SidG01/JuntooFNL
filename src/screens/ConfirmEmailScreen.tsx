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

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../App';
type NavigationProps = NativeStackNavigationProp<StackParamList>;
import { useForm } from 'react-hook-form';
const Email_RegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation<NavigationProps>();
  const {control, handleSubmit} = useForm();

  function onConfirmPressed(data: any) {
    console.log(data);
    navigation.navigate('Home');
  }
  function onResendPressed() {
      console.log("code resend pressed");
  }
  function onSigninPressed() {
      console.log("signed in");
      navigation.navigate('LogIn');
  }

    return (
        <View>
            <Text style={styles.title}>Confirm Email Account</Text>
            <CustomInput1 name = "code" control = {control} placeholder = "Confirmation Code" secureTextEntry = {false}
            rules={{required: 'Invalid Code',}}></CustomInput1>
            <LoginButton1 onPress={handleSubmit(onConfirmPressed)} text="Confirm" type = "one"></LoginButton1>
            <ConfEmSecBtn onPress={onResendPressed} text="ResendCode"></ConfEmSecBtn>
            <ConfEmSecBtn onPress={onSigninPressed} text="Back to Sign In"></ConfEmSecBtn>
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

export default ConfirmEmailScreen