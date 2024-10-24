// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigation from './src/navigation/Navigation';
import LoginScreen1 from './src/screens/LoginScreen1';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import ResetPassScreen from './src/screens/ResetPassScreen';
import SignUpScreen1 from './src/screens/SignUpScreen1';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="LogIn" component={LoginScreen1} /> */}
        {/* <Stack.Screen name="EmailConfirm" component={ConfirmEmailScreen} /> */}
        <Stack.Screen name="NewPass" component={NewPasswordScreen} />
        {/* <Stack.Screen name="ResetPass" component={ResetPassScreen} /> */}
        {/* <Stack.Screen name="SignUp" component={SignUpScreen1} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export type StackParamList = {
  LogIn: undefined;
  EmailConfirm: undefined;
  NewPass: undefined;
  ResetPass: undefined;
  SignUp: undefined;
  Home: undefined;
};


export default App;