import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Elevation, FormGroup, H5, InputGroup } from "@blueprintjs/core";
import { IconNames } from '@blueprintjs/icons';


// import { userPostFetch } from '../redux/actions';
import "./LoginView.scss";

class LoginView extends PureComponent {
  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
        username: '',
        password: '',
        submitted: false
    };
}

  handleChange = event => {
    const { name, value } = event.target;
        this.setState({ [name]: value });
  }

  handleSubmit = event => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
        this.props.login(username, password);
    }
  }

  render() {
    return (
      <div className="login-form-view">
        <Card interactive={true} elevation={Elevation.FOUR}>
          <H5>Login</H5>
          <FormGroup
            inline={true}
            label="User name: "
            labelFor="username"
          // labelInfo="(required)"
          // helperText="User name"
          >
            <InputGroup id="username" placeholder="User name" leftIcon={IconNames.USER} fill={true} />
          </FormGroup>
          <FormGroup
            inline={true}
            label="Password: "
            labelFor="password"
            className="right"
          // labelInfo="(required)"
          //helperText="Password"
          >
            <InputGroup id="password" placeholder="Password" type="password" leftIcon={IconNames.KEY} />
          </FormGroup>
          <FormGroup>
            <Button rightIcon={IconNames.LOG_IN} fill>Login</Button>
          </FormGroup>
        </Card>
      </div>
    )
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};
// export default connect(null, mapDispatchToProps)(LoginView);

export default LoginView;