import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 *  https://www.youtube.com/watch?v=q5OmQvh4R3s
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
      if (!this.props.isAuthed) {
        console.log("this.context in componentWillMount", this.context);
        this.context.router.history.push('/');
      }
    }

    // click sign out in resources page
    componentWillUpdate(nextProps) {   
      if (!nextProps.isAuthed) {
        this.context.router.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  Authentication.propTypes = {
    isAuthed : PropTypes.bool.isRequired
  }
  
  Authentication.contextTypes = {
    router: PropTypes.object
  }

  function mapStateToProps(state) {
    return { isAuthed: state.auth.isAuthed };
  }

  return connect(mapStateToProps)(Authentication);
}