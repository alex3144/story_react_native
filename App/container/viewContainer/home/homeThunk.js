import { getMatch } from './homeActions'
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

export const _match = function () {
	return (dispatch) => {
		AsyncStorage.getItem("current_user").then((user) => {
			AsyncStorage.getItem('age_parameter').then((params) => {
				let parameters;
				console.log("---- get value ---", params)
				if (params == null || JSON.parse(params).parameters.length != 2) {
					parameters = [18, 30]
					console.log("-------in if getmatch", parameters)
				} else {
					parameters = JSON.parse(params).parameters
					console.log("-------in esle getmatch", parameters)
				}
				fetch('https://cryptic-retreat-36289.herokuapp.com/profils/rEnuvhqjVjfqPJzwCNxkxQ5OfTL2/false/true/'
					+ (parameters[1]) + '/' + (parameters[0]))
					.then((response) => {
						console.log("--------- in call API --------", response);
						dispatch(getMatch(JSON.parse(response._bodyText).users));
					})
			})
		})
	}
}
