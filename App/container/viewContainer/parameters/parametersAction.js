import * as types from './parametersActionType';

export const setParameters = function (parameters) {
  console.log("==========setParameters ACTION", parameters)
  return {
    type: types.SET_PARAMS,
    parameters
  };
}
export const getParameters = function (parameters) {
  console.log("==========getParameters ACTION", parameters)
  return {
    type: types.GET_PARAMS,
    parameters
  };
}