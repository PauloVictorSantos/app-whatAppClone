import { combineReducers } from 'redux';
import AutenticacaoReducers from './AutenticacaoReducer';
import AppReducer from './AppReducer';
import ListaContatosReducers from './ListaContatosReducers';

export default combineReducers({
    AutenticacaoReducers,
    AppReducer,
    ListaContatosReducers
});