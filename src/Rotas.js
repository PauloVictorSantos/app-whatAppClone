import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContatos from './components/AdicionarContatos';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54' }}
        title={{ color: '#fff' }}>
        <Scene key="root" >
            <Scene key="boasVindas" hideNavBar={true} component={BoasVindas} title="Bem Vindo" />
            <Scene key="formLogin" hideNavBar={true} component={FormLogin} title="Login" />
            <Scene key="formCadastro" hideNavBar={false} component={FormCadastro} title="Cadastro" />
            <Scene key="principal" hideNavBar={true} component={Principal} title="Principal" />
            <Scene key="adicionarContatos" hideNavBar={false} component={AdicionarContatos} title="Adicionar Contato" />
        </Scene>
    </Router>
); 