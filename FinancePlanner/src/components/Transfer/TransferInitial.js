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
            stateChange: false,
            fromAccount: '',
            fromBalance: '',
            fromType: '',
            toAccount: '',
            toBalance: '',
            toType: '',
            source: '',
            propAmount: ''
        }
    }

    setModalVisible(visible, src) {
        this.setState({modalVisible: visible, source: src});
    }

    changeViewComponent = (val, value) => {
            this.setState({stateChange: val, propAmount: value})
    }

    getRecord = (record) => {
        let src = this.state.source
        console.log('src', src)
        if(src === 'from')
        this.setState({fromAccount: record.AccountNo, fromBalance: record.balance, modalVisible: !this.state.modalVisible, fromType: record.type})
        else if(src === 'to')
        this.setState({toAccount: record.AccountNo, toBalance: record.balance, modalVisible: !this.state.modalVisible, toType: record.type})
    }

    render(){
        return (
            <KeyboardAvoidingView behavior='padding' style={initialStyles.container}>
                
                <Modal style={initialStyles.modal}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    >
                    <View style={initialStyles.popupContent}>
                        <Button title="Click To Close Modal" onPress = {() => {
                  this.setState({ modalVisible:!this.state.modalVisible})}}/>

                        <View style={initialStyles.modalContainer}>
                            <Text style={initialStyles.title}>Select an Account</Text>
                            {
                                accountDetails.map(record => {
                                return (<TouchableOpacity key={record.AccountNo} style={initialStyles.record} 
                                    onPress={() => this.getRecord(record)}>
                                    <View style={initialStyles.table}>
                                        <Text style={initialStyles.accText}>{record.type} Account</Text>
                                        <Text style={initialStyles.accValues}>{record.AccountNo}</Text>
                                    </View>

                                    <View style={initialStyles.table}>
                                        <Text style={initialStyles.accText}>Available Balance</Text>
                                        <Text style={initialStyles.accValues}>{record.balance}</Text>
                                    </View>
                                </TouchableOpacity>)
                                })
                            }
                        </View>
                    </View>
                </Modal>
                <View style={initialStyles.logoContainer}>
                    <TouchableOpacity style={initialStyles.accountLeft} onPress={() => {
            this.setModalVisible(true, 'from');
          }}>
                        <Text style={initialStyles.titleText} >
                            From:
                        </Text>
                        <FontAwesomeIcon icon="university" size={100} color={'#FFF'} />
                        <View>
                            <Text style={initialStyles.accountDetails}>{this.state.fromType} Account</Text>
                            <Text style={initialStyles.accountDetails}>{this.state.fromAccount}</Text>
                            <Text style={initialStyles.accountDetails}>Available Balance</Text>
                            <Text style={initialStyles.accountDetails}>{this.state.fromBalance}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={initialStyles.iconSpace}>
                        <FontAwesomeIcon icon="arrow-alt-circle-right" size={32} color={'#FFF'}/>
                    </View>

                    <TouchableOpacity style={initialStyles.accountRight} onPress={() => {
            this.setModalVisible(true, 'to');
          }}>
                        <Text style={initialStyles.titleText} >
                            To:
                        </Text>
                        <FontAwesomeIcon icon="university" size={100} color={'#FFF'} />
                        <View>
                        <Text style={initialStyles.accountDetails}>{this.state.toType} Account</Text>
                        <Text style={initialStyles.accountDetails}>{this.state.toAccount}</Text>
                        <Text style={initialStyles.accountDetails}>Available Balance</Text>
                        <Text style={initialStyles.accountDetails}>{this.state.toBalance}</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                {this.state.stateChange?<Confirmation propData={this.props} changeView={this.changeViewComponent} stateValues={this.state}/>:<Calc propData={this.props} changeView={this.changeViewComponent} />}
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
        marginTop: 100,
        flex: 1,
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
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    },

    table: {
        flexDirection: 'row',
        marginHorizontal: 30
    },

    modalContainer: {
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: '#89cff0',
        padding: 10,
        borderRadius: 10
    },

    accText: {
        marginRight: 10,
        justifyContent: "flex-start",
        fontSize: 15
    },

    accValues: {
        justifyContent: "flex-end"
    },

    record: {
        marginBottom: 15,
        backgroundColor: '#89cff0',
        borderRadius: 10,
        padding: 10
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        textDecorationLine: 'underline'
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