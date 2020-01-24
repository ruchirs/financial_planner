import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableHighlight } from 'react-native'
import General from '../enums/general'

export default class TransferSummary extends Component {

    render(){
        
        const { navigation } = this.props;
        let propData =  navigation.getParam('propsValue', 'default value')
        let parentState = navigation.getParam('currentState', 'default value')
              
        return (
            <KeyboardAvoidingView behavior='padding' style={summaryStyles.container}>
                <View>
                
                    <View style={summaryStyles.information}>
                        <View style={summaryStyles.contentContainer}>
                            <Text style={summaryStyles.textContent}>From Account</Text>
                            <View style={summaryStyles.dimension}>
                            <Text style={summaryStyles.textValue}>{propData.fromType}</Text>
                            <Text style={summaryStyles.textValue}>{propData.fromAccount}</Text>
                            </View>
                        </View>

                        <View style={summaryStyles.contentContainer}>
                            <Text style={summaryStyles.textContent}>Transfer To Ac</Text>
                            <View style={summaryStyles.dimension}>
                            <Text style={summaryStyles.textValue}>{propData.toType}</Text>
                            <Text style={summaryStyles.textValue}>{propData.toAccount}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={summaryStyles.information}>
                        <View style={summaryStyles.contentContainer}>
                            <Text style={summaryStyles.textContent}>Schedule Date-</Text>
                            <View style={summaryStyles.dimension}>
                                <Text style={summaryStyles.textValue}>{(parentState.switchValue == true)?'Today': 'Later'}</Text>
                            </View>
                        </View>

                        <View style={summaryStyles.contentContainer}>
                            <Text style={summaryStyles.textContent}>Total Amount- </Text>
                            <View style={summaryStyles.dimension}>
                                <Text style={summaryStyles.textValue}>{propData.propAmount}</Text>
                            </View>
                        </View>

                        <View style={summaryStyles.contentContainer}>
                            <Text style={summaryStyles.textContent}>Reference Type-</Text>
                            <View style={summaryStyles.dimension}>
                                <Text style={summaryStyles.textValue}>{propData.transferMode}</Text>
                            </View>
                        </View>

                        <View style={summaryStyles.contentContainer}>
                            <Text style={summaryStyles.textContent}>Other Details -</Text>
                            <View style={summaryStyles.dimension}>
                                <Text style={summaryStyles.textValue}>N/A</Text>
                            </View>
                        </View>
                    </View>

                    <View style={summaryStyles.buttons}>
                        <TouchableHighlight style={summaryStyles.cancel} 
                        onPress={() => this.props.navigation.navigate('Initial', this.props)}>
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
        backgroundColor: '#ea3c53',
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
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: -370,
        flexDirection: 'row'
    },

    information: {
        backgroundColor: 'white',
        opacity: 0.5,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 30
    },

    textContent: {
        fontSize: 20,
        marginBottom: 10
    },

    textValue: {
        textAlign: 'right',
        fontSize: 18
    },

    contentContainer: {
        flexDirection: 'row',
        marginBottom: 20
    },

    dimension: {
        width: 200
    }
})