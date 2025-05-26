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
}

const authService = new AuthService();
export default AuthService;
