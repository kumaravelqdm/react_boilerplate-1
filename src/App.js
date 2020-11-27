import React from "react";

//HOC's
import AppAuth from "./App.auth";
import AppTheme from "./App.theme";
// import AppGQLClient from "./App.gqlclient";
import AppAlert from "./App.alert";
import AppErrorBoundary from "./App.errorBoundry";
import RouterApp from "./router";

import { CssBaseline } from "@material-ui/core";
import AppDialog from "./App.dialog";
import AppBackdrop from "./App.backdrop";

function App() {
  return (
    <AppAuth>
      <AppErrorBoundary>
        <AppTheme>
          <CssBaseline />
          <AppAlert>
            <AppDialog>
              <AppBackdrop>
                <RouterApp />
              </AppBackdrop>
            </AppDialog>
          </AppAlert>
        </AppTheme>
      </AppErrorBoundary>
    </AppAuth>
  );
}

export default App;
