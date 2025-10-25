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
    type: ENUM_NODE_SHAPE_TYPE.RECT,
    data: {},
    combo,
    style: {},
    states: [ENUM_NODE_STATE_TYPE.HIGHLIGHT],
  };
}

export function createOneDualLabelNode({ id, combo = null }) {
  return {
    id,
    type: ENUM_NODE_SHAPE_TYPE.DUAL_LABEL_NODE,
    data: { title: `title-${id}`, subtitle: `subtitle-${id}` },
    combo,
    style: {},
    states: [ENUM_NODE_STATE_TYPE.HIGHLIGHT],
  };
}

export function createOneUserCardNode({ id, combo = null }) {
  return {
    id,
    type: ENUM_NODE_SHAPE_TYPE.USER_CARD_NODE,
    data: {
      name: '张小明',
      role: '前端工程师',
      status: 'online',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang',
    },
    combo,
    style: {},
    states: [ENUM_NODE_STATE_TYPE.HIGHLIGHT],
  };
}
