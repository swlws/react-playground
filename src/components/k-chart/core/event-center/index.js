export default class EventCenter {
  constructor(chartInstance) {
    this.chartInstance = chartInstance;
  }
  initEvent() {}

  offEvent() {}

  destroy() {
    this.offEvent();
  }
}
