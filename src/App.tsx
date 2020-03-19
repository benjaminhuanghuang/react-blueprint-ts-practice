import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import classNames from "classnames";
import { IconNames } from "@blueprintjs/icons";
import { Intent } from "@blueprintjs/core";
//
import "./App.scss";
//
import { HeaderActiveTab, HeaderBar, Loader } from "./components";
import { HomeView, UsersView, JobsView, LoginView } from "./views";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import { AppToaster } from "./singletons";

import { Capabilities } from "./utils";


export interface AppProps {
  exampleManifestsUrl?: string;
}

export interface AppState {
  capabilities: Capabilities;
  capabilitiesLoading: boolean;
}

export default class App extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps, context: any) {
    super(props, context);
  }

  static shownNotifications() {
    AppToaster.show({
      icon: IconNames.ERROR,
      intent: Intent.DANGER,
      timeout: 120000,
      message: (
        <>
          It appears that the the service serving this console is not
          responding. The console will not function at the moment
        </>
      )
    });
  }

  wrappedHomeView = () => {
    const { capabilities } = this.state;
    return this.wrapInViewContainer(
      null,
      <HomeView capabilities={capabilities} />
    );
  };

  wrappedUsersView = () => {
    // const { capabilities } = this.state;
    return this.wrapInViewContainer(
      "users",
      <UsersView /> //capabilities={capabilities}
    );
  };

  wrappedJobsView = () => {
    // const { capabilities } = this.state;
    return this.wrapInViewContainer(
      "jobs",
      <JobsView /> //capabilities={capabilities}
    );
  };

  wrapInViewContainer = (
    active: HeaderActiveTab,
    el: JSX.Element,
    classType: "normal" | "narrow-pad" = "normal"
  ) => {
    const { capabilities } = this.state;
    return (
      <>
        <HeaderBar active={active} capabilities={capabilities}/>
        <div className={classNames("view-container", classType)}>{el}</div>
      </>
    );
  };

  render() {
    // if (this.props.isAuthLoading) {
    //   return <Loader loadingText="Hello...." loading />;
    // }

    return (
      <HashRouter>
        <div className="app-container">
          <Switch>
            <ProtectedRoute exact path="/" component={this.wrappedHomeView} />
            <ProtectedRoute path="/users" component={this.wrappedUsersView} />
            <ProtectedRoute path="/jobs" component={this.wrappedJobsView} />
            <Route path="/login" component={LoginView} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

// const mapStateToProps = state => {
//   return { isAuthLoading: state.auth.isLoading };
// };

// export default connect(mapStateToProps)(App);
