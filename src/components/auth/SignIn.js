import React, { Component } from "react";
import { reduxForm, Field} from "redux-form";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
//
import * as actions from "../../actions";
import FormInput from '../FormInput'

class SignIn extends Component {
  
  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password, callback:()=>{
      // - redirect to the route '/feature'
      this.props.history.push("/feature");
    }}); 
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
         <Field key="email" component={FormInput} type="text" label="email" name="email"/>
         <Field key="password" component={FormInput} type="password" label="password" name="password"/>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const SignInForm = reduxForm({
  form: "sigin",
  fields: ["email", "password"] // fields want to reproduce
})(SignIn);

export default connect(mapStateToProps, actions)(withRouter(SignInForm));