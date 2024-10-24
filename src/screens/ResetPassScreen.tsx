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

const ResetPassScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation<NavigationProps>();
  const {control, handleSubmit} = useForm();

  function onSendPressed(data: any) {
     console.log(data);
     navigation.navigate('NewPass');
  }
  function onSigninPressed() {
      console.log("signed in");
      navigation.navigate('LogIn');
  }


    return (
        <View>
            <Text style={styles.title}>Reset Password</Text>
            <CustomInput1 name = "username" control={control} placeholder = "Username" secureTextEntry = {false}
            rules={{required: "Please enter your username"}}></CustomInput1>
            <LoginButton1 onPress={handleSubmit(onSendPressed)} text="Send" type = "one"></LoginButton1>
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

export default ResetPassScreen