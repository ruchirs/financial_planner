import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableHighlight } from 'react-native'
import General from '../enums/general'

export default class TransferSummary extends Component {

    render(){
        return (
            <KeyboardAvoidingView behavior='padding' style={summaryStyles.container}>
                <View>
                
                    <View>
                        <Text>From Account</Text>
                        <Text>Transfer To</Text>
                    </View>

                    <View>
                        <Text>When</Text>
                        <Text>Amount</Text>
                        <Text>Receipient Reference</Text>
                        <Text>Other Payment Details</Text>
                    </View>

                    <View style={summaryStyles.buttons}>
                        <TouchableHighlight style={summaryStyles.cancel} 
                        onPress={() => this.props.changeView(false)}>
                            <Text style={summaryStyles.confirmText}>Cancel</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={summaryStyles.confirm}
                            onPress={() => this.props.navigation.navigate('Complete', this.props)}>
                            <Text style={summaryStyles.confirmText}>Proceed</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
    
}

const summaryStyles = StyleSheet.create({
    container: {
        backgroundColor: '#89cff0',
        flex: 1
    },

    confirm: {
        backgroundColor: '#2980b9',
        width: 165,
        marginBottom: 50,
        marginHorizontal: 20,
        padding: 15,
        alignSelf: 'flex-end'
    },

    cancel: {
        backgroundColor: 'grey',
        width: 165,
        marginBottom: 50,
        marginHorizontal: 20,
        padding: 15
    },

    confirmText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF'
    }, 

    buttons: {
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})