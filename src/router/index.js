import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import { Routes } from "./routes";
// import PrivateRoute from "./privateRouter";

import {
  Login,
  NotFound
} from './../screens';

const RouterApp = (props) => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        {/* Login path */}
        <Route path={Routes.login} component={Login} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
