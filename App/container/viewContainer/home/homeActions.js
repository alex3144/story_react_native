import * as types from './homeActionTypes';

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

export const getMatch = function (match) {
  console.log("==========getMatch ACTION", match)
  return {
    type: types.GET_MATCH,
    match
  };
}