import { ENUM_EDGE_STATE_TYPE } from '../constants';

export function getEdgeState() {
  return {
    [ENUM_EDGE_STATE_TYPE.HIGHLIGHT]: {
      stroke: 'red',
      lineWidth: 2,
    },
  };
}
