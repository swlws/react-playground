import moment from 'moment';
import { X_AXIS_ENUM } from '../constant/key';

export default class XData {
  getIndex0XAxisData({ data }) {
    return data.map((item) => {
      return {
        value: moment(item.time).format('HH:mm'),
      };
    });
  }

  getIndex1XAxisData({ data }) {
    return data.map((item) => {
      return {
        value: moment(item.time).format('HH:mm'),
      };
    });
  }

  getData({ data }) {
    return {
      [X_AXIS_ENUM.INDEX_0]: this.getIndex0XAxisData({ data }),
      [X_AXIS_ENUM.INDEX_1]: this.getIndex1XAxisData({ data }),
    };
  }
}
