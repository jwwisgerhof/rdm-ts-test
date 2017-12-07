import * as React from "react";
import { withStyles, WithStyles } from "material-ui/styles";
import { RouteComponentProps, withRouter } from "react-router-dom";

const styles = {
  root: {
    backgroundColor: "#000",
    height: "100%",
    width: "100%",
    color: "#FFF"
  }
};

interface Props {
  message: string;
}
class InnerTest extends React.Component<
  Props & WithStyles<"root"> & RouteComponentProps<{}>
> {
  render() {
    const { classes, message } = this.props;
    return <div className={classes.root}>{message}</div>;
  }
}

const Styled = withStyles(styles)(InnerTest);
const Routered = withRouter(Styled);

class Test extends React.Component {
  render() {
    return <Routered message="bob" />;
  }
}

export default Test;
