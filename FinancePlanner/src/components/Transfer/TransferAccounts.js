import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native'
import General from '../enums/general'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class TransferAccounts extends Component {

    render(){
        return (
            <KeyboardAvoidingView behavior='padding' style={accountStyles.container}>
                <View>
                    <Text style={accountStyles.title}>{General.general}</Text>
                </View>

                <View style={accountStyles.tiles}>
                    <TouchableOpacity styles={accountStyles.tilesBorder} onPress={() => this.props.navigation.navigate('Initial', {mode: 'Own acc Transfer'})}>
                        <View style={{justiftyContent:"center", alignItems:"center"}}><FontAwesomeIcon icon="retweet" size={40} color={'#FFF'}/></View>
                        <Text style={accountStyles.tilesText}>Own Account Transfer</Text>
                    </TouchableOpacity>

                    <View styles={accountStyles.tilesBorder}>
                        <View style={{justiftyContent:"center", alignItems:"center"}}><FontAwesomeIcon icon="user-friends" size={40} color={"#FFF"} /></View>
                        <Text style={accountStyles.tilesText}>Other Account Transfer</Text>
                    </View>

                    <View styles={accountStyles.tilesBorder}>
                        <View style={{justiftyContent:"center", alignItems:"center"}}><FontAwesomeIcon icon="tty" size={40} color={"#FFF"} /></View>
                        <Text style={accountStyles.tilesText}>Telegraphic Trasnsfer</Text>
                    </View>

                    <View styles={accountStyles.tilesBorder}>
                        <View style={{justiftyContent:"center", alignItems:"center"}}><FontAwesomeIcon icon="tasks" size={40} color={"#FFF"} /></View>
                        <Text style={accountStyles.tilesText}>Manage Transfer</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
    
}

const accountStyles = StyleSheet.create({
    container: {
        backgroundColor: '#89cff0',
        flex: 1
    },

    title: {
        fontSize: 25,
        color: '#FFF',
        textAlign: 'center',
        marginTop: 200,
        paddingHorizontal: 100
        
    },

    tiles: {
        marginTop: 30,
        marginLeft: 100,
        flexDirection: 'row',
        width: 250,
        flexWrap: 'wrap',
        
    },

    tilesText: {
        flexShrink: 1,
        flexWrap: 'wrap',
        width: 100,
        textAlign: 'center',
        marginBottom: 70,
        color: '#FFF'
    },

    tilesBorder: {
        borderWidth: 1,
        borderColor: '#FFF',
        flexWrap: 'wrap',
        marginHorizontal: 50
    }
})