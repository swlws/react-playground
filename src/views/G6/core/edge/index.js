import { getEdgeState } from './state';
import { getEdgeStyle } from './style';

export function getEdge() {
  return {
    style: getEdgeStyle(),
    state: getEdgeState(),
  };
}
