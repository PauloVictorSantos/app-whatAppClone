import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { modificaMensagem, enviarMensagem } from '../Actions/AppActions';

export class Conversa extends Component {

    _enviarMensagem(){
        const {mensagem, contatoNome, contatoEmail}  =  this.props;
        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail);
    }

    render() {
        console.log("props de conversa",this.props);
        return (
            <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}></View>
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                        style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }}
                    />

                    <TouchableHighlight onPress={this._enviarMensagem.bind(this)} underlayColor='#fff'>
                        <Image source={require('../imgs/enviar_mensagem.png')} />
                    </TouchableHighlight>
                </View>
            </View>
        );

    }
}

mapStateToProps = state => {
    return ({
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem })(Conversa);