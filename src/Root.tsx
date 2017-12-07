import * as React from "react";
import { Provider } from "mobx-react";
import { Route, Switch } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import { observer } from "mobx-react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "./config/muiTheme";

import CommonStore from "./stores/CommonStore";
import ApplicationLoader from "./common/ApplicationLoader";

// Modules
import App from "./modules/App";

const commonStore = new CommonStore();

@observer
export default class Root extends React.Component {
  render() {
    return (
      <Provider commonStore={commonStore}>
        <MuiThemeProvider theme={theme}>
          {commonStore.loading === true && (
            <ApplicationLoader title="Research Data Manager" />
          )}
          {commonStore.loading === false && (
            <Router>
              <Switch>
                <Route exact={false} path="/" component={App} />
              </Switch>
            </Router>
          )}
        </MuiThemeProvider>
      </Provider>
    );
  }
}
