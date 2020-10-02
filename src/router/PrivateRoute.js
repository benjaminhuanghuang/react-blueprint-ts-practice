import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSession } from '../UserProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {token} = useSession();
  const isAdmin = !!token && token.username === 'benjamin.huang@rms.com';
  return (
    <Route
      {...rest}
      render={(props) => {
        const id = props.match.params.id;

        if (!!token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
