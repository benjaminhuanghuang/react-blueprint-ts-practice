import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
//
import * as actions from '../actions';

class Header extends Component {

  renderAuthButton(){
    if (this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>;
    }

    return <button onClick={() => this.props.authenticate(true)}>Sign In</button>;
  }

  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink className="navbar-brand" to="/"> React+Redux</NavLink>
            </div>
            <div className="collapse navbar-collapse">
              <ul className = "nav navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" exact activeClassName ="active">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/resources" activeClassName ="active">Resources</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/users" activeClassName ="active">Users</NavLink>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                    Options <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  {this.renderAuthButton()}
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    Dropdown <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div> {/*container-fluid*/}
        </nav>
    );
  }
}
function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);