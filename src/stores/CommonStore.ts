import { observable, action } from "mobx";

import User from "../interfaces/User";

export interface CommonStoreInterface {
  selectedUser: User | null;
  users: User[];
  selectUser: (userId: number) => void;
}

export default class CommonStore implements CommonStoreInterface {
  @observable public selectedUser: User = null;
  @observable
  public users: User[] = [
    { id: 1, name: "Bob", mail: "bob@marley.com" },
    { id: 2, name: "Jane", mail: "jane@marley.com" },
    { id: 3, name: "Tmart", mail: "tmart@marley.com" },
    { id: 4, name: "Andrew", mail: "andrew@marley.com" },
    { id: 5, name: "Jan", mail: "jan@marley.com" }
  ];

  @action
  selectUser = (userId: number): void => {
    this.selectedUser = this.users.find(item => item.id === userId);
  };
}
