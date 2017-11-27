import * as React from "react";

import User from "../interfaces/User";

interface Props {
  user: User;
}

export default class UserDetails extends React.Component<Props> {
  render() {
    return <div>Selected user: {this.props.user.name}</div>;
  }
}
