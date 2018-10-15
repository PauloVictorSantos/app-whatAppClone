import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { modificaMensagem, enviarMensagem, conversaUsuarioFetch } from '../Actions/AppActions';

export class Conversa extends Component {

    componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.contatoEmail);
    }

    _enviarMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;
        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail);
    }

    render() {
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

    const conversa = _.map(state.ListaConversaReducer,(val, uid)=>{
        return {...state, uid};
    });

    console.log(conversa);

    return ({
        conversa,
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem, conversaUsuarioFetch })(Conversa);