import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Switch, TouchableHighlight } from 'react-native'
import General from '../enums/general'

export default class TransferConfirmation extends Component {

    constructor(props){
        super(props)
        this.state = {
            switchValue: false
        }
    }

    toggleSwitch = (value) => {
        console.log('value', value)
        this.setState({switchValue: value})
     }

    render(){
        console.log('this.props123', this.props.propData.navigation)
        return (
            <KeyboardAvoidingView behavior='padding' style={confirmationStyles.container}>
                <View>
                    <View style={confirmationStyles.rows}>
                        <Text style={confirmationStyles.text}>Recipient Reference</Text>
                        <Text style={confirmationStyles.text}>Other Payment Details (optional)</Text>
                    </View>
                    
                    <Text style={confirmationStyles.period}>when</Text>

                    <View style={confirmationStyles.mainContainer}>
                        <Text style={confirmationStyles.periodText}>Today</Text>
                        <Switch style={confirmationStyles.switch}
                            onValueChange = {this.toggleSwitch}
                            value = {this.state.switchValue}/>

                        <Text style={confirmationStyles.periodText}>Later</Text>
                        <Switch style={confirmationStyles.switch}
                            onValueChange = {this.toggleSwitch}
                            value = {!this.state.switchValue}/>
                    </View>

                    <View style={confirmationStyles.buttons}>
                        <TouchableHighlight style={confirmationStyles.cancel} 
                        onPress={() => this.props.changeView(false)}>
                            <Text style={confirmationStyles.confirmText}>Cancel</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={confirmationStyles.confirm}
                            onPress={() => this.props.propData.navigation.navigate('Summary', this.props)}>
                            <Text style={confirmationStyles.confirmText}>Proceed</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
    
}

const confirmationStyles = StyleSheet.create({
    container: {
        backgroundColor: '#89cff0',
        flex: 1
    },

    rows: {
        backgroundColor: 'white',
        opacity: 0.5,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2
    },

    text: {
        marginBottom: 15,
        fontSize: 15,
        // color: '#FFF'
    },

    period: {
        alignSelf:'center',
        fontSize: 20,
        marginTop: 20,
        color: '#FFF'
    },

    switch: {
        alignSelf: 'flex-end',
        marginTop: -15
    },

    periodText: {
        fontSize: 25
    },

    mainContainer: {
        margin: 20
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
        flexDirection: 'row'
    }

})