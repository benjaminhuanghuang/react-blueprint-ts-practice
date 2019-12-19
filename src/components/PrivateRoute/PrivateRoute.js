import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        props.isAuthed
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
const mapStateToProps = (state) => ({
    isAuthed: state.isAuthed
  });
  
  export default connect(mapStateToProps)(PrivateRoute);