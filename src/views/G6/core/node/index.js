export function getNode() {
  return {
    type: (datum) => (datum.id === 'id-0' ? 'circle' : 'rect'),
    style: {
      size: 20,
      labelText: (data) => {
        // data 为 Node 节点完整数据
        return data.id;
      },
      labelFill: '#333',
      labelFontSize: 10,
      labelPosition: 'bottom',
    },
    palette: {
      field: 'category',
      color: ['#5B8FF9', '#5AD8A6', '#5D7092'],
    },
  };
}
