export function getCombo() {
  return {
    type: 'rect',
    style: {
      fill: '#f0f7ff',
      stroke: '#5B8FF9',
      radius: 8,
    },
    labelText: (d) => d.label,
    labelFill: '#333',
  };
}
