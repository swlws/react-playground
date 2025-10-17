import { ENUM_TREE_DATA_VALIDATE_ACTION } from "@as/constant";
import {
  setComponentValidateResult,
  validateWhenComponentValueChange,
} from "./validator/index.js";

/**
 * 树形数据 reducer
 *   优化点: 配合 useContextSelector 优化性能, 保持 state 引用不用，使用 Object.assign
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
export function validateResultReducer(state, action) {
  console.log("validateResultReducer", state, action);
  switch (action.type) {
    case ENUM_TREE_DATA_VALIDATE_ACTION.EMIT_VALIDATE_COMPONENT_VALUE:
      validateWhenComponentValueChange({
        validateResult: state,
        ...action.payload,
      });
      return state;
    case ENUM_TREE_DATA_VALIDATE_ACTION.SET_COMPONENT_VALIDATE_RESULT: {
      return Object.assign(
        state,
        setComponentValidateResult({
          validateResult: state,
          ...action.payload,
        })
      );
    }
    default:
      return state;
  }
}
