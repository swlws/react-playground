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
    const nodeList = [...draft.list];
    while (nodeList.length) {
      const node = nodeList.shift();
      if (node.id === nodeId) {
        const component = node.data.find(
          (component) => component.id === componentId
        );
        component.value = value;
        return;
      }

      if (node.treeData && node.treeData.length) {
        const childList = node.treeData.reduce((acc, item) => {
          acc.push(...item.list);
          return acc;
        }, []);
        nodeList.push(...childList);
      }
    }
  });
}
