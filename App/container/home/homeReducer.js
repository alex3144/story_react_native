import * as types from './homeActionTypes';

export default function currentUser(state = {
  user: null,
}, action) {
  console.log("---------- in home current user reducer ----------", action.match);
  switch (action.type) {
    case types.GET_CURRENT_USER:
      return { ...state, user: action.user };
    case types.GET_MATCH:
      return { ...state, match: action.match };
    case types.ON_LEFT_ACTION:
      return { ...state }
    case types.ON_RIGHT_ACTION:
      return { ...state }
    default:
      return state
  }
}
