import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();


  const onRegisterPressed = () => {

    navigation.navigate('ConfirmEmail');
  };
  const onSignInPressed = () => {

    navigation.navigate('SignIn');
  };
  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Create a new account</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}/>
        <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}/>
      <CustomInput
        placeholder="Password"
        value ={password}
        setValue={setPassword}
        secureTextEntry />
        <CustomInput
        placeholder="Repeat Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry/>
    
    <CustomButton text="Register" onPress={onRegisterPressed}/>
    
    <SocialSignInButtons />
    
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

export default SignUpScreen;