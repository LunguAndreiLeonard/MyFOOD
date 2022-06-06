import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navigation from './src/components/navigation';
import {Amplify} from 'aws-amplify'
import config from './src/aws-exports'
 
Amplify.configure(config)


const App = () => {
  Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    
    flex: 1,
    backgroundColor: ' black',
  },
  
});


export default App;
