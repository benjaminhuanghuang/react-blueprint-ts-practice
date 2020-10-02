import React from "react";
import { logout } from "../../api/auth";
import { useHistory, Link } from "react-router-dom";
import { useSession } from "../../UserProvider";

//
import "./Header.scss";

function Header() {
  const history = useHistory();
  const { user } = useSession();

  const logoutUser = async () => {
    await logout();
    history.push("/login");
  };

  return (
    <nav className="header">
      <h2 class="header__logo">React for Study</h2>
      <div className="header__nav">
        <Link className="header__nav__item" to="/admin-home">
          Admin
        </Link>

        <Link className="header__nav__item" to="/user-home">
          Home
        </Link>

        <Link className="header__nav__item" to="/jobs">
          Jobs
        </Link>
      </div>
      <div className="header__right">
        {!!user && (
          <button className="ui secondary button logout" onClick={logoutUser}>
            LOGOUT
          </button>
        )}
      </div>
    </nav>
  );
}

export default Header;
