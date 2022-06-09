//import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
/*import React, {useState} from 'react';
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
*/
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInputs';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const ConfirmPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = async data => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
        />

        <CustomInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmPasswordScreen;
