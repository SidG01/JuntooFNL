import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconButton from '../components/IconButton';
import { TextInput } from 'react-native';
import ProfileDataBox from '../components/ProfileDataBox';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../App';
type NavigationProps = NativeStackNavigationProp<StackParamList>;

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  function BackPressed() {
    console.log("editproftohometab");
    navigation.navigate('HomeTab');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <IconButton onPress={BackPressed} text="Back" />
        <Text style={styles.title}>My Profile</Text>
      </View>
      <View>
        <Text style={{fontSize: 30, alignSelf: 'center', fontWeight: 'bold', padding: 40}} >PROFILE PICTURE</Text>
        <Text style={{alignSelf: 'center', fontSize: 16}}>I am a 20 year old trying to meet a 14 year old! its normal!!!</Text>
      </View>
      <View>
        <UserHeader/>
        <ProfileDataBox text="Name:         " inputText="TestingUsersName"/>
        <ProfileDataBox text="Username:" inputText="TerstersName"/>
        <ProfileDataBox text="Bio:              " inputText="@TheOhioStateUniversity"/>
        <ProfileDataBox text="Pronouns:  " inputText="He. I'll never be him"/>
        <ProfileDataBox text="Birthday:    " inputText="June 26, 2003"/>
        <ProfileDataBox text="Number:     " inputText="12345678910"/>
        <ProfileDataBox text="Email:          " inputText="guddanti.siddharth@gmail.com"/>
      </View>
    </SafeAreaView>
  )
}

const UserHeader = () => {
  return (
    
    <View style={styles.container}>
      <View style={styles.container}>
        {/* show user image here */}
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    backgroundColor: 'white'
  },
  input: {
    // backgroundColor: 'white',
    width: '80%',
    padding: '5%',
    alignSelf: 'center',
        
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 13,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: 'bold',
    // marginRight: '3.5%'
    },
 })


export default ProfileScreen