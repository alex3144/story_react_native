import * as type from './parametersActionType';

export const setIsDisconnecting = function () {
  console.log("setIsDisconnecting ACTION")
  return {
    type: type.SET_IS_DISCONNECTING,
    isDisconnecting: true,
    disconnected: false
  };
}
export const setDisconnected = function () {
  console.log("setDisconnected ACTION")
  return{
    type: type.SET_DISCONNECTED,
    isDisconnecting: false,
    disconnected: true
  }
}