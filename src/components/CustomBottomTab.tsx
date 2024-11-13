import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useTheme, useLinkBuilder } from '@react-navigation/native';
import { Label } from '@aws-amplify/ui-react-native/dist/primitives';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabIcon from './BottomTabIcon';

const CustomBottomTabs = ({state, descriptors, navigation}: BottomTabBarProps) => {
    const {width} = useWindowDimensions();
    const MARGIN = 20;
    const TAB_BAR_WIDTH = width - 2  * MARGIN;
    const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;
  return (
    <SafeAreaView>
    <View style = {[styles.tabBarContainer, { width: TAB_BAR_WIDTH, bottom: MARGIN }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () =>  {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {merge: true});
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
          key={route.key}
          accessibilityRole='button'
          accessibilityState={isFocused ? { selected: true}: {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarButtonTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{flex: 1}}
          >
            <View style={styles.contentContainer}>
              <BottomTabIcon route={route.name} isFocused={isFocused} />
            <Text style={{color: isFocused ? '#0067FF' : 'white', fontSize: 12}}>
              {route.name}
            </Text>
            </View>
          </Pressable>
        );
      })}

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    tabBarContainer: {
      flex: 1,
      flexDirection: 'row',
      height: 90,
      position: 'absolute',
      alignSelf: 'center',
      backgroundColor: '#0067FF',
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
    }
  });

export default CustomBottomTabs