export default class User {
  constructor(username, email, password, requestedUserType) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.requestedUserType = requestedUserType; 
  }
}
