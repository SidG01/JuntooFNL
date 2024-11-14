import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconButton from '../components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../App';
type NavigationProps = NativeStackNavigationProp<StackParamList>;
  
const Settings = () => {
  const navigation = useNavigation<NavigationProps>();
  function BackPressed() {
    console.log("setingtotab");
    navigation.navigate('HomeTab');
  }
  return (
    <SafeAreaView>
    <View style={styles.header}>
    <IconButton onPress={BackPressed} text="Back" />
      <Text style={styles.title}>Settings</Text>
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
    marginRight: '3.5%'
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

export default Settings