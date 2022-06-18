import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';


const Loader = () => {
return (
    <View style={ [StyleSheet.absoluteFillObject, styles.container]}>
        <LottieView source={require('../../../assets/mail.json')} 
        autoPlay
        loop />
    </View>
)
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red',
        zIndex: 1,
        top: 450,
    }
})

export default Loader;
