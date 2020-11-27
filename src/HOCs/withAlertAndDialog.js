import React from "react";
import { useLocation } from "react-router-dom";
import { AlertContext, DialogContext,BackdropContext, DrawerContext } from "../contexts";

const withAlelrtAndDialog = (Component) => (props) => {
  const alert = React.useContext(AlertContext);
  const dialog = React.useContext(DialogContext);
  const backDrop = React.useContext(BackdropContext);
  const drawer = React.useContext(DrawerContext);
  const queryParams = new URLSearchParams(useLocation().search);

  return (
    <Component {...props} alert={alert} dialog={dialog} backDrop={backDrop} drawer={drawer} queryParams={queryParams}>
      {props.children}
    </Component>
  );
};

export default withAlelrtAndDialog;
