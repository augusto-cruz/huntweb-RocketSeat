import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    // BrowserRouter define que as rotas estao sendo utilizadas atraves de um browser
    // Switch faz com que apenas uma rota seja chamada por vez

    // path="/" - Procura pela primeira rota que se inicia com o que esta no path
    // exact evita isso
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;