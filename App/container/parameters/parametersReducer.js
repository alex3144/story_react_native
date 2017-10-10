import * as types from './parametersActionType';

export default function parameters(state = {
  isDisconnecting: false
}, action) {
  console.log("---------- in parameter reducer -----------", action);
  switch (action.type) {
    case types.SET_IS_DISCONNECTING:
      return { ...state, isDisconnecting: action.isDisconnecting, disconnected: action.disconnected}
    case types.SET_DISCONNECTED:
      return { ...state, isDisconnecting: action.isDisconnecting, disconnected: action.disconnected}
    default:
      return state
  }

}