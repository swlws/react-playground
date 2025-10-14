import { produce } from 'immer';

/**
 * 使用 immer 更新树形结构中指定组件的值
 * @param {*} param0
 * @returns
 */
export function updateTargetComponentValueWithImmer({
  treeData,
  nodeId,
  componentId,
  value,
}) {
  return produce(treeData, (draft) => {
    const node = draft[nodeId];
    const component = node.data.find(
      (component) => component.id === componentId
    );
    component.value = value;
  });
}
