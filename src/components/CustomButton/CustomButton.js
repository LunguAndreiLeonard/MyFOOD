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
        width:'40',
    },
    container_TERTIARY: {},
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY: {},
    container_SECONDARY: {
        backgroundColor: 'purple',
        borderRadius: 180,
        paddingBottom: 30,
        paddingHorizontal: 30,
        width: 'auto',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        maxWidth: 15,
        maxHeight: 15,
        position: 'absolute',
        right: 15,
        bottom: 50,
        opacity: '50%',
    },
    container_BACK: {
        backgroundColor: 'purple',
        borderRadius: 180,
        paddingBottom: 30,
        paddingHorizontal: 30,
        width: 'auto',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        maxWidth: 15,
        maxHeight: 15,
        fontSize: 30,
        position: 'absolute',
        right: 690,
        bottom: 50,
        opacity: '50%',
    }


});

export default CustomButton;