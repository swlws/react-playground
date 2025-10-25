import { ENUM_NODE_SHAPE_TYPE } from '@/views/G6/core/constants';
import {
  createOneDualLabelNode,
  createOneNode,
  createOneUserCardNode,
} from '../../../data/nodes';

function getNodeSize(graph) {
  return graph.getNodeData().length;
}

function nodeFactory({ type, ...rest }) {
  switch (type) {
    case ENUM_NODE_SHAPE_TYPE.DUAL_LABEL_NODE:
      return createOneDualLabelNode(rest);
    case ENUM_NODE_SHAPE_TYPE.USER_CARD_NODE:
      return createOneUserCardNode(rest);
    default:
      return createOneNode({ id: rest.id });
  }
}

export function addOneNode({ graph, type }) {
  const size = getNodeSize(graph);
  const id = `id-${size}`;
  const node = nodeFactory({ type, id });

  graph.addNodeData([node]);

  return node;
}
