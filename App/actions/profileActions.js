import * as types from './actionTypes';

//Each function change the state of the store

//Find current user
export const getCurentUser = function(user) {
   console.log("findCurentUser ACTION")
   return {
     type: types.GET_CURRENT_USER,
     user
   };
  }