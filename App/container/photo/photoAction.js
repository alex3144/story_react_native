import * as type from './photoActionType';

export const setButtonModifier = function () {
   return {
      type: type.SET_BUTTON_MODIFIER,
      isChange: true
   }
}
export const setButtonPellicule = function () {
   return {
      type: type.SET_BUTTON_PELLICULE,
      isChange: false
   }
}
