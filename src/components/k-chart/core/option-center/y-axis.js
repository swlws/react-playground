export function getYAxis({ gridIndex }) {
  return {
    type: 'value',
    gridIndex,
    position: 'left',
    min: 'dataMin',
    max: 'dataMax',
    splitNumber: 5,
  };
}
