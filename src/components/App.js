import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
//
import Header from './Header';
import Home from './Home';
import Resources from './Resources';
import RequireAuth from './RequireAuth';   

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/resources" component={RequireAuth(Resources)}/>
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