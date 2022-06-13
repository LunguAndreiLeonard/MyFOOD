import { View, Text, StyleSheet, ScrollView ,Alert} from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton';

const formatDate = ms => {
    const date = new Date(ms)
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const hrs = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()

    return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`
};


const NoteDetails = (props) => {
    const { note } = props.route.params

    const displayDeleteAlert = () => {
        Alert.alert('Confirm!', [
            {
                text: 'Delete',
                onPress: () => console.log('delete')
            },
            {
                text: `Don't delete`,
                onPress: () => console.log('notnk')

        }
    ], {
        cancelable: true,
    });
    };

    return (
    <>
    <ScrollView contentContainerStyle = {styles.container}>
      <Text style={styles.time}>{`Created At ${formatDate(note.time)}`}</Text>  
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.description}>{note.description}</Text>
    </ScrollView>
    <View style={styles.btnContainer}>
    <CustomButton
          text="DEL"
          onPress={displayDeleteAlert}
          type="BACK"
        />
    
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        color: 'white',
        fontSize: 30,
        paddingHorizontal:15,
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
        padding: 10,
        
        
    },
    time: {
        color: 'white',
        fontSize:10,
        paddingRight:10,
        textAlign: 'right',
    },
    btnContainer: {
        position: 'absolute',
        right: 15,
        bottom: 50,
        flex: 1,
    }

})

export default NoteDetails;