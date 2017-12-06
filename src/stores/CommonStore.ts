import { observable, action } from "mobx";

import Account from "../interfaces/Account";
import { getAccount } from "../repositories/account";

export interface CommonStoreInterface {
  loading: boolean;
  account: Account;
  loadAccount: (userId: number) => void;
}

export default class CommonStore implements CommonStoreInterface {
  @observable public loading: boolean = true;
  @observable public account: Account;

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
