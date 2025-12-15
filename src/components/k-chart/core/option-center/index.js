import { SERIES_NAME_ENUM, X_AXIS_ENUM } from '../constant/key';
import { getDataZoomInside, getDataZoomSlider } from './data-zoom';
import { getDefaultGrid } from './grid';
import { getBarSeries, getCandlestickSeries } from './series';
import { getTooltipConfig } from './tooltip';
import { getXAxis } from './x-axis';
import { getYAxis } from './y-axis';

export default class OptionCenter {
  constructor() {
    this.option = {};
  }

  getOption({ xData, seriesData }) {
    return {
      animation: false,
      toolbox: { show: false },
      legend: { show: false },
      tooltip: getTooltipConfig(),
      axisPointer: { show: true, link: [{ xAxisIndex: 'all' }] },
      /** 全局关闭悬浮效果 */
      emphasis: { disabled: true },
      dataZoom: [getDataZoomInside(), getDataZoomSlider()],
      grid: getDefaultGrid(),
      xAxis: [
        getXAxis({
          gridIndex: 0,
          data: xData[X_AXIS_ENUM.INDEX_0],
        }),
        getXAxis({
          gridIndex: 1,
          data: xData[X_AXIS_ENUM.INDEX_1],
        }),
      ],
      yAxis: [getYAxis({ gridIndex: 0 }), getYAxis({ gridIndex: 1 })],
      series: [
        getCandlestickSeries({
          name: SERIES_NAME_ENUM.K_CHART,
          xAxisIndex: 0,
          yAxisIndex: 0,
          data: seriesData[SERIES_NAME_ENUM.K_CHART],
        }),
        getBarSeries({
          name: SERIES_NAME_ENUM.VOLUME,
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: seriesData[SERIES_NAME_ENUM.VOLUME],
        }),
      ],
    };
  }
}
