import { GRID_ID_ENUM, SERIES_NAME_ENUM } from "../constant/key";
import { getDataZoomInside, getDataZoomSlider } from "./data-zoom";
import { getBarSeries, getLineSeries } from "./series";
import { getXAxis } from "./x-axis";
import { getYAxis } from "./y-axis";

export default class OptionCenter {
  constructor() {
    this.option = {};
  }

  getOption() {
    return {
      animation: false,
      toolbox: { show: false },
      legend: { show: false },
      /** 全局关闭悬浮效果 */
      emphasis: { disabled: true },
      dataZoom: [getDataZoomInside(), getDataZoomSlider()],
      grid: [
        { id: GRID_ID_ENUM.MAIN, top: "20%", bottom: "20%" },
        { id: GRID_ID_ENUM.FOOTER, top: "90%", bottom: "10%" },
      ],
      xAxis: [
        getXAxis({
          gridIndex: 0,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        }),
        getXAxis({ gridIndex: 1, data: [] }),
      ],
      yAxis: [getYAxis({ gridIndex: 0 }), getYAxis({ gridIndex: 1 })],
      series: [
        getLineSeries({
          name: SERIES_NAME_ENUM.K_CHART,
          xAxisIndex: 0,
          yAxisIndex: 0,
          data: [150, 230, 224, 218, 135, 147, 260],
        }),
        getBarSeries({
          name: SERIES_NAME_ENUM.VOLUME,
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: [],
        }),
      ],
    };
  }
}
