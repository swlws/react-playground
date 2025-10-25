import {
  ENUM_NODE_SHAPE_TYPE,
  ENUM_NODE_STATE_TYPE,
} from '../../core/constants';
import { DEFAULT_COMBO_ID, DEFAULT_NODE_SIZE } from '../constants';

/**
 * 获取初始节点
 * @returns
 */
export function getInitNodes() {
  const shapeList = Object.keys(ENUM_NODE_SHAPE_TYPE);
  return Array.from({ length: DEFAULT_NODE_SIZE }).map((_, i) => ({
    id: `id-${i}`,
    type: ENUM_NODE_SHAPE_TYPE[shapeList[i % shapeList.length]],
    combo: DEFAULT_COMBO_ID,
    data: { title: `title-${i}`, subtitle: `subtitle-${i}` },
    style: {},
    states: [ENUM_NODE_STATE_TYPE.HIGHLIGHT],
  }));
}

/**
 * 创建一个节点
 * @param {*} param0
 * @returns
 */
export function createOneNode({ id, combo = null }) {
  return {
    id,
    type: ENUM_NODE_SHAPE_TYPE.DUAL_LABEL_NODE,
    data: { title: `title-${id}`, subtitle: `subtitle-${id}` },
    combo,
    style: {},
    states: [ENUM_NODE_STATE_TYPE.HIGHLIGHT],
  };
}
