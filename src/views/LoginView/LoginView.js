import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FormGroup, H5, InputGroup, Intent, Switch } from "@blueprintjs/core";
import { IconNames } from '@blueprintjs/icons';


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
            inline={true}
            label="User name: "
            labelFor="username"
            // labelInfo="(required)"
            // helperText="User name"
          >
            <InputGroup id="username" placeholder="User name" leftIcon={IconNames.USER} fill={true}/>
          </FormGroup>
          <FormGroup
            inline={true}
            label="Password: "
            labelFor="password"
            className="right"
            // labelInfo="(required)"
            //helperText="Password"
          >
            <InputGroup id="password" placeholder="Password" type="password" leftIcon={IconNames.KEY}/>
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