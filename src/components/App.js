import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
//
import FuncBasedComponent from './FuncBasedComponent';

class App extends Component {
  render() {
    return (
      <div>
        <h2>React simple starter</h2>
        <FuncBasedComponent/>
      </div>
    );
  }
}

function mapStateToProps(state)
{
  return {};
}

export default connect(mapStateToProps)(App);