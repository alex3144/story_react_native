import * as types from './userActionType';

export const getCurentUser = function (user) {
  console.log("==========getCurentUser ACTION", user)
  return {
    type: types.GET_CURRENT_USER,
    user
  };
}
