import XData from './x-data';
import YData from './y-data';
import SeriesData from './series-data';

export default class DataCenter {
  constructor() {
    this.data = {};

    this.xData = new XData();
    this.yData = new YData();
    this.seriesData = new SeriesData();
  }

  getData({ data }) {
    return {
      xData: this.xData.getData({ data }),
      yData: this.yData.getData({ data }),
      seriesData: this.seriesData.getData({ data }),
    };
  }
}
