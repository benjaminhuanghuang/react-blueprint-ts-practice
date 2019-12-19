import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

// pass in props.component , props.isAuthed, props.rest
const ProtectedRoute = ({ component: Component, isAuthed, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthed
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

ProtectedRoute.propTypes = {
    isAuthed: PropTypes.bool.isRequired,
    component: PropTypes.object,
    location: PropTypes.string
}


const mapStateToProps = (state) => {
    return ({
        isAuthed: state.auth.isAuthed
    })
};

export default connect(mapStateToProps)(ProtectedRoute);