export function getCandlestickSeries({ name, xAxisIndex, yAxisIndex, data }) {
  return {
    name,
    type: 'candlestick',
    xAxisIndex,
    yAxisIndex,
    data,
  };
}

export function getLineSeries({ name, xAxisIndex, yAxisIndex, data }) {
  return {
    name,
    type: 'line',
    xAxisIndex,
    yAxisIndex,
    data,
  };
}

export function getBarSeries({ name, xAxisIndex, yAxisIndex, data }) {
  return {
    name,
    type: 'bar',
    xAxisIndex,
    yAxisIndex,
    data,
    barWidth: '75%',
  };
}
