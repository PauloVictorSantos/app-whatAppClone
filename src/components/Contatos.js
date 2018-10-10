import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../Actions/AppActions';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';


class Contatos extends Component {

    componentWillMount() {
        this.props.contatosUsuarioFetch();
        this.criaFonteDedados(this.props.contatos);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDedados(nextProps.contatos);
    }

    criaFonteDedados(contatos) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.fontedeDados = ds.cloneWithRows(contatos);

    }

    renderRow(contato) {
        return (
            <TouchableHighlight onPress={()=>Actions.conversa()}>
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#ccc' }}>
                    <Text style={{ fontSize: 25 }}>{contato.nome}</Text>
                    <Text style={{ fontSize: 18 }}>{contato.email}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.fontedeDados}
                renderRow={data => this.renderRow(data)}
            />
        );
    }
}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducers, (val, uid) => {
        return {
            ...val, uid
        }
    })
    return {
        contatos
    }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);