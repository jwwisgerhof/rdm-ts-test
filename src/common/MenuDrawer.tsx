import * as React from "react";
import Hidden from "material-ui/Hidden";
import Drawer from "material-ui/Drawer";
import { Theme } from "material-ui/styles";
import List, { ListItem, ListItemText } from "material-ui/List";
import { withStyles, WithStyles } from "material-ui/styles";
import { RouteComponentProps, withRouter } from "react-router-dom";
import CloseIcon from "material-ui-icons/Close";
import IconButton from "material-ui/IconButton";

import MenuItem from "../interfaces/MenuItem";
import { uqLogoUrl } from "../config/variables";

const styles = (theme: Theme) => ({
  drawerPaper: {
    width: 320,
    position: "relative" as "relative",
    height: "100%"
  },
  logoWrapper: {
    backgroundColor: theme.palette.primary["500"],
    height: "64px",
    padding: "10px",
    textAlign: "center",
    boxSizing: "border-box",
    width: "100%"
  },
  logo: {
    height: "100%"
  },
  closeMenuIcon: {
    position: "absolute" as "absolute",
    right: 0,
    top: 10
  }
});

interface Props {
  handleMenuClose: () => void;
  menuItems: MenuItem[];
  mobileMenuOpen: boolean;
}

class MenuDrawer extends React.PureComponent<
  Props &
    WithStyles<"drawerPaper" | "logoWrapper" | "logo" | "closeMenuIcon"> &
    RouteComponentProps<{}>
> {
  onNavigate = (to: string) => {
    if (to.startsWith("http")) {
      window.location.href = to;
    }

    this.props.handleMenuClose();
  };

  render() {
    const { classes, menuItems } = this.props;
    const drawer = (
      <div style={{ width: "100%" }}>
        <div className={classes.logoWrapper}>
          <img
            className={classes.logo}
            src={uqLogoUrl}
            alt="Research Data Manager"
          />
          <Hidden only={["md", "lg", "xl"]}>
            <IconButton
              onClick={this.props.handleMenuClose}
              className={classes.closeMenuIcon}
            >
              <CloseIcon color="#FFF" />
            </IconButton>
          </Hidden>
        </div>
        <List disablePadding={true}>
          {menuItems.map((item, index) => (
            <ListItem
              button={true}
              key={index}
              onClick={this.onNavigate.bind(this, item.linkTo)}
            >
              <ListItemText
                primary={item.primaryText}
                secondary={item.secondaryText}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Hidden only={["md", "lg", "xl"]}>
          <Drawer
            type="temporary"
            open={this.props.mobileMenuOpen}
            anchor="left"
            classes={{
              paper: classes.drawerPaper
            }}
            onRequestClose={this.props.handleMenuClose}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden only={["xs", "sm"]}>
          <Drawer
            type="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MenuDrawer));
