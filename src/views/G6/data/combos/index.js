import { DEFAULT_COMBO_ID } from '../constants';

export function getInitCombos() {
  return [
    {
      id: DEFAULT_COMBO_ID,
      label: '组合1',
      combo: null, // 父组合 ID
    },
  ];
}
