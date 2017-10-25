import * as homeTypes from './homeActionTypes';

export const onLeftAction = function(){
  console.log("onLeftAction")
  return{
    type: homeTypes.ON_LEFT_ACTION
  }
}

export const onRightAction = function(){
  console.log("onRightAction")
  return{
    type: homeTypes.ON_RIGHT_ACTION
  }
}