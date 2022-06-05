import * as React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import ConfirmEmailScreen from '../../screens/ConfirmEmailScreen';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
import ConfirmPasswordScreen from '../../screens/ConfirmPasswordScreen';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createNativeStackNavigator(); 

function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
      <Stack.Screen name="ConfirmPasswordScreen" component={ConfirmPasswordScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

    </Stack.Navigator>
    </NavigationContainer>
  );
  }
export default Navigation;