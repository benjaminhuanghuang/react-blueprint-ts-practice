import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
//
import Header from './Header';
import Home from './Home';
import Resources from './Resources';
import UserList from './UserList';
import RequireAuth from './auth/RequireAuth';   
import SignIn from './auth/SignIn';
import Signout from './auth/SignOut';
import Signup from './auth/SignUp';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/signin" component={SignIn} />
            <Route path="/signout" component={Signout} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/Resources" component={RequireAuth(Resources)}/>
            <Route exact path="/users" component={UserList}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state)
{
  return {};
}

export default connect(mapStateToProps)(App);