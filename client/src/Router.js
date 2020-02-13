import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RegisterPage from './components/RegisterPage'
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/registerpage" component={RegisterPage}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
