import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, Modal } from 'react-native'
import General from '../enums/general'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Calc from './TransferCalc'
import Confirmation from './TransferConfirmation'

export default class TransferInitial extends Component {

    constructor(props){
        super(props)
        this.state = {
            modalVisible: false,
            stateChange: false
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    changeViewComponent = (val) => {
            this.setState({stateChange: val})
    }

    render(){
        return (
            <KeyboardAvoidingView behavior='padding' style={initialStyles.container}>
                
                <Modal style={initialStyles.modal}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={initialStyles.popupContent}>
                        <Button title="Click To Close Modal" onPress = {() => {
                  this.setState({ modalVisible:!this.state.modalVisible})}}/>

                        <View>
                            {
                                accountDetails.map(account => {
                                    return(
                                <Text>{account.AccountNo}</Text>
                                )
                                })
                            }
                        </View>
                    </View>
                </Modal>
                <View style={initialStyles.logoContainer}>
                    <TouchableOpacity style={initialStyles.accountLeft} onPress={() => {
            this.setModalVisible(true);
          }}>
                        <Text style={initialStyles.titleText} >
                            From:
                        </Text>
                        <FontAwesomeIcon icon="university" size={100} color={'#FFF'} />
                        <View>
                            <Text style={initialStyles.accountDetails}>{} Account</Text>
                            <Text style={initialStyles.accountDetails}>{}</Text>
                            <Text style={initialStyles.accountDetails}>Balance</Text>
                            <Text style={initialStyles.accountDetails}>{}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={initialStyles.iconSpace}>
                        <FontAwesomeIcon icon="arrow-alt-circle-right" size={32} color={'#FFF'}/>
                    </View>

                    <TouchableOpacity style={initialStyles.accountRight}>
                        <Text style={initialStyles.titleText} >
                            To:
                        </Text>
                        <FontAwesomeIcon icon="university" size={100} color={'#FFF'} />
                        <View>
                        <Text style={initialStyles.accountDetails}>{} Account</Text>
                        <Text style={initialStyles.accountDetails}>{}</Text>
                        <Text style={initialStyles.accountDetails}>Balance</Text>
                        <Text style={initialStyles.accountDetails}>{}</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                {this.state.stateChange?<Confirmation propData={this.props} changeView={this.changeViewComponent}/>:<Calc propData={this.props} changeView={this.changeViewComponent}/>}
            </KeyboardAvoidingView>
        )
    }
    
}

const initialStyles = StyleSheet.create({
    container: {
        backgroundColor: '#89cff0',
        flex: 1
    },

    logo: {
        width: 100,
        height: 100
    },

    logoContainer: {
        // alignItems: 'center',
        marginTop: 100,
        flex: 1,
        // justifyContent: 'center',
        flexDirection: 'row',
        width: 390,
        marginLeft: 10,
        
    },

    accountLeft: {
        alignItems: 'center',
        width: 150,
        
    },

    accountRight: {
        width: 150,
        
        alignItems: 'center'
    },

    iconSpace: {
        alignItems: 'center',
        marginTop: 70,
        width: 100
    },

    titleText: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#FFF'
    },

    modal: {
        flex:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        opacity: 50

    },

    modalText: {
        color: 'red',
    },

    popupContent: {
        marginTop: 200
    },

    accountDetails: {
        color: 'white'
    }

})

const accountDetails = [
    {
        type: 'Savings',
        AccountNo: '09087654',
        balance: '998767'
    },

    {   
        type: 'Current',
        AccountNo: '09087765',
        balance: '907657'
    }
]