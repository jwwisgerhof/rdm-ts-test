import { observable, action } from "mobx";

import User from "../interfaces/User";
import { getAccount } from "../repositories/account";

export interface CommonStoreInterface {
  loading: boolean;
  account: User;
  loadAccount: (userId: number) => void;
}

export default class CommonStore implements CommonStoreInterface {
  @observable public loading: boolean = true;
  @observable public account: User;

  constructor() {
    this.loadAccount();
  }

  @action
  loadAccount = async (): Promise<void> => {
    try {
      this.account = await getAccount();
      this.loading = false;
    } catch (error) {
      throw error;
    }
  };
}
