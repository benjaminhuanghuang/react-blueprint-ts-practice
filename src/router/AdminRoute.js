import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSession } from "../UserProvider";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { token } = useSession();
  const isAdmin = !!token && token.username === 'benjamin.huang@rms.com';
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!!token && isAdmin) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default AdminRoute;
