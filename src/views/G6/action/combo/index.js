/**
 * 切换指定 combo 的折叠/展开状态
 * @param {*} param0
 */
export function toggleComboViaId({ graph, comboId }) {
  const combo = graph.getComboData(comboId);
  const isCollapsed = combo?.style.collapsed;
  if (isCollapsed) {
    graph.expandElement(comboId);
  } else {
    graph.collapseElement(comboId);
  }
}

/**
 * 切换所有 combo 的折叠/展开状态
 * @param {*} param0
 */
export function toggleAllCombos({ graph }) {
  const combos = graph.getComboData();
  combos.forEach((combo) => {
    const isCollapsed = combo?.style.collapsed;
    if (isCollapsed) {
      graph.expandElement(combo.id);
    } else {
      graph.collapseElement(combo.id);
    }
  });
}
