import { DEFAULT_NODE_SIZE } from '../constants';

/**
 * 获取初始化边数据
 * @returns
 */
export function getInitEdges() {
  return Array.from({ length: DEFAULT_NODE_SIZE - 1 }).map((_, i) => ({
    source: `id-0`,
    target: `id-${i + 1}`,
  }));
}

/**
 * 创建一条边数据
 * @param {*} param0
 * @returns
 */
export function createOneEdge({ source, target }) {
  return {
    source,
    target,
  };
}
