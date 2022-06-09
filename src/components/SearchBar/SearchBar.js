import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import colors from '../../misc/colors'

const SearchBar = ({containerStyle}) => {
    return (
        <View style = {[styles.container, { ...containerStyle }]}>
            <TextInput style={styles.SearchBar} placeholder='Find your recipes here!'/>
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBar: {
        borderWidth: 0.5,
        borderColor: colors.LIGHT,
        height: 30,
        borderRadius: 40,
        padding: 20,
        fontSize:15,
        color: 'white',
    },
    container:{
        zIndex: 1,
        
    }
})

export default SearchBar;