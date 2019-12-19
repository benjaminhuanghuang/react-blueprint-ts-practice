import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Elevation, FormGroup, H5, InputGroup, Intent } from "@blueprintjs/core";
import { IconNames } from '@blueprintjs/icons';
import validateInput from './LoginValidator';
import { login } from '../../redux/actions';


// import { userPostFetch } from '../redux/actions';
import "./LoginView.scss";

class LoginView extends PureComponent {
  constructor(props) {
    super(props);

    // reset login status
    //this.props.dispatch({ type: '', username, password });

    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    };
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    this.setState({ errors });
    return isValid;
  }

  onChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  onSubmit = event => {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({errors:{}, isLoading:true});

      const user = {
        username: this.state.username,
        password: this.state.password
      }
      this.props.login(user);
    }
  }

  render() {
    const { errors, username, password, isLoading } = this.state;

    return (
      <div className="login-form-view">
        <Card interactive={true} elevation={Elevation.FOUR}>
          <H5>Login</H5>
          <FormGroup
            inline={true}
            label="User name: "
            labelFor="username"
            // labelInfo="(required)"
            intent={Intent.DANGER}
            helperText={errors.username}
          >
            <InputGroup id="username" placeholder="User name" leftIcon={IconNames.USER} fill={true} onChange={this.onChange} />
          </FormGroup>
          <FormGroup
            inline={true}
            label="Password: "
            labelFor="password"
            className="right"
            // labelInfo="(required)"
            intent={Intent.DANGER}
            helperText={errors.password}
          >
            <InputGroup id="password" placeholder="Password" type="password" leftIcon={IconNames.KEY} onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <Button rightIcon={IconNames.LOG_IN} fill onClick={this.onSubmit}>Login</Button>
          </FormGroup>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

  
export default connect(mapStateToProps, { login })(LoginView);
