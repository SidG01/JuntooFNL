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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function customImput({value, setValue, placeholder, secureTextEntry}:{[key:string]:any}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {height} = useWindowDimensions();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={styles.root}>
        <View
          style={styles.container}>
            <TextInput value = {value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secureTextEntry} style={styles.input}></TextInput>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // size of the view
    root: {
      alignItems: 'center',
      height: '12%'
    },
    // size of the item
    container: {
        borderColor: '#e8e8e8', 
        padding: '5.25%',
        borderWidth: 2, 
        borderRadius: 5, 
        width: '150%',
        height: '60%',
        paddingHorizontal: 10,
    },
    input: {
    }
  });

export default customImput;
