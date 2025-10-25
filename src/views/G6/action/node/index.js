import { createOneNode } from '../../data/nodes';

function getNodeSize(graph) {
  return graph.getNodeData().length;
}

export function addOneNode({ graph }) {
  const size = getNodeSize(graph);
  const id = `id-${size}`;
  const node = createOneNode({ id });

  graph.addNodeData([node]);

  return node;
}
