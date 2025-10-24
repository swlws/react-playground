export function getNode() {
  return {
    type: (datum) => (datum.id === 'id-0' ? 'circle' : 'rect'),
    style: {
      size: 20,
      labelText: (d) => d.id,
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
