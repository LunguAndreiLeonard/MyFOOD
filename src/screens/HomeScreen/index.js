import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 24, alignSelf: 'center'}}>Home,sweet home</Text>
        </View>
    )
}
export default HomeScreen;