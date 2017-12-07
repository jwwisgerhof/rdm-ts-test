import * as React from "react";
import { CircularProgress } from "material-ui/Progress";
import Typography from "material-ui/Typography";

interface Props {
  message: string;
}

class InlineLoader extends React.PureComponent<Props> {
  render() {
    const { message } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <CircularProgress size={60} /> <br />
        <br />
        <Typography type="headline">{message}</Typography>
        <br />
        <br />
      </div>
    );
  }
}

export default InlineLoader;
