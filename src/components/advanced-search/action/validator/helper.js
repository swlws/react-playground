/**
 * 确保组件状态存在
 * @param {*} validateResult  验证结果
 * @param {*} nodeId 节点 id
 * @param {*} componentId 组件 id
 * @returns
 */
export function ensureComponentState(validateResult, nodeId, componentId) {
  if (!validateResult[nodeId]) {
    validateResult[nodeId] = {};
  }

  const nodeState = validateResult[nodeId];
  if (!nodeState[componentId]) {
    nodeState[componentId] = {};
  }
  return nodeState[componentId];
}
