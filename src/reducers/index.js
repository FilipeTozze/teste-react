import {combineReducers} from 'redux';
import ListagemReducer from './ListagemReducer';
import PesquisaReducer from './PesquisaReducer';

export default combineReducers({
    ListagemReducer : ListagemReducer,
    PesquisaReducer : PesquisaReducer
})