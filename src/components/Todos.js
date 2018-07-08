import React, {Component} from 'react';
import Listagem from './Listagem';
import {connect} from 'react-redux';
import {modificaListagem, buscaPessoas} from '../actions/ListagemActions'
import {mostrarBarraPesquisa} from '../actions/PesquisaActions'

class Todos extends Component {

    // componentDidMount(){
    //     this.props.buscaPessoas();
    // }

    render(){
        return (
            <div>
                <Listagem objData={this.props.pessoas} tipoAcao={this.props.route.path}/>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        pessoas : state.ListagemReducer.pessoas
    }
)

export default connect(mapStateToProps, {modificaListagem, buscaPessoas, mostrarBarraPesquisa})(Todos)