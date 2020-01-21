import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'

export default class AuthenticationForm extends Component {

    render(){
        return (
            <View style={loginStyles.container}>
                <StatusBar 
                barStyle="light-content"/>
                
                <TextInput 
                style={loginStyles.input} 
                placeholder="username or email"
                placeholderTextColor="rgba(255, 255, 255, 0.9)" 
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}/>
                
                <TextInput 
                style={loginStyles.input} 
                placeholder="password" 
                placeholderTextColor="rgba(255, 255, 255, 0.9)" 
                secureTextEntry 
                returnKeyType="go" 
                ref={(input) => this.passwordInput = input}/>

                <TouchableOpacity style={loginStyles.buttonContainer}>
                    <Text style={loginStyles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )}

}

const loginStyles = StyleSheet.create({
    container: {
        padding: 20
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },

    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '800'
    }
})