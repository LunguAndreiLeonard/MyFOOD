import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Button,Image, Keyboard } from 'react-native'
import React, {useEffect, useState} from 'react'
import colors from '../../misc/colors';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Auth, Hub } from 'aws-amplify';
import CustomButton from '../../components/CustomButton';
import NoteFiles from '../../components/NoteFiles/NoteFiles';
import { AsyncStorage } from '@aws-amplify/core';
import Note from '../../components/NoteFiles/Note';
import {useNavigation} from '@react-navigation/core';
import { useNotes } from '../../context/NoteProvider';


const HomeScreen = () => {
    const [greet, setGreet, index] = useState('Evening');
    const [modalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation();
    const {notes, setNotes} = useNotes();


    const handleOnSubmit = async (title, description, image) => {
        const note = {id: Date.now(), title, description,image, time: Date.now()};
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes)
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes))

    }
    const signOut = () => {
        Auth.signOut();
    };
    
    const findGreet = () => {
        const hrs = new Date().getHours()
        if(hrs === 0 || hrs < 12) return setGreet('Morning');
        if(hrs === 0 || hrs < 18) return setGreet('Afternoon');
        setGreet('Evening');
    }

    useEffect(() => {
        //AsyncStorage.clear();
        findGreet();
    }, []);
    
    const handleModalClose = () => {
        Keyboard.dismiss;
    };

    
    const openNote = (note) => {
        navigation.navigate('NoteDetails', {note});
    };

    return (
        <>
        <StatusBar barStyle='dark-content' backgroundColor={colors.DARK}/>
        <TouchableWithoutFeedback onPress={handleModalClose}>

        
        <View style={styles.container}>
            <Text style={styles.header}>{`Good ${greet}`}</Text>
            <SearchBar containerStyle={{marginVertical: 15}} />
            <FlatList numColumns={2} columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 20}} data={notes} keyExtractor={item => item.id.toString()}
            renderItem={({item}) =>  ( <Note onPress={() => openNote(item)} item={item}/> )}
            />
            {!notes.length ? (
            <View style={[ StyleSheet.absoluteFillObject ,
            styles. emptyHeaderContainer]}>
                <Text style={styles.emptyHeader}> Add Recipes Notes</Text>
                
            </View>
            ) : null}
            
        </View>
        </TouchableWithoutFeedback>

        <CustomButton
        text="ADD"
        onPress={() => setModalVisible(true)}
        type="SECONDARY"
        />
        <Text
                onPress={signOut}
                style={{
                    width:'100%',
                    textAlign: 'center', 
                    color: 'red',
                    marginTop: 'auto',
                    marginVertical: 20,
                    fontSize: 10,
                }}>
                    Sign Out
                </Text>
                
        <NoteFiles visible={modalVisible} onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}/>
        </>
    )
}



const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        paddingHorizontal: 20,
        flex: 1,
        color: 'white',
        backgroundColor: '#180526',
    },
    emptyHeader: {
        fontSize: 30,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    emptyHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        opacity: .5,
    },
    

})
export default HomeScreen;