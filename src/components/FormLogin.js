import React from 'react';
import {
    View, TextInput, Button, Text, TouchableHighlight, ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../Actions/AutenticacaoActions';

const formLogin = props => {
    console.log(props);
    return (
        <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, color: '#fff' }}>WhatApp Clone</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <TextInput value={props.email}
                        onChangeText={texto => props.modificaEmail(texto)}
                        style={{ fontSize: 20, height: 45 }}
                        placeholder="E-mail"
                        placeholderTextColor="#fff" />
                    <TextInput
                        secureTextEntry
                        value={props.senha}
                        onChangeText={texto => props.modificaSenha(texto)}
                        style={{ fontSize: 20, height: 45 }}
                        placeholder="Senha"
                        placeholderTextColor="#fff" />
                    <TouchableHighlight onPress={() => Actions.formCadastro()}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Ainda não tem cadastro? Cadastre-se</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 2 }}>
                    <Button title="Acessar" color='#115E54' onPress={() => false} />
                </View>
            </View>
        </ImageBackground>
    );
}

const mapStateToProps = state => ({
    email: state.AutenticacaoReducers.email,
    senha: state.AutenticacaoReducers.senha
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);
