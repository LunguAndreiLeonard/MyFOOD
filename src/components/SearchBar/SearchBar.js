import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import colors from '../../misc/colors'


const SearchBar = ({containerStyle, value, onClear, onChangeText}) => {
    return (
        <View style = {[styles.container, { ...containerStyle }]}>
            <TextInput value={value} onChangeText={onChangeText} style={styles.SearchBar} placeholder='Find your recipes here!'/>
        
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBar: {
        borderWidth: 1,
        borderColor: colors.LIGHT,
        height: 40,
        borderRadius: 40,
        fontSize:20,
        color: 'white',
        paddingBottom: 10,
        paddingLeft: 15,
        textAlignVertical: 'bottom'
        

        
    },
    container:{
        zIndex: 1,
        height: 40,
        
        
        
        
        
    }
})

export default SearchBar;