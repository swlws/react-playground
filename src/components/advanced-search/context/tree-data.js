import { createContext, useContext } from 'react';

/** 树形数据上下文 */
export const TreeDataContext = createContext(null);

/** 使用树形数据上下文 */
export function useTreeData() {
  return useContext(TreeDataContext);
}

/** 树形数据操作上下文 */
export const TreeDataDispatchContext = createContext(null);

/** 使用树形数据操作上下文 */
export function useTreeDataDispatch() {
  return useContext(TreeDataDispatchContext);
}
