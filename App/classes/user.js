//Object User
import Level from './level'
export default class User {
    constructor(facebook_id, email, name, first_name, last_name, token, picture, point, avatar, nickname) {
        this.email = email;
        this.name = name;
        this.first_name = first_name;
        this.last_name = last_name;
        this.token = token;
        this.facebook_id = facebook_id;
        this.picture =  {data: picture};
        this.nickname = nickname;
        this.level = new Level(point, avatar)
    }
}