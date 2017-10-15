import * as types from './homeActionTypes';

//Each function change the state of the store

//Find current user
export const getCurentUser = function(user) {
   console.log("findCurentUser ACTION")
   return {
     type: types.GET_CURRENT_USER,
     user
   };
  }
export const getMatch = function(match){
  console.log("getMatch ACTION", match)
  return{
    type: types.GET_MATCH,
    match
  };
}

export const onLeftAction = function(){
  console.log("onLeftAction")
  return{
    type: types.ON_LEFT_ACTION
  }
}

export const onRightAction = function(){
  console.log("onRightAction")
  return{
    type: types.ON_RIGHT_ACTION
  }
}