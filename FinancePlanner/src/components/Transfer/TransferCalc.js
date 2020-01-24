import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Button } from 'react-native'
import General from '../enums/general'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'

export default class TransferCalc extends Component {

    constructor(props){
        super(props)
        this.state = {
            amount: ""
        }
    }

    getButtonsUsingMap = () => {
        const array = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 'x', 0, 'ok']
    
        return array.map((number) => {
        return (
            <TouchableOpacity 
                style={NumPadStyles.button} key={number} 
                onPress={(number == 'ok')?() => this.props.changeView(true, this.state.amount):() => this._handlePress({number})}>
                    <Text style={NumPadStyles.buttonText} title={number}>
                        {number}</Text>
            </TouchableOpacity>)
        })
    
      }

    _handlePress = (val) => {
        console.log('val', val.number)
        let newValue, src, currentNum
        if(val.number){
            if(val.number === 'x'){ // check if it's a number or remove option
                if((this.state.amount > 0)){ // check if the number can be deleted
                        src = this.state.amount
                    if(src.length > 1){ // delete only if number length is greater than 1
                        newValue = src.substr(0, src.length - 1)
                        this.setState({amount: newValue})
                    }
                    else{
                        this.setState({amount: ''}) // else remove null
                    }
                }
                else {
                    return
                }
            }
            else {
                if(this.state.amount.length < 7){       //amount till 7 digits will be taken
                    currentNum = val.number
                    src = this.state.amount
                    newValue = src.concat(currentNum)
                    this.setState({amount: newValue})
                    console.log('newValue', newValue)
                }
                else{                                   //above 7 units will be returned
                    return
                }
            }
        }
    }

    render(){
        return (
            <KeyboardAvoidingView behavior='padding' style={NumPadStyles.container}>
                <Text style={NumPadStyles.amountText}>{this.state.amount}</Text>
                
                <View style={NumPadStyles.numpadArea}>
                    {this.getButtonsUsingMap()}
                </View>
            </KeyboardAvoidingView>
        )
    }
    
}

const NumPadStyles = StyleSheet.create({
    container: {
        backgroundColor: '#89cff0',
        flex: 1       
    },
    
    buttonText: {
        fontSize: 30,
        color: '#FFF'
    },

    button: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginHorizontal: 25,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 100,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderColor: '#FFF'
    },

    numpadArea: {
        marginTop: 80,
        flexDirection: 'row',
        marginLeft: 50,
        width: 320,
        flexWrap: 'wrap'
    },

    amountText: {
        fontSize: 20,
        textAlign: 'center'
    },

    amountAlignment: {
        flexDirection: 'row',
        backgroundColor: 'grey'
    }
})