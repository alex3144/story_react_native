import * as types from './userActionType';

export const getCurentUser = function(user) {
  console.log("==========findCurentUser ACTION", user)
  return {
    type: types.GET_CURRENT_USER,
    user
  };
 }
export const getMatch = function(match){
 console.log("==========getMatch ACTION", match)
 return{
   type: types.GET_MATCH,
   match
 };
}
export const getPicture = function(picture){
  console.log("==========getPicture ACTION", picture)
  return{
    type: types.GET_PICTURE,
    picture
  }
}