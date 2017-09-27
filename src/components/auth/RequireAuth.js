import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 *  Sudo code in other file
 *  import Authentication   // My HOC
 *  import Resources        // Component I want to wrap
 *  
 *  const ComposedComponent = Authentication(Resources);
 * 
 *  Render the ComposedComponent
 *  <ComposedComponent/>
 */

export default function(ComposedComponent) {
  class Authentication extends Component {
    
    // before enter resources page
    componentWillMount() {
      if (!this.props.authenticated) {
        console.log("this.context in componentWillMount", this.context);
        this.context.router.history.push('/');
      }
    }

    // click sign out in resources page
    componentWillUpdate(nextProps) {   
      if (!nextProps.authenticated) {
        this.context.router.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  Authentication.contextTypes = {
    router: PropTypes.object
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}