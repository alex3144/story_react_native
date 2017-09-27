export default class User {
    constructor(facebook_id, email, name, first_name, last_name, token) {
        this.email = email;
        this.name = name;
        this.first_name = first_name;
        this.last_name = last_name;
        this.token = token;
        this.facebook_id = facebook_id   
      }
}