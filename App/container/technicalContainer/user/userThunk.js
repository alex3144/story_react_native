import firebase from 'firebase';
import { getCurentUser } from './userAction';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';


export const _currentUser = function () {
	return (dispatch) => {
		AsyncStorage.getItem("current_user").then((value) => {
			if (value != null) {
				dispatch(getCurentUser(JSON.parse(value).user));
			}
		}).done();
	}
}


