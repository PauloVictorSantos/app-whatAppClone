import { combineReducers } from 'redux';
import AutenticacaoReducers from './AutenticacaoReducer';
import AppReducer from './AppReducer';

export default combineReducers({
    AutenticacaoReducers,
    AppReducer,
    ListaContatosReducers
});