import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import  {WebView} from 'react-native-webview';

const RECIPE = 'https://recipebook.io/'

export default function More() {
    return (
        <View style={StyleSheet.container}>
            <StatusBar style="auto"/>
            <View style={{width: '100%', height: '100%'}}>
                <WebView
                    source={{uri: RECIPE}}
                    onLoad={console.log('Loaded!')}
                    />
            </View>
        </View>
    );
};