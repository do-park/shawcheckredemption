import React from 'react';
import { Ionicons } from '@expo/vector-icons';  
import { TouchableHighlight, Text } from 'react-native';
import Constants from 'expo-constants';

function PersonalColorBackButton(props) {
    return (
        <TouchableHighlight
        style={{position: 'absolute', zIndex: 1, top: Constants.statusBarHeight, left: 10, width: 50, height: 50}}
        underlayColor="none"
        onPress={props.onPress} >
            <Ionicons name="ios-arrow-dropleft" size={48} color="black" />
        </TouchableHighlight>

    )
}

export default PersonalColorBackButton;