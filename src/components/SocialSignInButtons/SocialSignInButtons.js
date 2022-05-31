import { View, Text, } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

const SocialSignInButtons = () => {
    const onSignInWithGooglePressed = () => {
        console.warn('Sign in with Google');
    }
    const onSignInWithFacebookPressed = () => {
        console.warn('Sign in with Facebook');
    }

  return (
    <View>
        <CustomButton text="Sign up with Google" onPress={onSignInWithGooglePressed} bgColor="#FAE9EA" fgColor="#DD4D44" />
        <CustomButton text="Sign up with Facebook" onPress={onSignInWithFacebookPressed} bgColor="#E7EAF4" fgColor="#4765A9" />
    
    </View>
  );
};


export default SocialSignInButtons;