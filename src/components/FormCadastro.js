import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome } from '../Actions/AutenticacaoActions';

const formCadastro = props => {
    console.log(props);
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <TextInput value={props.nome}
                onChangeText={texto=>props.modificaNome(texto)}
                    placeholder="Nome" style={{ fontSize: 20, height: 45 }} />
                <TextInput value={props.email}
                    onChangeText={texto => props.modificaEmail(texto)}
                    placeholder="E-mail" style={{ fontSize: 20, height: 45 }} />
                <TextInput value={props.senha}
                    onChangeText={texto => props.modificaSenha(texto)}
                    placeholder="Senha" style={{ fontSize: 20, height: 45 }} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title="Cadastrar" color="#115E54" onPress={() => false} />
            </View>
        </View>
    );
}

const mapStateToProps = state => ({
    nome: state.AutenticacaoReducers.nome,
    email: state.AutenticacaoReducers.email,
    senha: state.AutenticacaoReducers.senha
});

export default connect(mapStateToProps, {modificaEmail, modificaSenha, modificaNome})(formCadastro);