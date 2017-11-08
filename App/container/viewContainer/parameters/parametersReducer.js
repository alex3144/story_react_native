import * as types from './parametersActionType';

export default function parametersReducer(state = {
  parameters: null
}, action) {
  console.log("---------- in parameter reducer ", action);
  switch (action.type) {
    case types.SET_PARAMS:
      return { ...state, parameters: action.parameters }
    case types.GET_PARAMS:
      return { ...state, parameters: action.parameters }
    default:
      return state
  }
}