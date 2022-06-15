import { View, Text, StyleSheet, ScrollView ,Avatar, Alert, Button, Keyboard,Image, TouchableHighlight,ImageBackground, ToastAndroid} from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../CustomButton';
import { AsyncStorage } from '@aws-amplify/core';
import NoteProvider, { useNotes } from '../../context/NoteProvider';
import NoteFiles from './NoteFiles';
import Note from './Note';




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


const NoteDetails = props => {
    const [note, setNote] = useState(props.route.params.note)
    const {setNotes} = useNotes();
    const [showNote, setShowNote] = useState(false);
    const [isEdit, setIsEdit] = useState(false);


    const deleteNote = async () => {
        const result = await AsyncStorage.getItem('notes')
        let notes = []
        if( result !== null) notes = JSON.parse(result)

        const newNotes = notes.filter(n => n.id !== note.id)
        setNotes(newNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(newNotes))
        props.navigation.goBack()
    }
    const displayDeleteAlert = () => 
    Alert.alert('Delete note file...', 'Are you sure?', [
        { text: "Delete it!", onPress: deleteNote},
        { text: "Don't delete my note!", onPress: () => console.log('no thanks'),}
        ],
        { cancelable: true });

        

        const handleUpdate = async (title, description,image, time) => {
            await AsyncStorage.getItem('notes')
            let notes = [];
            if(result !== null) notes =  JSON.parse(result)

            const newNotes = notes.filter(n => {
                if(n.id == note.id) {
                    n.title = title
                    n.description = description
                    n.image = image
                    n.isUpdated = true
                    n.time = time

                    setNote(n);

                }
                return n;
            })
            setNotes(newNotes);
            await AsyncStorage.setItem('notes', JSON.stringify(newNotes))
        }
        const handleOnClose = () => setShowNote(false)

        const openEditNote = () => {
            setIsEdit(true);
            setShowNote(true);
        }

    return (
    <>
    <ScrollView contentContainerStyle = {styles.container}>
    <Text style={styles.time}>{note.isUpdated
    ? `Updated At ${formatDate(note.time)}` 
    : `Create At ${formatDate(note.time)}`}</Text>  
    <Text style={styles.title}>{note.title}</Text>
    <Text style={styles.description}>{note.description}</Text>
    <ImageBackground
                source={{
                uri: note.image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15, borderWidth: 1, borderColor: 'yellow'}}>
                <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                
                </View>
        </ImageBackground>
    </ScrollView>
    <View>
    <CustomButton
        text="DEL"
        onPress={displayDeleteAlert}
        type="SECONDARY"
        />
        <CustomButton
        text="EDIT"
        onPress={openEditNote}
        type="BACK"
        />

    </View>
    <NoteFiles isEdit={isEdit} note = {note} onClose={handleOnClose} onSubmit= {handleUpdate} visible = {showNote} />
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
        padding: 30,
        textAlign: 'right',
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
        borderBottomLeftRadius: 40,
        
        
    },
    description: {
        color: 'white',
        fontSize: 20,
        padding: 20,
        
        
    },
    time: {
        color: 'white',
        fontSize:10,
        paddingRight:10,
        textAlign: 'right',
    },
    buttons: {
        borderRadius: 0.5,
        right: 50,
        size: '30%',
    }

})

export default NoteDetails;