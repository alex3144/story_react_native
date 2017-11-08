import * as types from './userActionType';

export default function currentUser(state = {
  user: null,
}, action) {
  console.log("---------- in user reducer ", action);
  switch (action.type) {
    case types.GET_CURRENT_USER:
      return { ...state, user: action.user };
    default:
      return state
  }
}
