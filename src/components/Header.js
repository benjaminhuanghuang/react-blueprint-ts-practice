import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
//

class Header extends Component {

  renderAuthButton(){
    return <button>Login</button>
  }


  render() {
    return (
        <nav className="navbar navbar-light">
          <ul className = "nav navbar-nav">
            <li className="nav-item">
              <NavLink to="/" exact activeClassName ="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resources" activeClassName ="active">Resources</NavLink>
            </li>
            <li className="nav-item">
              {this.renderAuthButton()}
            </li>
          </ul>
        </nav>
    );
  }
}

export default Header;