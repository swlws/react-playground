import { useState } from 'react';

/** 强制刷新组件 */
export function useForceRender() {
  const [, setState] = useState(0);
  return setState;
}
