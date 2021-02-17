import React from 'react';
import {Switch, Route} from 'react-router-dom'


import Home from '../pages/home';
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/dashboard/:id" component={Dashboard}></Route>

        </Switch>
    );
}

export default Routes;