import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import isLogin from './isLogin';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={props => (
        isLogin() ? 
          <Component {...props} />
          : <Redirect to="/user/sign-in" />
      )}/>
    )
}

export default PrivateRoute;
