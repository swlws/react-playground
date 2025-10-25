import { addOneEdge } from './core/edge';
import { addOneNode } from './core/node';

export { toggleAllCombos, toggleComboViaId } from './core/combo/index';

export function addNodeEdge({ graph }) {
  const nodeList = graph.getNodeData();
  const randomIndex = Math.floor(Math.random() * nodeList.length);

  const node = addOneNode({ graph });
  addOneEdge({ graph, source: nodeList[randomIndex].id, target: node.id });

  graph.layout();
}
