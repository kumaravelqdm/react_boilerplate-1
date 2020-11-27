import React from "react";
import { Themes, AlertProps, DrawerProps } from "../utils";

export const ThemeContext = React.createContext({
  name: Themes.default,
  setTheme: () => null,
});

export const AuthContext = React.createContext({
  user: {},
  setAuth: () => null,
});

export const AlertContext = React.createContext({
  open: false,
  severity: AlertProps.severity.success,
  msg: "",
  vertical: AlertProps.vertical.top,
  horizontal: AlertProps.horizontal.center,
  onclose: () => null,
  setSnack: () => null,
});

export const DialogContext = React.createContext({
  open: true,
  title: "",
  body: "",
  positiveBtn: "Ok",
  negativeBtn: "Cancel",
  onOk: () => null,
  setDialog: () => null,
});

export const BackdropContext = React.createContext({
  open: true,
  message: "",
  setBackDrop: () => null
})

export const DrawerContext = React.createContext({
  open: true,
  direction: DrawerProps.direction.right,
  variant: DrawerProps.variant.temporary,
  onClose: () => null,
  setDrawer: ()=> null
})