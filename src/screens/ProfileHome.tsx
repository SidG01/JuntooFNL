import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../App';
import IconButton from '../components/IconButton';
type NavigationProps = NativeStackNavigationProp<StackParamList>;

const ProfileHome = () => {
    const navigation = useNavigation<NavigationProps>();
    function editP() {
        console.log("EditProftoeditProf");
        navigation.navigate('ProfileEdit');
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
      </View>
      <View>
        <Text style={{fontSize: 30, alignSelf: 'center', fontWeight: 'bold', padding: 40}} >PROFILE PICTURE</Text>
        <Text style={{alignSelf: 'center', fontSize: 16}}>I am a 20 year old trying to meet a 14 year old! its normal!!!</Text>
        <Pressable onPress={editP}>
            <Text style={styles.editProf} >Edit Profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 15,
      backgroundColor: 'white'
    },
    editProf: {
        alignSelf: 'center',
        backgroundColor: "#3B71F3",
        padding: '3.5%',
        width: '30%',
        textAlign: 'center',
        marginVertical: 10,
        borderRadius: 13,
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

export default ProfileHome