import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen1 from '../screens/LoginScreen1';
import SignUpScreen1 from '../screens/SignUpScreen1';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ResetPassScreen from '../screens/ResetPassScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation