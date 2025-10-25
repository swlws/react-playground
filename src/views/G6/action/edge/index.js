import { createOneEdge } from '../../data/edges';

export function addOneEdge({ graph, source, target }) {
  const edge = createOneEdge({ source, target });
  graph.addEdgeData([edge]);

  return edge;
}
