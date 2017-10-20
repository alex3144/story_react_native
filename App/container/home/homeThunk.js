import firebase from 'firebase';
import {
    getCurentUser,
    getMatch
} from './homeActions';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

export const _currentUser = function () {
    // console.log('----- in asynchrone get current user ----- ')
    return (dispatch) => {
        AsyncStorage.getItem("current_user").then((value) => {
            // console.log(" ----- current user uid ----", JSON.parse(value))
            if (value != null) {
                dispatch(getCurentUser(JSON.parse(value).user));
            }
        }).done();
        // dispatch(setCurrentUser(user));
    }
}
export const _match = function () {
    // console.log('----- in asynchrone get match ----- ')
    return (dispatch) => {
        fetch('https://cryptic-retreat-36289.herokuapp.com/profils/qZrMzSeugPN32E2CWBhq9xaEeaw1/false/true/50/18')
            .then((response) => { 
                console.log("--------- in call API --------", JSON.parse(response._bodyText).users);
                dispatch(getMatch(JSON.parse(response._bodyText).users))
            })
            .catch((error) => {console.error(error);
        });
    }
}