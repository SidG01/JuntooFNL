// In App.js in a new project

import * as React from 'react';
import { View, Text, Settings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigation from './src/navigation/Navigation';
import LoginScreen1 from './src/screens/LoginScreen1';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import ResetPassScreen from './src/screens/ResetPassScreen';
import SignUpScreen1 from './src/screens/SignUpScreen1';
import HomeScreen from './src/screens/HomeScreen';
import BottomTabNavigator from './src/screens/BottomTabNavigator';
import ChatScreen from './src/screens/ChatScreen';
import Discover from './src/screens/Discover';
import LiveMapScreen from './src/screens/LiveMapScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Notifications from './src/screens/Notifications';
import SettingScreen from './src/screens/SettingScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import { withAuthenticator } from '@aws-amplify/ui-react-native';
import ProfileHome from './src/screens/ProfileHome';

const Stack = createNativeStackNavigator();

function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="LogIn" component={LoginScreen1} /> */}
        {/* <Stack.Screen name="EmailConfirm" component={ConfirmEmailScreen} /> */}
        {/* <Stack.Screen name="NewPass" component={NewPasswordScreen} /> */}
        {/* <Stack.Screen name="ResetPass" component={ResetPassScreen} /> */}
        {/* <Stack.Screen name="SignUp" component={SignUpScreen1} /> */}
        <Stack.Screen name="HomeTab" component={BottomTabNavigator} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
        {/* <Stack.Screen name="Map" component={LiveMapScreen} /> */}
        {/* <Stack.Screen name="Discover" component={ProfileScreen} /> */}
        <Stack.Screen name="Noti" component={Notifications} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="createPost" component={CreatePostScreen} />
        <Stack.Screen name="ProfileHome" component={ProfileHome} />
        <Stack.Screen name="ProfileEdit" component={ProfileScreen} />

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
  HomeTab: undefined;
  Chat: undefined;
  Discover: undefined;
  Map: undefined;
  Noti: undefined;
  Setting: undefined;
  createPost: undefined;
  ProfileHome: undefined;
  ProfileEdit: undefined;
};


export default withAuthenticator(App);