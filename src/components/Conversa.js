import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import {modificaMensagem} from '../Actions/AppActions';

export default class Conversa extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}></View>
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput
                        value={this.props.mensagem}
                        onChangeText={texto =>this.props.modificaMensagem(texto)}
                        style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }}
                    />
                </View>
                <TouchableHighlight onPress={() => false} underlayColor='#fff'>
                    <Image source={require('../imgs/enviar_mensagem.png')} />
                </TouchableHighlight>
            </View>
        );

    }
}

mapStateToProps = state => {
    return ({
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, {modificaMensagem})(Conversa);