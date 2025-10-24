import { getInitCombos } from './combos';
import { getInitEdges } from './edges';
import { getInitNodes } from './nodes';

export function getData() {
  return {
    nodes: getInitNodes(),
    edges: getInitEdges(),
    combos: getInitCombos(),
  };
}
