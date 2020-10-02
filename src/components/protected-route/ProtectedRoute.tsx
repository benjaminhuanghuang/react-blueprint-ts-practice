import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";

export interface ProtectedRouteProps extends RouteProps {
  isAuthed: boolean;
  // authenticationPath: string;    set the path of authentication
  // isAllowed: boolean;
  // restrictedPath: string;
}
/*
https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4-a
*/

// pass in props.component , props.isAuthed, props.rest
const ProtectedRouteHOC: React.FunctionComponent<ProtectedRouteProps> = props => {
  if (props.isAuthed) {
    // if (props.isAuthed && !props.isAllowed) {
    //   const redirectPath = props.restrictedPath;
    // }
    return <Route {...props} />;
  } else {
    const redirectPath = ""; //props.authenticationPath;
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  }
};

const mapStateToProps = (state: any) => {
  return {
    isAuthed: state.auth.isAuthed
  };
};

export const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteHOC);
