import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Routes } from "./routes";
import { Access } from "./access";
import AppDrawer from "../App.drawer";

const PrivateRoute = ({ children, ...rest }) => {
  
  const isAuthenticated = (router) => {   
    if (1) {
      const _ = Access(1, router?.match?.path);
      if (_ >= 0) {
        return true;
      };
      return false;
    } else {
      return false;
    }
  };
 
  return (
    <Route
      {...rest}
      render={(_) =>
        isAuthenticated(_) ? (
          <AppDrawer>{children}</AppDrawer>
        ) : (
            <Redirect
              to={{
                pathname: Routes.login,
                state: { from: _?.location },
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;
