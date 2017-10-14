import * as types from './homeActionTypes';

export default function currentUser(state = {
  user:null,
}, action) {
  console.log("---------- in home reducer ----------", action);
  switch (action.type) {
    case types.GET_CURRENT_USER:
      return { ...state, user: action.user};
    default:
      return state
  }
}