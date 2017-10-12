//Object User
import Picture from './picture';
import Location from './location';
import Conversations from './conversations';

export default class User {
    constructor(
        age,
        avatarUrl,
        fbId,
        daySwippe,
        firstName,
        lastName,
        gender,
        likeByDay,
        uid,
        bio,
        work,
        conversationsId,
        data,
        city,
        lat,
        long,

    ) {
        this.age = age;
        this.avatarUrl = avatarUrl;
        this.fbId = fbId;
        this.daySwippe = daySwippe;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.likeByDay = likeByDay;
        this.uid = uid;
        this.bio = bio;
        this.work = work;
        this.picture = new Picture(data);
        this.location = new Location(city, lat, long);
        this.conversationsId = []
    }
}