import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  useWindowDimensions,
  Text,
  TextInput,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const LoginButton1 = ({onPress, text}:{[key:string]:any}) => {
  return (
    <View>
      <Pressable onPress={onPress} style={[styles.container]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
      root: {
        backgroundColor: "#000000",
      },
      container: {
          alignSelf: 'center',
          backgroundColor: "#3B71F3",
          padding: '3.5%',
          width: '90%',
          marginVertical: 10,
          borderRadius: 13,
      },
      text: {
          fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            paddingVertical: 5,
            fontSize: 20,
      },
    });

export default LoginButton1