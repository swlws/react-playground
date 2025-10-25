import { addOneEdge } from './core/edge';
import { addOneNode } from './core/node';

export { toggleAllCombos, toggleComboViaId } from './core/combo/index';

export function addNodeEdge({ graph }) {
  const node = addOneNode({ graph });
  addOneEdge({ graph, source: 'id-1', target: node.id });
  graph.layout();
}
