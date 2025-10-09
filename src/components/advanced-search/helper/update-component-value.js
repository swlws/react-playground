export function updateTargetComponentValue({
  treeData,
  rowId,
  componentId,
  value,
}) {
  if (!treeData || !rowId || !componentId) return treeData;

  const newTreeData = { ...treeData };
  newTreeData.list = newTreeData.list.map((item) => {
    if (item.id === rowId) {
      item.row = item.row.map((item) => {
        if (item.id === componentId) {
          item.value = value;
        }
        return item;
      });
    }
    return item;
  });
  return newTreeData;
}
