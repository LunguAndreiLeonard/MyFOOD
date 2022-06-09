/*import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
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
*/
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/Logo.jpg';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = async data => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          style={styles.textInput}
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomInput
          style={styles.textInput}
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton
          text={loading ? 'Loading...' : 'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
        />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
    backgroundColor: '#180526',
    
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  textInput: {
    color: 'green',
   },
});

export default SignInScreen;
