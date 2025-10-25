import { DEFAULT_COMBO_ID } from '../constants';

/**
 * 获取初始化组合数据
 * @returns
 */
export function getInitCombos() {
  return [
    {
      id: DEFAULT_COMBO_ID,
      label: '组合1',
      combo: null, // 父组合 ID
    },
  ];
}
