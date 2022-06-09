import { StyleSheet, Text, View,Keyboard, Modal, StatusBar, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'
import colors from '../../misc/colors';
import CustomButton from '../CustomButton';


const NoteFiles = ({visible, onClose, onSubmit}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleOnChangeText = (text, valueFor) => {
        if(valueFor === 'title') setTitle(text);
        if(valueFor === 'description') setDescription(text);
    };


    const handleSubmit = () => {
        if (!title.trim() && !description.trim()) return onClose();
        onSubmit(title, description);
        setTitle('');
        setDescription('');
        onClose();
    };

    const handleModalClose = () => {
        Keyboard.dismiss;
    };
  return (
    <>
    <StatusBar hidden/>
    <Modal visible={visible} animationType='fade'>
      <View style={styles.modal}>
      <TextInput value={title} onChangeText={(text) => handleOnChangeText(text, 'title')} placeholder='Title' style={[styles.input, styles.title]}/>
      <TextInput value={description} onChangeText={(text) => handleOnChangeText(text, 'description')} multiline placeholder ='Description' style={[styles.input, styles.description]}/>
      <CustomButton
          text="✔"
          onPress={handleSubmit}
          type="SECONDARY"
        />
        {title.trim() || description.trim()? (
        <CustomButton
          text="←"
          onPress={onClose}
          type="BACK"
        />
        ) : null
        }   
      </View>
      <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]}/>
      </TouchableWithoutFeedback>

  </Modal>
  </>
  );
};



const styles = StyleSheet.create({
    input: {
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor:colors.LIGHT,
        fontSize: 20,
        color: colors.LIGHT,
    },
    modal: {
        backgroundColor: '#180526',
        paddingHorizontal: 25,
        flex: 1,
    },
    title: {
        padding:50,
        height: 30,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    description: {
        height: 350,
    
    },
    modalBG: {
        flex: 1,
        zIndex: -1,

    },

})








export default NoteFiles