import { getNodeState } from './state';
import { getNodeStyle } from './style';

export function getNode() {
  return {
    type: (datum) => (datum.id === 'id-0' ? 'circle' : 'rect'),
    style: getNodeStyle(),
    state: getNodeState(),
    palette: {
      field: 'category',
      color: ['#5B8FF9', '#5AD8A6', '#5D7092'],
    },
  };
}
