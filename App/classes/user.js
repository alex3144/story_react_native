//Object User
import Location from './location';
import Conversations from './conversations';

export default class User {
    constructor(
        email,
        age,
        avatarUrl,
        fbId,
        firstName,
        lastName,
        gender,
        uid,
        picture,
        lat,
        long,

    ) { 
        this.email = email;
        this.age = age;
        this.avatarUrl = avatarUrl;
        this.fbId = fbId;
        this.daySwippe = new Date();
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.likeByDay = 20;
        this.uid = uid;
        this.bio = null;
        this.work = null;
        this.picture = picture
        this.location = new Location(lat, long);
        this.conversationsId = []
    }
}