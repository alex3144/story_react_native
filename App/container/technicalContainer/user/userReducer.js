import * as types from './userActionType';

export default function currentUser(state = {
  user: null,
}, action) {
  console.log("---------- in current user reducer ----------", action.match);
  switch (action.type) {
    case types.GET_CURRENT_USER:
      return { ...state, user: action.user };
    case types.GET_MATCH:
      return { ...state, match: action.match };
    case types.GET_PICTURE:
      return {...state, picture: action.picture}
    default:
      return state
  }
}
