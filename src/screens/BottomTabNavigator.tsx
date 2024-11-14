import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import ChatScreen from './ChatScreen'
import Discover from './Discover'
import LiveMapScreen from './LiveMapScreen'
import ProfileScreen from './ProfileScreen'
import ProfileHome from './ProfileHome'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../components/CustomBottomTab'
const Tab = createBottomTabNavigator<BottomTabParamList>();

const CustomBottomTabs = (props: BottomTabBarProps) =>  {
  return <CustomBottomTab {...props}/>
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBar={CustomBottomTabs}
    screenOptions={{headerShown: false}}>
      <Tab.Screen name="Map" component={LiveMapScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Profile" component={ProfileHome} />
    </Tab.Navigator>
    
  )
}
export type BottomTabParamList = {
  Home: undefined;
  Chat: undefined;
  Discover: undefined;
  Map: undefined;
  Profile: undefined;
}

export default BottomTabNavigator