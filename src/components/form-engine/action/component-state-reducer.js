import { setComponentStyle } from "./component-state/style";
import { ENUM_COMPONENT_STATE_ACTION_TYPE } from "./constants";

export function componentStateReducer(state, action) {
  console.log("componentStateReducer", state, action);
  switch (action.type) {
    case ENUM_COMPONENT_STATE_ACTION_TYPE.SET_STYLE:
      return setComponentStyle({
        componentState: state,
        componentId: action.payload.componentId,
        style: action.payload.style,
      });
    default:
      return state;
  }
}
