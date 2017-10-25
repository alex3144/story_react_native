import * as types from './homeActionTypes';

export default function currentUser(state = {
  user: null,
}, action) {
  console.log("---------- in home reducer ----------", action.match);
  switch (action.type) {
    case types.ON_LEFT_ACTION:
      return { ...state }
    case types.ON_RIGHT_ACTION:
      return { ...state }
    default:
      return state
  }
}
