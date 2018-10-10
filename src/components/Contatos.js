import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../Actions/AppActions';
import _ from 'lodash';


class Contatos extends Component {

    componentWillMount() {
        this.props.contatosUsuarioFetch();
    }

    render() {
        return (
            <View>
                <Text>Contatos</Text>
            </View>
        );
    }
}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducers,(val,uid)=>{
        return{
            ...val, uid
        }
    })
    return {}
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);