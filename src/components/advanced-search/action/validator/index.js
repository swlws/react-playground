import { produce } from 'immer';
import { ENUM_VALIDATE_STATE } from '../../constant';

import { ensureComponentState } from './helper';

/**
 * 验证树形结构中指定组件的值
 * @param {*} param0
 * @returns
 */
export function validateWhenComponentValueChange({
  validateResult,
  nodeId,
  componentId,
}) {
  return produce(validateResult, (draft) => {
    const componentState = ensureComponentState(draft, nodeId, componentId);

    componentState.value = {
      state: ENUM_VALIDATE_STATE.SUCCESS,
      message: '',
    };
  });
}
