import * as React from "react";
import { inject, observer } from "mobx-react";

import { CommonStoreInterface } from "../stores/CommonStore";
import UserDetails from "./UserDetails";

@inject("appState")
@observer
export default class Users extends React.Component<{
  appState?: CommonStoreInterface;
}> {
  onSelectUser = (userId: number) => {
    this.props.appState.selectUser(userId);
  };

  render() {
    const { users, selectedUser } = this.props.appState;
    return (
      <div>
        <ul>
          {users.map(item => (
            <li key={item.id} onClick={this.onSelectUser.bind(this, item.id)}>
              {item.name} ({item.mail})
            </li>
          ))}
        </ul>
        {selectedUser !== null && <UserDetails user={selectedUser} />}
      </div>
    );
  }
}
