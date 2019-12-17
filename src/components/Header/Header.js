import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
//
import './Header.scss';

class Header extends Component {

  renderAuthButton(){
    if (this.props.authenticated) {
      return  (
        <li className="nav-item">
          <NavLink exact activeClassName="activeNav" to="/signout">sign out</NavLink>
        </li>
      );
    }
    else{
      return [
        <li className="nav-item" key={1}>
        <NavLink exact activeClassName="activeNav" to="/signin">sign in</NavLink>
      </li>,
      <li className="nav-item" key={2}>
        <NavLink exact activeClassName="activeNav" to="/signup">sign up</NavLink>
      </li>
      ];
    }
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
               </ul>
              <ul className="nav navbar-nav navbar-right">
                {this.renderAuthButton()}
              </ul>
            </div>
          </div> {/*container-fluid*/}
        </nav>
    );
  }
}
export default Header;
// function mapStateToProps(state) {
//   return { authenticated: state.authenticated };
// }

// export default connect(mapStateToProps, actions)(Header);