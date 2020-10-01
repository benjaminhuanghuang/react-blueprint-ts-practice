import React from "react";
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

import { AppToaster } from "./singletons";

import { Capabilities } from "./utils";

// Context
import { UserProvider } from "./UserProvider";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="app-container">
            <Switch>
              <Route path="/users" component={UsersView} />
              <Route path="/jobs" component={JobsView} />
              <Route path="/login" component={LoginView} />
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
            </Switch>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;
