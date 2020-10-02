import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import classNames from "classnames";
import { IconNames } from "@blueprintjs/icons";
import { Intent } from "@blueprintjs/core";
//
import "./App.scss";
//
import { HeaderActiveTab, HeaderBar, Loader, ProtectedRoute } from "./components";
import { HomeView, UsersView, JobsView, LoginView } from "./views";
import Header from "./components/header-simple/Header";


import { AppToaster } from "./singletons";

import { Capabilities } from "./utils";

// Context
import { UserProvider } from "./UserProvider";
// Routers
import HomeRedirect from './router/HomeRedirect';
import PrivateRoute from './router/PrivateRoute';
import AdminRoute from './router/AdminRoute';
// Page for tesing
import AdminHome from "./views/AdminHome";
import UserHome from "./views/UserHome";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="app-container">
            <Header></Header>
            <Switch>
              <PrivateRoute path="/user-home" component={UserHome} />
              <PrivateRoute path="/jobs" component={JobsView} />
              <HomeRedirect path="/login" component={LoginView} />
              <AdminRoute exact path="/admin-home" component={AdminHome} />
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Redirect to="/user-home" />
            </Switch>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;
