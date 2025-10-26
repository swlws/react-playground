import { initComponentState } from "./component-state/state";
import { setComponentStyle } from "./component-state/style";
import { ENUM_COMPONENT_STATE_ACTION_TYPE } from "./constants";

export function componentStateReducer(state, action) {
  switch (action.type) {
    case ENUM_COMPONENT_STATE_ACTION_TYPE.INIT_STATE: {
      return initComponentState({
        componentState: state,
        ...action.payload,
      });
    }
    case ENUM_COMPONENT_STATE_ACTION_TYPE.SET_STYLE: {
      const newState = setComponentStyle({
        componentState: state,
        componentId: action.payload.componentId,
        style: action.payload.style,
      });
      console.log("componentState", newState);
      return newState;
    }
    default:
      return state;
  }
}
