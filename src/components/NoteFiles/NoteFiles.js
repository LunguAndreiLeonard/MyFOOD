import { StyleSheet,FlatList, Text, View,Keyboard, Modal, StatusBar, TextInput,Button,TouchableHighlight,TouchableOpacity, ToastAndroid,ImageBackground,Image, TouchableWithoutFeedback } from 'react-native'
import React, {useState, useEffect} from 'react'
import colors from '../../misc/colors';
import CustomButton from '../CustomButton';
import ImagePicker from 'react-native-image-crop-picker';

const NoteFiles = ({visible, onClose, onSubmit, note, isEdit}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('backgroundImage.png');
    
useEffect(() => {
    if(isEdit){
        setTitle(note.title);
        setDescription(note.description);
        setImage(note.image);
    }
},
[isEdit]);

    const handleOnChangeText = (text, valueFor) => {
        if(valueFor === 'title') setTitle(text);
        if(valueFor === 'description') setDescription(text);
        if(valueFor === 'image') setImage(text);
    };


    const handleSubmit = () => {
        if (!title.trim() && !description.trim()) return onClose();

        if (isEdit) {
            onSubmit(title, description,image, Date.now());
        } else {
            onSubmit(title, description, image);
            setTitle('');
            setDescription('');
            setImage('');
        }
        onClose();
    };

    const closeModal = () => {
        if(!isEdit){
        setTitle('');
        setDescription('');
        setImage('');
        }
        onClose();
    };

    const ImageSelector = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
            this.bs.current.snapTo(1);
        });
        }
    const handleModalClose = () => {
        Keyboard.dismiss;
    };
return (
    <>
    <StatusBar hidden/>
    <Modal visible={visible} animationType='fade'>
        <View style={styles.modal}>
        <TextInput value={title} onChangeText={(text) => handleOnChangeText(text, 'title')} autoFocus = {true} placeholder='Title' placeholderTextColor='white' style={[styles.input, styles.title]}/>
        <TextInput value={description} onChangeText={(text) => handleOnChangeText(text, 'description')} multiline placeholder ='Description' autoFocus = {true} placeholderTextColor='white' style={[styles.input, styles.description]}/>
        
        <View value={image} style={{alignItems: 'center'}}>
        <FlatList numColumns={3} columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 20}}
            />
        <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
            style={{
                height: 100,
                width: 100,
                top: 380,
                right: 135,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <ImageBackground
                source={{
                uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                
                </View>
        </ImageBackground>
            </View>
        </TouchableOpacity>
        </View>           
        <CustomButton
            text="Add Image"
            onPress={ImageSelector}
            type="CAMERA"
        />
        <CustomButton
            text="✔"
            onPress={handleSubmit}
            type="SECONDARY"
        />
        {title.trim() || description.trim()? (
        <CustomButton
            text="<-"
            onPress={closeModal}
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
        marginVertical: 10,
        marginTop: 180,
        borderBottomWidth: 2,
        borderBottomColor:colors.LIGHT,
        fontSize: 20,
        flex: 1,
        color: colors.LIGHT,
    
    },
    modal: {
        backgroundColor: '#180526',
        paddingHorizontal: 25,
        flex: 1,
        
    },
    title: {
        padding:10,
        width: '100%',
        borderBottomWidth: 3,
        
        position: 'absolute',
        fontWeight: 'bold',
        top: -140,
    },
    description: {
        padding: 10,
        width: '100%',
        position: 'absolute',
    
    },
    modalBG: {
        flex: 1,
        zIndex: -1,
    },

})








export default NoteFiles