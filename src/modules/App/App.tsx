import * as React from "react";
import { Route } from "react-router-dom";
import { inject, observer } from "mobx-react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Typography from "material-ui/Typography";
import { StyleRules, Theme, WithStyles, withStyles } from "material-ui/styles";
import { Provider } from "mobx-react";

import { CommonStoreInterface } from "../../stores/CommonStore";

import Drawer from "../../common/MenuDrawer";
import routes from "./routes";
import menuItems from "./menuItems";
import recordStore from "./stores/RecordStore";

const drawerWidth = 320;
const styles = (theme: Theme): StyleRules => ({
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    with: "100%",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    padding: theme.spacing.unit * 3,
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
      marginTop: 64
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

type Props = {
  commonStore?: CommonStoreInterface;
};

type State = {
  mobileMenuOpen: boolean;
};

class App extends React.Component<
  Props & WithStyles<"appFrame" | "appBar" | "content" | "navIconHide">,
  State
> {
  state: State = {
    mobileMenuOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };

  render() {
    const { classes, commonStore } = this.props;
    return (
      <div className={classes.appFrame}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.navIconHide}
              color="contrast"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" noWrap={true}>
              Research Data Manager
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          mobileMenuOpen={this.state.mobileMenuOpen}
          menuItems={menuItems(commonStore.account)}
          handleMenuClose={this.handleDrawerToggle}
        />
        <Provider recordStore={recordStore}>
          <main className={classes.content}>
            {routes.map(item => (
              <Route
                key={item.path}
                component={item.component}
                path={item.path}
                exact={item.exact}
              />
            ))}
          </main>
        </Provider>
      </div>
    );
  }
}

const StyledApp = withStyles(styles)(App);
const ObservedApp = observer(StyledApp);
const InjectedApp = inject("commonStore")(ObservedApp);

export default InjectedApp;
