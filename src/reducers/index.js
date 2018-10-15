import { combineReducers } from 'redux';
import AutenticacaoReducers from './AutenticacaoReducer';
import AppReducer from './AppReducer';
import ListaContatosReducers from './ListaContatosReducers';
import ListaConversaReducer from './ListaConversaReducer';
import ListaConversasReducer from './ListaConversasReducer';


export default combineReducers({
    AutenticacaoReducers,
    AppReducer,
    ListaContatosReducers,
    ListaConversaReducer,
    ListaConversasReducer
});