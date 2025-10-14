import { ENUM_TREE_DATA_OPERATION } from '../constant';
import { updateTargetComponentValueWithImmer } from './tree-data/index.js';

/**
 * 树形数据 reducer
 * @param {*} state
 * @param {*} action
 * @returns
 */
export function treeDataReducer(state, action, ...rest) {
  console.log('treeDataReducer', state, action, ...rest);
  switch (action.type) {
    case ENUM_TREE_DATA_OPERATION.SET_TREE_DATA:
      return action.payload;
    case ENUM_TREE_DATA_OPERATION.UPDATE_TARGET_COMPONENT_VALUE: {
      const params = { ...action.payload, treeData: state };
      return Object.assign(state, updateTargetComponentValueWithImmer(params));
    }
    default:
      return state;
  }
}
