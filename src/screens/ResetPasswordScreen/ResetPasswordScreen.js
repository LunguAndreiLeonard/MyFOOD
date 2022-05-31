import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';

const ResetPasswordScreen = () => {
  
  const [username, setUsername] = useState('');




  const onResetPressed = () => {
    console.warn('onConfirmPressed');
  }
 
  const onSignInPressed = () => {
    console.warn('Sign in page');
  }
  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}/>
      
    
    <CustomButton text="Reset" onPress={onResetPressed}/>
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

export default ResetPasswordScreen;