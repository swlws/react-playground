import { ENUM_NODE_STATE_TYPE } from '../constants';

export function getNodeState() {
  return {
    [ENUM_NODE_STATE_TYPE.HIGHLIGHT]: {
      stroke: 'red',
      lineWidth: 2,
    },
  };
}
