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

function loginForgotPass({onPress, text}:{[key:string]:any}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.root}>
        <Pressable onPress={onPress} style={[styles.container]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // size of the view
    root: {
      alignItems: 'center',
      height: '10%'
    },
    // size of the item
    container: {
        alignItems: 'center',
        width: '140%',
        height: '50%',
        padding: 2,
        marginVertical: 5,
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'grey',
        textAlign: 'justify',
        fontSize: 20,
    },
  });

export default loginForgotPass;
