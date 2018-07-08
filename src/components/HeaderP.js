import React, {Component} from 'react';
import { Layout, Input, Button, Avatar } from 'antd';
import {connect} from 'react-redux';
import {valoresPesquisados} from '../actions/PesquisaActions'
import {modificaListagem, retornaListagem} from '../actions/ListagemActions';

class HeaderP extends Component{
    constructor(props) {
        super(props);    
        this.state = {
            mostraRecente: false
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.mostraRecentesFunc = this.mostraRecentesFunc.bind(this);
        this.escondeRecentesFunc = this.escondeRecentesFunc.bind(this);
    }
    handleSearch(event){
        const email = event.target.value;
        
        //grava valores que foram pesquisados
        this.props.valoresPesquisados(email);

        //se  tiver parametro, faz a filtragem
        if(email !== ''){
            let filtro = this.props.pessoas;
            var emailFiltrado = filtro.filter( function(elem) {
                return ( (elem.email === email) || (elem.name === email) )       
            });
            this.props.modificaListagem(emailFiltrado);
        }else{
            //caso estiver vazio, carrega a antiga listagem
            this.props.retornaListagem();
        }
    }
    mostraRecentesFunc(){
        this.setState({mostraRecente : true})
    }
    escondeRecentesFunc(){
        this.setState({mostraRecente : false})
    }
    
    render(){
        
        const { Header} = Layout;
        const propsStyle = this.props.stylePorps;
        const inputBuscar = {
            'borderRadius': '20px',
            'width' : '95%'
        }

        const objRecentes = this.props.buscaRecentes;
        const listaRecentes = objRecentes.map((elem, index) =>
            <div key={index}><span>{elem}</span></div>
        );

        if(!this.props.mostraPesquisa){
            return (
                <Header style={propsStyle}>
                    <div className="formata-barra-pesquisa">
                        <div className="barra-pesquisa">
                           
                        </div>
                        <div className="icone-usuario-barra-pesquisa">
                            <Avatar size="large" src="https://randomuser.me/api/portraits/lego/5.jpg" />
                        </div>
                    </div>
                </Header>
            )
        }else{
            return(
                <Header style={propsStyle}>
                    <div className="formata-barra-pesquisa">
                        <div className="barra-pesquisa">
                            <div className="autocomplete">
                                <Input 
                                    prefix={<Button shape="circle" icon="search" />} 
                                    placeholder="Buscar" 
                                    style={inputBuscar}
                                    onFocus={ this.mostraRecentesFunc } 
                                    onBlur={ this.escondeRecentesFunc }
                                    onPressEnter={this.handleSearch} />
                                     <div className="autocomplete-items" style={{display : this.state.mostraRecente ? 'block' : 'none'}}>
                                        {listaRecentes}
                                     </div>
                                    
                            </div>    
                        </div>
                        <div className="icone-usuario-barra-pesquisa">
                            <Avatar size="large" src="https://randomuser.me/api/portraits/lego/5.jpg" />
                        </div>
                    </div>
                </Header>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return{
        buscaRecentes: state.PesquisaReducer.buscaRecentes,
        pessoas: state.ListagemReducer.pessoas,
        pessoasBkp: state.ListagemReducer.pessoasBkp,
        mostraPesquisa: state.PesquisaReducer.mostraPesquisa,
    }
}

export default connect(mapStateToProps, {valoresPesquisados, modificaListagem, retornaListagem})(HeaderP)