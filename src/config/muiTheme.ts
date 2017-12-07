import spacing from "material-ui/styles/spacing";
import {
  createMuiTheme,
  withStyles as withStylesMui
} from "material-ui/styles";

import purple from "material-ui/colors/purple";
import blue from "material-ui/colors/blue";

const theme: any = {
  spacing: spacing,
  fontFamily: "Roboto, sans-serif",
  palette: {
    primary: {
      ...purple,
      "500": "#49075E",
      contrastDefaultColor: "#FFF"
    },
    secondary: blue
  }
};

export const layoutHelpers = {
  card: {
    maxWidth: "90%",
    width: 1200,
    position: "relative",
    margin: "0 auto"
  },
  page: {
    flexGrow: 1,
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
    maxWidth: "100%"
  },
  pageTitle: {
    maxWidth: "90%",
    width: 1200,
    margin: "32px auto 16px auto",
    color: "#49075E"
  }
};

export function withStyles(styles: any): any {
  return (target: any) => {
    return withStylesMui(styles)(target);
  };
}

export default createMuiTheme(theme);
