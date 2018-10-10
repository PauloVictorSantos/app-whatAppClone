import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../Actions/AppActions';
import _ from 'lodash';


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

        this.fontedeDados = ds.cloneWithRows([contatos]);

    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.fontedeDados}
                renderRow={data => (
                    <View>
                        <Text>{data.nome}</Text>
                        <Text>{data.email}</Text>
                    </View>)
                }
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