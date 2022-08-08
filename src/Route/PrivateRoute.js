import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (

    <Route {...rest} render={props => ( loggedIn ? <Component {...props} />  : <Navigate to="/error" />)}     />           
)


export default PrivateRoute;