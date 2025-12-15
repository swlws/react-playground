import { SERIES_NAME_ENUM } from '../constant/key';

export default class SeriesData {
  /** 蜡烛图数据 */
  getCandlestickData({ data }) {
    return data.map((item) => {
      return {
        value: [item.open, item.close, item.low, item.high],
      };
    });
  }

  getVolumeData({ data }) {
    return data.map((item) => {
      return {
        value: item.volume,
      };
    });
  }

  getData({ data }) {
    return {
      [SERIES_NAME_ENUM.K_CHART]: this.getCandlestickData({ data }),
      [SERIES_NAME_ENUM.VOLUME]: this.getVolumeData({ data }),
    };
  }
}
