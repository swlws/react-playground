import {
  createContext,
  useContextSelector,
  useContext,
} from 'use-context-selector';

/** 树形数据上下文 */
export const TreeDataContext = createContext(null);

/** 使用树形节点数据上下文 */
export const useTreeNodeData = (id) => {
  console.log('\tuseTreeNodeData', id);
  return useContextSelector(TreeDataContext, (treeData) => treeData[id]);
};

/** 树形数据操作上下文 */
export const TreeDataDispatchContext = createContext(null);

/** 使用树形数据操作上下文 */
export function useTreeDataDispatch() {
  return useContext(TreeDataDispatchContext);
}
