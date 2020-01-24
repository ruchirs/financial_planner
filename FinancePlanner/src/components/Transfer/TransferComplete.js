import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Button } from 'react-native'
import General from '../enums/general'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default class TransferComplete extends Component {

    //Random Unique ID Generator
    guidGenerator = () => {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4());
    }

    
    render(){
        return (
            <KeyboardAvoidingView behavior='padding' style={profileStyles.container}>
                <View style={profileStyles.logoContainer}>
                    <Image style={profileStyles.logo}
                        source={require('../images/check.png')} />
                    <Text style={profileStyles.textStyle}>{General.complete}</Text>
                    <Text style={profileStyles.textStyle}>ref ID: {this.guidGenerator()}</Text>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={profileStyles.iconContainer}>
                            <View style={{justiftyContent:"center", alignItems:"center"}}><FontAwesomeIcon icon="search" size={40} color={"#FFF"} /></View>
                            <Text style={profileStyles.iconTexts}>View Receipt</Text>
                        </View>

                        <View style={profileStyles.iconContainer}>
                            <View style={{justiftyContent:"center", alignItems:"center"}}><FontAwesomeIcon icon="envelope" size={40} color={"#FFF"} /></View>
                            <Text style={profileStyles.iconTexts}>Email Reference</Text>
                        </View>
                    </View>

                </View>
                <TouchableHighlight style={profileStyles.confirm}
                    onPress={() => this.props.navigation.navigate('Accounts')}>
                    <Text style={profileStyles.confirmText}>Done</Text>
                </TouchableHighlight>
            </KeyboardAvoidingView>
        )
    }
    
}

const profileStyles = StyleSheet.create({
    container: {
        backgroundColor: '#89cff0',
        flex: 1
    },

    logo: {
        width: 100,
        height: 100
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    textStyle: {
        fontSize: 18,
        color: '#FFF'
    },

    buttonStyles: {
        borderRadius:10,
        borderWidth: 3,
        borderColor: '#fff'

    },

    confirm: {
        backgroundColor: '#2980b9',
        width: 370,
        marginBottom: 50,
        marginHorizontal: 20,
        padding: 15
    },

    confirmText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF'
    },

    iconTexts: {
        margin: 15,
        color: '#FFF'
    },

    iconContainer: {
        margin: 4,
        padding: 2,
        borderWidth: 2,
        borderColor: '#FFF'
    }
})