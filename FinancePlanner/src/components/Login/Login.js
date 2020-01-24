import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native'
import AuthForm from './AuthenticationForm'
import SafeAreaView from 'react-native-safe-area-view';


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
                    <AuthForm propData={this.props}/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89cff0'
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