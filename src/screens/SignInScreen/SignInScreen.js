import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Logo.jpg';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    
    navigation.navigate('HomeScreen');
  }
  const onForgotPasswordPressed = () => {

    navigation.navigate('ResetPassword');
  }
  
  const onSignUpPressed = () => {

    navigation.navigate('SignUp');
  }
  return (
    <ScrollView>
    <View style={styles.root}>
      <Image 
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode="contain" />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}/>
      <CustomInput
        placeholder="Password"
        value ={password}
        setValue={setPassword}
        secureTextEntry />
    
    <CustomButton text="Sign in" onPress={onSignInPressed}/>
    <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY" />

    <SocialSignInButtons />
    
    <CustomButton text="Sign up" onPress={onSignUpPressed} type="TERTIARY" />

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
    
    logo: {
        width: '70%',
        maxWidth: 500,
        maxheight: 300,
    },
});

export default SignInScreen;