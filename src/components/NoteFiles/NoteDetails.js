import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NoteDetails = (props) => {
    const { note } = props.route.params
    return (
    <View style = {styles.container}>

      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.description}>{note.description}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        color: 'white',
        fontSize: '30',
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20,
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
        borderBottomLeftRadius: 40,
        borderStyle: 'dashed'
        
    },
    description: {
        color: 'white',
        fontSize: 15,
        padding: 20,
        
        
    }
})

export default NoteDetails;