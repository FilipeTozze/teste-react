import React from "react";
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Main from './components/Main';
import Todos from './components/Todos';
import Atendidos from './components/Atendidos';
import Lixeira from './components/Lixeira';
import DetalheUsuario from "./components/DetalheUsuario";

const Routes = () => (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path="todos" component={Todos} />
            <Route path="atendidos" component={Atendidos} />
            <Route path="lixeira" component={Lixeira} />
            <Route path="detalhe/:id" component={DetalheUsuario} />
        </Route>
        <Redirect from="*" to="/todos" />
    </Router>
)

export default Routes;