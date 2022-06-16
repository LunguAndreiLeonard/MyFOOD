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
    container_TERTIARY: {
        borderColor:'#4e7e80',
        borderWidth:2,
        width: 300,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY: {},
    container_SECONDARY: {
        backgroundColor: 'red',
        borderRadius: 180,
        opacity: 0.5,
        width: 380,
        left: 10,
        bottom: 60,
        position: 'absolute',
        
        
    },
    container_RESEND: {
        backgroundColor: 'red',
        borderRadius: 20,
        opacity: 0.5,
        alignItems: 'center',
        width: 300,
        
        bottom: 125,
        position: 'absolute',

    },

    text_SECONDARY: {},
    container_BACK: {
        backgroundColor: '#180529',
        borderWidth:1,
        borderColor: 'red',
        borderRadius: 180,
        width: 380,
        left: 10,
        flex:1,
        position: 'absolute',
        bottom: 120,
        
    },
    container_MORE: {
        backgroundColor: '#180529',
        borderWidth:1,
        borderColor: 'red',
        borderRadius: 180,
        width: 380,
        left: 10,
        flex:1,
        position: 'absolute',
        bottom: 60,
        
    },
    container_ADD: {
        backgroundColor: '#180529',
        borderWidth:1,
        borderColor: 'yellow',
        borderRadius: 180,
        width: 380,
        
        left: 10,
        flex:1,
        position: 'absolute',
        bottom: 118,
        
    },
    container_CAMERA: {
        backgroundColor: '#180529',
        borderRadius: 180,
        width: 380,
        flex: 1,
        left:10,
        alignItems: 'center',
        alignContent: 'center',
        bottom: 0,
        borderColor: 'yellow',
        borderWidth: 1,
        position: 'absolute',
        fontWeight: 'bold',
        
    },
    container_SHARE: {
        backgroundColor: '#180529',
        borderRadius: 180,
        width: 380,
        flex: 1,
        left:10,
        alignItems: 'center',
        alignContent: 'center',
        bottom: 0,
        borderColor: 'yellow',
        borderWidth: 1,
        position: 'absolute',
        fontWeight: 'bold',
        
        
    },




});

export default CustomButton;