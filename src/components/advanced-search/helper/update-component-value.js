import { produce } from 'immer';

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
