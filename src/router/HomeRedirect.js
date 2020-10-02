import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSession } from '../UserProvider';

const HomeRedirect = ({ component: Component, ...rest }) => {
  const { user, isAdmin } = useSession();

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: isAdmin ? '/admin-home' : `/user-home`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default HomeRedirect;
