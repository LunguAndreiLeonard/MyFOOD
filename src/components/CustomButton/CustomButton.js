import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {}
            ]}>
            <Text style={[styles.text, styles[`text_${type}`],
            fgColor ? {color: fgColor} : {}
            ]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 20,
    },

    container_PRIMARY: {
        backgroundColor: 'orange',
        width: 300,
    },
    container_TERTIARY: {},
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY: {},
    container_SECONDARY: {
        backgroundColor: 'red',
        borderRadius: 180,
        width: 60,
        left: 330,
        bottom: 20,
        position: 'absolute',
        
        
    },
    text_SECONDARY: {},
    container_BACK: {
        backgroundColor: 'red',
        borderRadius: 180,
        width: 60,
        left: 0,
        position: 'absolute',
        bottom: 20,
        
    },
    container_CAMERA: {
        backgroundColor: '#180529',
        borderRadius: 180,
        width: 100,
        left: 150,
        bottom: 20,
        borderColor: 'yellow',
        borderWidth: 1,
        position: 'absolute',
        fontWeight: 'bold',
        
        
    },



});

export default CustomButton;