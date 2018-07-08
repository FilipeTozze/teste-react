import React, {Component} from 'react';
import Listagem from './Listagem';
import {connect} from 'react-redux';
import {buscaPessoas} from '../actions/ListagemActions'

class Lixeira extends Component {
    render(){
        return (
            <div>
                <Listagem objData={this.props.pessoas} tipoAcao={this.props.route.path}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pessoas : state.ListagemReducer.pessoas
    }
}

export default connect(mapStateToProps,{buscaPessoas})(Lixeira)