import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {connect} from 'react-redux';
import logo from '../img/logo-zup-white.svg'
import HeaderP from './HeaderP';
import { Link } from 'react-router';
import {mostrarBarraPesquisa} from '../actions/PesquisaActions'
import {buscaPessoas} from '../actions/ListagemActions'

class Main extends Component {
    componentDidMount(){
        this.props.mostrarBarraPesquisa(false);
        this.props.buscaPessoas();
    }
    constructor(props) {
        super(props);    
        this.mostraBarra = this.mostraBarra.bind(this);
        this.escondeBarra = this.escondeBarra.bind(this);
    }

    mostraBarra(){
        this.props.mostrarBarraPesquisa(true);
    }
    escondeBarra(){
        this.props.mostrarBarraPesquisa(false);
    }

    render(){
        const { Content, Sider } = Layout;
        return (
            <Layout >
                <Sider 
                style={{background: '#FFF'}}
                breakpoint="lg"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo" onClick={() => this.escondeBarra()}>
                        <Link to="/"><img alt="" src={logo} /></Link>
                    </div>
                    <Menu theme="light" mode="inline" >
                        <Menu.Item key="1" onClick={() => this.mostraBarra()}>
                            <Link to="todos">
                                <Icon type="scan" />
                                <span className="nav-text">Todos</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={() => this.mostraBarra()}>
                            <Link to="atendidos">
                                <Icon type="check" />
                                <span className="nav-text">Atendidos</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" onClick={() => this.mostraBarra()}>
                            <Link to="lixeira">
                                <Icon type="delete" />
                                <span className="nav-text">Lixeira</span>
                            </Link>    
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                <HeaderP  stylePorps={{ background: '#2C3E50', padding: 0 ,  position: 'fixed', zIndex: 100, width: '100%' }}  />
                <Content style={{ margin: '80px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {this.props.children}
                    </div>
                </Content>
               
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return{
        mostraPesquisa: state.PesquisaReducer.mostraPesquisa
    }
}

export default connect(mapStateToProps,{mostrarBarraPesquisa, buscaPessoas})(Main)