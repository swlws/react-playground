import { addComponent } from "./component-tree/add-component";
import { ENUM_COMPONENT_TREE_ACTION_TYPE } from "./constants";

export function componentTreeReducer(state, action) {
  console.log("componentTreeReducer", state, action);
  switch (action.type) {
    case ENUM_COMPONENT_TREE_ACTION_TYPE.ADD_COMPONENT:
      return addComponent({ componentTree: state, ...action.payload });
    default:
      return state;
  }
}
