import { DEFAULT_NODE_SIZE } from '../constants';

export function getInitEdges() {
  return Array.from({ length: DEFAULT_NODE_SIZE - 1 }).map((_, i) => ({
    source: `id-0`,
    target: `id-${i + 1}`,
  }));
}
