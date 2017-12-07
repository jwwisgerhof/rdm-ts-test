import { makeRequest } from "../config/fetch";
import User from "../interfaces/User";

export const getAccount = (): Promise<User> => {
  return makeRequest<User>("GET", "auth/account");
};
