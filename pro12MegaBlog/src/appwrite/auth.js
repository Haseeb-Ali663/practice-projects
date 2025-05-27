import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  Account;
  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId
    );
    this.Account = new Account(this.Client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.Account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return userAccount;
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default AuthService;
