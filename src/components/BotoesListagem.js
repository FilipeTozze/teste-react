import React, {Component} from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';
import {modificaListagem, alteraStatusPessoa} from '../actions/ListagemActions'

 class BotoesListagem extends Component{

    constructor(){
        super();
        this.marcarTodos = this.marcarTodos.bind(this);
        this.marcarAtendidos = this.marcarAtendidos.bind(this);
        this.marcarLixeira = this.marcarLixeira.bind(this);
    }

    marcarLixeira(obj){
        const idPessoa = obj.key;
        let objPessoas = this.props.pessoas;
        let objRetorno = {};
        objRetorno = objPessoas.map( function(item, index){
                            if(item.key === idPessoa){
                                item.status = 3;
                            }
                            return item;
                        });     
        this.props.alteraStatusPessoa(objRetorno);                       
    }
    marcarTodos(obj){
        const idPessoa = obj.key;
        let objPessoas = this.props.pessoas;
        let objRetorno = {};
        objRetorno = objPessoas.map( function(item, index){
                            if(item.key === idPessoa){
                                item.status = 1;
                            }
                            return item;
                        });     
        this.props.alteraStatusPessoa(objRetorno); 
    }
    marcarAtendidos(obj){
        const idPessoa = obj.key;
        let objPessoas = this.props.pessoas;
        let objRetorno = {};
        objRetorno = objPessoas.map( function(item, index){
                            if(item.key === idPessoa){
                                item.status = 2;
                            }
                            return item;
                        });     
        this.props.alteraStatusPessoa(objRetorno); 
    }
    render(){        
        const tipoAcao = this.props.parametros.tipoAcao;
        if(tipoAcao === 'todos'){
            return (
                <div>
                    <Button onClick={() => this.marcarLixeira(this.props.objPessoaListagem)} icon="delete" size="large" />
                    <Button onClick={() => this.marcarTodos(this.props.objPessoaListagem)} icon="scan" size="large" />
                    <Button onClick={() => this.marcarAtendidos(this.props.objPessoaListagem)} icon="check" size="large" />
                </div>
            )
        }else if(tipoAcao === 'atendidos'){
            return (
                <div>
                    <Button onClick={() => this.marcarLixeira(this.props.objPessoaListagem)} icon="delete" size="large" />
                    <Button onClick={() => this.marcarTodos(this.props.objPessoaListagem)} icon="scan" size="large" />
                </div>
            )
        }else if(tipoAcao === 'lixeira'){
            return (
                <div>
                    <Button onClick={() => this.marcarTodos(this.props.objPessoaListagem)} icon="scan" size="large" />
                    <Button onClick={() => this.marcarAtendidos(this.props.objPessoaListagem)} icon="check" size="large" />
                </div>
            )
        }else{
            return (
                <div>
                    <Button onClick={() => this.marcarLixeira(this.props.objPessoaListagem)} icon="delete" size="large" />
                    <Button onClick={() => this.marcarTodos(this.props.objPessoaListagem)} icon="scan" size="large" />
                    <Button onClick={() => this.marcarAtendidos(this.props.objPessoaListagem)} icon="check" size="large" />
                </div>
            )
        }
       
    }

}
const mapStateToProps = state => (
    {
        pessoas : state.ListagemReducer.pessoas
    }
)
export default connect(mapStateToProps, {modificaListagem, alteraStatusPessoa})(BotoesListagem)