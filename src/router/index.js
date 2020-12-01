/**
 * @author Kameshwaran Murugan
 * @email kamesh@qdmplatforms.com
 * @create date 2020-11-27
 * @modify date 2020-12-01
 * @desc Different routes and their corresponding component are defined here.
 */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Routes } from "./routes";

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

        {/* For unknow/non-defined path */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
