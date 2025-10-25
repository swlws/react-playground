import { ENUM_NODE_STATE_TYPE } from '../../core/constants';
import { DEFAULT_COMBO_ID, DEFAULT_NODE_SIZE } from '../constants';

export function getInitNodes() {
  return Array.from({ length: DEFAULT_NODE_SIZE }).map((_, i) => ({
    id: `id-${i}`,
    combo: DEFAULT_COMBO_ID,
    data: { category: i === 0 ? 'central' : 'around' },
    style: {},
    states: [ENUM_NODE_STATE_TYPE.HIGHLIGHT],
  }));
}

export function createOneNode({ id }) {
  return {
    id,
    data: {},
    style: {},
    states: [ENUM_NODE_STATE_TYPE.HIGHLIGHT],
  };
}
