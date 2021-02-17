import React from 'react';
import {Switch, Route} from 'react-router-dom'


import Home from '../pages/home';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
        </Switch>
    );
}

export default Routes;