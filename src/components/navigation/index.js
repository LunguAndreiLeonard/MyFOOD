import * as React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../../screens/SignInScreen';
 



/*
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ConfirmPasswordScreen from '../screens/ConfirmPasswordScreen';
*/

const Stack = createNativeStackNavigator(); 

function Navigation() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
  }
export default Navigation;