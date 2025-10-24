function getNodeSize(graph) {
  return graph.getNodeData().length;
}

function createNode({ id }) {
  return {
    id,
    data: {},
    style: {},
    states: ['hover'],
  };
}

export function addNode({ graph }) {
  const size = getNodeSize(graph);
  const id = `id-${size}`;
  graph.addNodeData([createNode({ id })]);
  graph.layout();
}
