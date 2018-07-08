import React, {Component} from 'react';
import { Link } from 'react-router';
import { Table, Avatar, Spin} from 'antd';
import {connect} from 'react-redux';
import {buscaPessoas} from '../actions/ListagemActions';
import BotoesListagem from './BotoesListagem';

class Listagem extends Component {

    render(){
        const { Column} = Table;

        const tipoAcao = this.props.tipoAcao;
        let objDataTableAux = this.props.pessoas;
        let objDataTable = [];

        if(tipoAcao === 'todos'){
            objDataTable = objDataTableAux.filter( function(elem) {
                return (elem.status === 1)        
            });
        }else if(tipoAcao === 'atendidos'){
            objDataTable = objDataTableAux.filter( function(elem) {
                return (elem.status === 2)        
            });
        }else if(tipoAcao === 'lixeira'){
            objDataTable = objDataTableAux.filter( function(elem) {
                return (elem.status === 3)        
            });
        }else{
            objDataTable = this.props.pessoas;
        }
        
        return(
            <Spin size="large"  spinning={this.props.loadingPessoas}>
                <Table dataSource={objDataTable}  showHeader={false}>
                    <Column
                    title="Avatar"
                    key="avatar"
                    render={(text, record) => (
                        
                        <span>
                            <Avatar 
                                size="large" 
                                src={record.avatar} />
                        </span>
                    )}
                    />
                    <Column
                        title="Nome"
                        dataIndex="name"
                        key="name"
                        render={ text => (
                            <Link to={`/detalhe/${text}`}>{text}</Link>
                        )} 
                    />
                    <Column
                        title="E-mail"
                        dataIndex="email"
                        key="email"
                    />
                    <Column
                        title="Celular"
                        dataIndex="cell"
                        key="cell"
                    />
                    <Column
                        title="Address"
                        dataIndex="city"
                        key="city"
                    />
                    <Column
                        title="Ações"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <BotoesListagem objPessoaListagem={record} parametros={this.props}/>
                            </span>
                        )}
                    />
                </Table>
            </Spin>

        )
    }
}

const mapStateToProps = state => {
    return{
        pessoas : state.ListagemReducer.pessoas,
        loadingPessoas : state.ListagemReducer.loadingPessoas
    }
}
export default connect(mapStateToProps, {buscaPessoas})(Listagem)