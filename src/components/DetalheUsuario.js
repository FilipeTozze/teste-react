import React, {Component} from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router';


class DetalheUsuario extends Component {
    constructor(){
        super();
        this.state = {
            nome: true,
            email: false,
            aniversario: false,
            endereco: false,
            telefone: false,
            senha: false,
            detalhePessoa: ''
        }
        this.showNome = this.showNome.bind(this);
        this.showEmail = this.showEmail.bind(this);
        this.showAniversario = this.showAniversario.bind(this);
        this.showEndereco = this.showEndereco.bind(this);
        this.showTelefone = this.showTelefone.bind(this);
        this.showSenha = this.showSenha.bind(this);
    }

    showNome(){
        this.setState({
            nome: true,
            email: false,
            aniversario: false,
            endereco: false,
            telefone: false,
            senha: false
        });
    }
    showEmail(){
        this.setState({
            nome: false,
            email: true,
            aniversario: false,
            endereco: false,
            telefone: false,
            senha: false
        });
    }
    showAniversario(){
        this.setState({
            nome: false,
            email: false,
            aniversario: true,
            endereco: false,
            telefone: false,
            senha: false
        });
    }
    showEndereco(){
        this.setState({
            nome: false,
            email: false,
            aniversario: false,
            endereco: true,
            telefone: false,
            senha: false
        });
    }
    showTelefone(){
        this.setState({
            nome: false,
            email: false,
            aniversario: false,
            endereco: false,
            telefone: true,
            senha: false
        });
    }
    showSenha(){
        this.setState({
            nome: false,
            email: false,
            aniversario: false,
            endereco: false,
            telefone: false,
            senha: true
        });
    }
    
    render(){
        let nomeFiltro = this.props.params.id;
        if(nomeFiltro === '' || nomeFiltro === 'undefined' || nomeFiltro === null){
            return <div> Nehum usuário informado</div>
        }
      
        let filtro = this.props.pessoas;
        if(filtro === ''){
            filtro = [];
        }
        var detalhePessoaArray = filtro.filter( function(elem) {
            return (elem.name === nomeFiltro)     
        });
        if(typeof detalhePessoaArray['0'] === 'undefined'){
            detalhePessoaArray = {
                avatar: '',
                name: '',
                email: '',
                birthday: '',
                andress: '',
                phone: '',
                password: ''
            }
        }else{
            detalhePessoaArray = detalhePessoaArray['0'];
        }
        
        
        return (
            <div>
                <div><Link to="/todos"><Button>Voltar</Button></Link></div>
                <br />
                <div className="detalhes-usuario">
                    <div className="detalhe-back-header">
                        
                    </div>
                    <div className="content-detalhe">
                        
                        <div className="header-content-user"></div>
                        <div className="avatar-detalhe">
                            <img alt="" className="avatar-detalhe-img" src={detalhePessoaArray.avatar} />
                        </div>
                        <div className="info-user-content">
                            <div className="title-info">
                                <h3 style={{display: this.state.nome? 'block': 'none'}} className="title1" >Hi, my name is</h3>
                                <h3 style={{display: this.state.nome? 'block': 'none'}} className="title2">{detalhePessoaArray.name}</h3>

                                <h3 style={{display: this.state.email? 'block': 'none'}} className="title1" >My email andress is</h3>
                                <h3 style={{display: this.state.email? 'block': 'none'}} className="title2">{detalhePessoaArray.email}</h3>

                                <h3 style={{display: this.state.aniversario? 'block': 'none'}} className="title1" >My birthday is</h3>
                                <h3 style={{display: this.state.aniversario? 'block': 'none'}} className="title2">{detalhePessoaArray.birthday}</h3>

                                <h3 style={{display: this.state.endereco? 'block': 'none'}} className="title1" >My andress is</h3>
                                <h3 style={{display: this.state.endereco? 'block': 'none'}} className="title2">{detalhePessoaArray.andress}</h3>

                                <h3 style={{display: this.state.telefone? 'block': 'none'}} className="title1" >My phone number is</h3>
                                <h3 style={{display: this.state.telefone? 'block': 'none'}} className="title2">{detalhePessoaArray.phone}</h3>

                                <h3 style={{display: this.state.senha? 'block': 'none'}} className="title1" >My password is</h3>
                                <h3 style={{display: this.state.senha? 'block': 'none'}} className="title2">{detalhePessoaArray.password}</h3>

                            
                            </div>
                            <div className="icon-info-user-content">
                                <div onMouseEnter={this.showNome} onClick={() => this.showNome} style={{backgroundPosition : this.state.nome ? '0 -96px' : '0 -48px'}}  className="icon-indicator"></div>
                                <div onMouseEnter={this.showEmail} onClick={() => this.showEmail} style={{backgroundPosition : this.state.email ? '-68px -96px' : '-68px -48px'}} className="icon-indicator"></div>
                                <div onMouseEnter={this.showAniversario} onClick={() => this.showAniversario} style={{backgroundPosition : this.state.aniversario ? '-135px -96px' : '-135px -48px'}} className="icon-indicator"></div>
                                <div onMouseEnter={this.showEndereco} onClick={() => this.showEndereco} style={{backgroundPosition : this.state.endereco ? '-203px -96px' : '-203px -48px'}} className="icon-indicator"></div>
                                <div onMouseEnter={this.showTelefone} onClick={() => this.showTelefone} style={{backgroundPosition : this.state.telefone ? '-270px -96px' : '-270px -48px'}} className="icon-indicator"></div>
                                <div onMouseEnter={this.showSenha} onClick={() => this.showSenha} style={{backgroundPosition : this.state.senha ? '-338px -96px' : '-338px -48px'}} className="icon-indicator"></div>
                            </div>
                        
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        pessoas: state.ListagemReducer.pessoas
    }
}

export default connect(mapStateToProps, null)(DetalheUsuario);