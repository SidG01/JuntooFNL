import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import IconButton from '../components/IconButton'

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../App';
type NavigationProps = NativeStackNavigationProp<StackParamList>;


const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  function NotiPressed() {
    console.log("Noti");
    navigation.navigate('Noti');
  }
  function SettingsPressed() {
    console.log("Seti");
    navigation.navigate('Setting');
  }
  function tempCreatePost() {
    console.log("cpost");
    navigation.navigate('createPost');
  }
 return (
   <SafeAreaView>
     <View style={styles.header}>
       {/* change this to juntoo full name logo svg */}
       <Text style={styles.title}>Juntoo</Text>
       <View style={styles.icons}>
         <Pressable>
           {/* change this to svg of heart */}
           {/* if clicked you can see notifications like if anyone followed you / requested to follow you / liked / commented on your post */}
           {/* <Text style={{fontSize: 18}}>Heart</Text> */}
           <IconButton onPress={NotiPressed} text="Noti" width="100%"/>
         </Pressable>
         <Pressable>
           {/* change this to svg of Settings */}
           {/* if this is clicked, the user can change settings like location, privacy and things like that */}
           <IconButton onPress={SettingsPressed} text="Settings" width="100%"/>
         </Pressable>
       </View>
     </View>

     <View>
        {/* change this to the create post thing in notion. its like a button in the tab bar that pops up when you are in the home screen */}
        {/* if you are on another screen it should say home but if you are already on the home screen it should do the thing in the video */}
       <IconButton style={{alignSelf: 'center'}} onPress={tempCreatePost} text="CreatePost" />
       </View>
   </SafeAreaView>
 )
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 header: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   marginBottom: 10,
   marginTop: 10,
   marginLeft: 10,
 },
 title: {
   color: "black",
   fontSize: 30,
   fontWeight: 'bold',
   },
 avatarImage: {
   height: '30%',
   borderCurve: 'continuous',
   borderColor: 'grey',
   borderWidth: 3,
 },
 icons: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   gap: 10,
   marginRight: 10,
 },
 noPosts: {
   fontSize: 12,
   textAlign: 'center',
   color: "black",
 },
 pill: {
   position: 'absolute',
   right: -10,
   top: -4,
   height: 20,
   width: 20,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 20,
   // backgroundcolor
 },
 pillText: {
   color: 'white',
   fontSize: 12,
 }
})


export default HomeScreen

