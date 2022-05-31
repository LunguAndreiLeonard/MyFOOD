import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const ConfirmEmailScreen = () => {
  
  const [code, setCode] = useState('');




  const onConfirmPressed = () => {
    console.warn('onConfirmPressed');
  }
  const onResendPressed = () => {
    console.warn('onResendPressed');
  }
  const onSignInPressed = () => {
    console.warn('Sign in page');
  }
  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your new account</Text>
      <CustomInput
        placeholder="Code"
        value={code}
        setValue={setCode}/>
      
    
    <CustomButton text="Confirm" onPress={onConfirmPressed}/>
    <CustomButton text="Resend code to email" onPress={onResendPressed} type="TERTIARY" />
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

export default ConfirmEmailScreen;