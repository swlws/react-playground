import { init } from 'echarts';
import BizConfig from './biz-config/index.js';
import DataCenter from './data-center/index.js';
import OptionCenter from './option-center/index.js';
import EventCenter from './event-center/index.js';
import { GRID_LEFT_MARGIN, GRID_RIGHT_MARGIN } from './constant/key.js';

export default class KChartCore {
  constructor(config) {
    this.kChartConfig = config;

    this.init();
  }

  init() {
    this.ensureCanvas();

    this.bizConfig = new BizConfig();

    this.dataCenter = new DataCenter();
    this.eventCenter = new EventCenter({ chartInstance: this.chartInstance });
    this.optionCenter = new OptionCenter();
  }

  ensureCanvas() {
    if (this.chartInstance) return;

    const { dom, width = 500, height = 500 } = this.kChartConfig;
    this.chartInstance = init(dom, {
      width: width - (GRID_LEFT_MARGIN + GRID_RIGHT_MARGIN),
      height,
    });

    this.domObserve = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        this.chartInstance.resize({ width, height });
      }
    });
    this.domObserve.observe(dom);
  }

  drawChart({ data }) {
    const { xData, yData, seriesData } = this.dataCenter.getData({ data });
    const chartOption = this.optionCenter.getOption({
      xData,
      yData,
      seriesData,
    });

    console.log('chartOption', chartOption);

    this.chartInstance.setOption(chartOption);
  }

  updateChart() {}

  destroy() {
    this.eventCenter.destroy();
    this.chartInstance.dispose();
  }
}
