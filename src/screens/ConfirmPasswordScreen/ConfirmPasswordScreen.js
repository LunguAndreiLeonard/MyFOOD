import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmPasswordScreen = () => {
  
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const navigation = useNavigation();



  const onSubmitPressed = () => {
    console.warn('onConfirmPressed');
  }
 
  const onSignInPressed = () => {
    

    navigation.navigate('SignIn');
  }
  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>
      <CustomInput
        placeholder="Code"
        value={code}
        setValue={setCode}/>
      <CustomInput
        placeholder="New Password"
        value={newPassword}
        setValue={setNewPassword}/>
    
    <CustomButton text="Submit" onPress={onSubmitPressed}/>
    <CustomButton text="Sign in page" onPress={onSignInPressed} type="TERTIARY" />

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#191A1C",
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'yellow',
        margin: 10,
    },
    
});

export default ConfirmPasswordScreen;