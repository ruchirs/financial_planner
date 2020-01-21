import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native'
import AuthForm from './AuthenticationForm'

export default class Login extends Component {

    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                    source={require('../images/loginImage.jpg')} />
                    <Text style={styles.title}>Finance Planner</Text>
                </View>

                <View style={styles.formContainer}>
                    <AuthForm />
                </View>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#40e0d0'
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height: 100
    },

    title: {
        color: '#FFF',
        fontSize: 25,
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.8
    }
})