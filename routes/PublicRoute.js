import React from 'react';
import {Redirect, Route} from 'react-router-native';
// import {useAuth} from '../contexts/AuthContext';

const PublicRoute = ({component: Component, ...rest}) => {

    // const {currentUser} = useAuth();

    return (
        <Route {...rest} render={props => <Component {...props}/>}/>
    );

};

export default PublicRoute;
