import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {userPostFetch} from '../../redux/actions';


interface SignupViewProps {}

interface SignupViewState {
  username: string;
  password: string;
  avatar: string;
  bio: string;
}


export class SignupView extends Component {
  state = {
    username: "",
    password: "",
    avatar: "",
    bio: ""
  }

  handleChange = (event:any) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event:any) => {
    event.preventDefault()
    // this.props.userPostFetch(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <label>Avatar</label>
          <input
            name='avatar'
            placeholder='Avatar (URL)'
            value={this.state.avatar}
            onChange={this.handleChange}
            /><br/>

          <label>Bio</label>
          <textarea
            name='bio'
            placeholder='Bio'
            value={this.state.bio}
            onChange={this.handleChange}
            /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

// const mapDispatchToProps = (dispatch: any) => ({
//   userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// })

// export  connect(null, mapDispatchToProps)(SignupView);