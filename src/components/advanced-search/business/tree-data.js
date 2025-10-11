import { produce } from 'immer';

/**
 * 使用 immer 更新树形结构中指定组件的值
 * @param {*} param0
 * @returns
 */
export function updateTargetComponentValueWithImmer({
  treeData,
  rowId,
  componentId,
  value,
}) {
  return produce(treeData, (draft) => {
    const rows = [...draft.list];
    while (rows.length) {
      const row = rows.shift();
      if (row.id === rowId) {
        row.row.find((component) => component.id === componentId).value = value;
        return;
      }

      if (row.treeData && row.treeData.length) {
        const childList = row.treeData.reduce((acc, item) => {
          acc.push(...item.list);
          return acc;
        }, []);
        rows.push(...childList);
      }
    }
  });
}
