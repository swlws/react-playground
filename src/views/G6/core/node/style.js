export function getNodeStyle() {
  return {
    size: 20,
    labelText: (data) => {
      // data 为 Node 节点完整数据
      return data.id;
    },
    labelFill: '#333',
    labelFontSize: 10,
    labelPosition: 'bottom',
  };
}
