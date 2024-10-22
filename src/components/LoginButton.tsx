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

function LoginButton({onPress, text}:{[key:string]:any}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.root}>
        <Pressable onPress={onPress} style={[styles.container]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  // size of the view
    root: {
    },
    // size of the item
    container: {
      backgroundColor: "#3B71F3", 

      width: '100%',

      padding: 15,
      marginVertical: 5,

      alignItems: 'center',
      borderRadius: 5,

    },
    text: {
        fontWeight: 'bold',
          color: 'white',
          fontSize: 20,
    },
  });

export default LoginButton;
