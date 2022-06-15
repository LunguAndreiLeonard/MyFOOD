import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const Note = ({item, onPress}) => {
    const {title, description, image} = item;
    
  return (  
    
    <TouchableOpacity onPress={onPress} style = {styles.container}>
        <Text  style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.description} numberOfLines={5}>{description}</Text>
        <Image source={{image}}/>

    </TouchableOpacity>
  )
}
const width = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
    container: {
        color: 'white',
        backgroundColor: 'purple',
        opacity: '50%',
        width: width / 2 - 10,
        padding: 10,
        borderRadius: 8,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
    },
    description: {
      color: 'white',
    }
})
export default Note;