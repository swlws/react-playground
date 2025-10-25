import { DEFAULT_COMBO_ID, DEFAULT_NODE_SIZE } from '../constants';

export function getInitNodes() {
  return Array.from({ length: DEFAULT_NODE_SIZE }).map((_, i) => ({
    id: `id-${i}`,
    combo: DEFAULT_COMBO_ID,
    data: { category: i === 0 ? 'central' : 'around' },
    style: {},
    states: ['hover'],
  }));
}

export function createOneNode({ id }) {
  return {
    id,
    data: {},
    style: {},
    states: ['hover'],
  };
}
