import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Button } from 'react-native'
import General from '../enums/general'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'

export default class TransferCalc extends Component {

    constructor(props){
        super(props)
        this.state = {
            amount: 0.00
        }
    }

    getButtonsUsingMap = () => {
        const array = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 'x', 0, 'ok']
    
        return array.map((number) => {
        return (
            <TouchableOpacity 
                style={NumPadStyles.button} key={number} 
                onPress={(number == 'ok')?() => this.props.changeView(true):() => this._handlePress({number})}>
                    <Text style={NumPadStyles.buttonText} title={number}>
                        {number}</Text>
            </TouchableOpacity>)
        })
    
      }

    _handlePress = (val) => {
        console.log('val', val.number)
        if(val.number){

            // let value = (value == '' || null || undefined)? 0 : value
            // value = value.concat(val.number)
            // this.setState({amount: val.number})
        }
    }

    render(){
        console.log('this.props', this.props)
        return (
            <KeyboardAvoidingView behavior='padding' style={NumPadStyles.container}>
                <TouchableHighlight style={NumPadStyles.amountAlignment}>
                    <Text style={NumPadStyles.amountText}>{this.state.amount}</Text>
                </TouchableHighlight>
                
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
        flex: 1,
        flexDirection: 'row',
        
        
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
        // backgroundColor: 'white',
        flexWrap: 'wrap'
    },

    amountText: {
        fontSize: 30,
        flexDirection: 'row'
    },

    amountAlignment: {
        flexDirection: 'row',
        // justifyContent: 'center',
        backgroundColor: 'grey'
    }
})