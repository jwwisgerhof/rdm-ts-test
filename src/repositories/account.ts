import { makeRequest } from "../config/fetch";
import Account from "../interfaces/Account";

export const getAccount = (): Promise<Account> => {
  return makeRequest<Account>("GET", "auth/account");
};
