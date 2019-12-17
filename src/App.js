import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//
import Header from "./components/Header";

import Home from "./views/Home";
import UserList from "./views/UserList";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={UserList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
