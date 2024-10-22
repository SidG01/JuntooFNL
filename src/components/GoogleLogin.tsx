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

function GoogleLogin({onPress, text}:{[key:string]:any}): React.JSX.Element {
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
        height: '15%'
      },
      // size of the item
      container: {
          alignItems: 'center',
          width: '140%',
          height: '70%',
          backgroundColor: "#FAE9EA",
          padding: '3.5%',
          marginVertical: 3,
          borderRadius: 13,
      },
      text: {
          fontWeight: 'bold',
          color: '#DD4D44',
          textAlign: 'center',
          textAlignVertical: 'center',
          verticalAlign: 'middle',
          paddingVertical: 5,
          fontSize: 20,
          justifyContent: 'center'
      },
    });

export default GoogleLogin;
