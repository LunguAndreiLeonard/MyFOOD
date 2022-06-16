import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'


const Note = ({item, onPress}) => {
    const {title, description, image} = item;
    
  return (  
    
    <TouchableOpacity onPress={onPress} style = {styles.container}>
        <Text  style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.description} numberOfLines={3}>{description}</Text>
        <ImageBackground
                source={{
                uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15, borderWidth:1, borderColor: 'yellow'}}>
                <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                
                </View>
        </ImageBackground>
    </TouchableOpacity>
  )
}
const width = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
    container: {
        color: 'white',
        backgroundColor: '#180729',
        borderColor: 'yellow',
        borderWidth: 1,
        width: width / 2 - 10,
        padding: 10,
        borderRadius: 10,
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