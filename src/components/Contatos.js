import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../Actions/AppActions';
import _ from 'lodash';


class Contatos extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.state = {
            fontedeDados: ds.cloneWithRows([
                'Registro 1',
                'Registro 2',
                'Registro 3',
                'Registro 4'
            ])
        }
    }

    componentWillMount() {
        this.props.contatosUsuarioFetch();

    }

    componentWillReceiveProps(nextProps){
        
    }


    render() {
        return (
            <ListView
                dataSource={this.state.fontedeDados}
                renderRow={data=><View>
                    <Text>{data}</Text>
                </View>}
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