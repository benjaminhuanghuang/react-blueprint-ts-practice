import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FormGroup, H5, InputGroup, Intent, Switch } from "@blueprintjs/core";

// import { userPostFetch } from '../redux/actions';
import "./LoginView.scss";

class LoginView extends PureComponent {
  state = {
    username: "",
    password: "",
    avatar: "",
    bio: ""
  }

  handleChange = event => {
  }

  handleSubmit = event => {
  }

  render() {
    return (
      <div className="login-form-view">
        <div className="login-form">
          <H5>Login</H5>
          <FormGroup
            helperText={"User name"}
            inline={true}
            label="Label"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="password" placeholder="User name" />
          </FormGroup>
          <FormGroup
            helperText={"Password"}
            inline={true}
            label="Password"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="password" placeholder="Password" />
          </FormGroup>
        </div>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// })

// export default connect(null, mapDispatchToProps)(LoginView);

export default LoginView;