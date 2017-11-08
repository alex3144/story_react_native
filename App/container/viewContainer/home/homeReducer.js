import * as types from './homeActionTypes';

export default function homeReducer(state = {
}, action) {
  console.log("---------- in home reducer", action);
  switch (action.type) {
    case types.ON_LEFT_ACTION:
      return { ...state }
    case types.ON_RIGHT_ACTION:
      return { ...state }
    case types.GET_MATCH:
      return { ...state, match: action.match };
    default:
      return state
  }
}
