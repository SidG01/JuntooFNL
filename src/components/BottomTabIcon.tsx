import { View, Text } from 'react-native'
import React from 'react'
import HomeIcon from '../icons/svgviewer-output.svg'

type Props = {
    route: string;
    isFocused: boolean;
}

const BottomTabIcon = ({route, isFocused}: Props) => {
    const renderIcon = (route: string,isFocused: boolean) => {
        let height: number = 34;
        let width: number = 34;

        switch (route) {
            case "Home":
                return <HomeIcon/>;
        
            default:
                break;
        }
    }
  return (
    <View>
      {renderIcon(route, isFocused)}
    </View>
  )
}

export default BottomTabIcon