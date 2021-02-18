import React, {ComponentType} from 'react';
import {Switch, Route, Redirect, RouteProps} from 'react-router-dom'


import Home from '../pages/home';
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'

import {isAuth} from '../services/isAuth'

interface PrivateRouteProps extends RouteProps{ 
    component: ComponentType
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component, ...rest}) => (
    <Route     
    {...rest}
        render={
            props => isAuth ? (<Component/>):(
                <Redirect to={{ pathname:'/', state:{from: props.location}}}/>
            )
        } 
    />
)

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
        </Switch>
    );
}

export default Routes;