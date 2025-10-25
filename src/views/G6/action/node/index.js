import { createOneEdge } from '../../data/edges';
import { createOneNode } from '../../data/nodes';

function getNodeSize(graph) {
  return graph.getNodeData().length;
}

export function addNode({ graph }) {
  const size = getNodeSize(graph);
  const id = `id-${size}`;
  const node = createOneNode({ id });
  const edge = createOneEdge({ source: 'id-0', target: id });

  graph.addNodeData([node]);
  graph.addEdgeData([edge]);

  graph.layout();
}
