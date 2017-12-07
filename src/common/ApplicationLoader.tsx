import * as React from "react";
import { CircularProgress } from "material-ui/Progress";
import { StyleRules, Theme } from "material-ui/styles";
import Typography from "material-ui/Typography";

import { withStyles } from "../config/muiTheme";
import { uqLogoUrl } from "../config/variables";

const styles = (theme: Theme): StyleRules => ({
  root: {
    padding: theme.spacing.unit,
    height: "100%",
    width: "100%",
    display: "flex",
    backgroundColor: theme.palette.primary[500],
    alignItems: "center" as "center",
    justifyContent: "center" as "center"
  },
  content: {
    height: 300,
    textAlign: "center"
  },
  title: {
    color: "#FFF"
  }
});

interface Props {
  classes?: { root: string; content: string; title: string };
  title: string;
}

@withStyles(styles)
class ApplicationLoader extends React.PureComponent<Props> {
  render() {
    const { classes, title } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography type="display2" className={classes.title}>
            {title}
          </Typography>
          <br />
          <br />
          <CircularProgress size={80} color="accent" />
          <br />
          <br />
          <img src={uqLogoUrl} alt="UQ Research Data Manager" />
        </div>
      </div>
    );
  }
}

export default ApplicationLoader;
