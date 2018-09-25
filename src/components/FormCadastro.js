import React from 'react';
import { View, TextInput, Button } from 'react-native';

const formCadastro = props => {
    console.log(props);
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <TextInput placeholder="Nome" style={{ fontSize: 20, height: 45 }} />
                <TextInput placeholder="E-mail" style={{ fontSize: 20, height: 45 }} />
                <TextInput placeholder="Senha" style={{ fontSize: 20, height: 45 }} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title="Cadastrar" color="#115E54" onPress={() => false} />
            </View>
        </View>
    );
}

const mapStateToProps = state => ({
    nome: state.AutenticacaoReduce.nome,
    email: state.AutenticacaoReduce.email,
    senha: state.AutenticacaoReduce.senha
});

export default connect(mapStateToProps, null)(formCadastro);