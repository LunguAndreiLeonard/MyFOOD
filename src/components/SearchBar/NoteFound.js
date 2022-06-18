import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../misc/colors'

const NoteFound = () => {
return (
    <View style={[StyleSheet.absoluteFillObject,styles.container]}>
        <Text style={styles.text}> Result Not Found :(</Text>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
        zIndex: -1,
    },
    text: {
        color: 'white',
        fontSize: 40,
    }
})

export default NoteFound

