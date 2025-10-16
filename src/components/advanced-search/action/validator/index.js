import { produce } from 'immer';
import { validateRulesWithData } from './validator-tool';
import { ENUM_VALIDATE_STATE } from '../../constant';

/**
 * 验证树形结构中指定组件的值
 * @param {*} param0
 * @returns
 */
export function validateWhenComponentValueChange({
  formData,
  rules,
  callback,
}) {
  validateRulesWithData({
    formData,
    rules,
    callback,
  });
}

export function setComponentValidateResult({ validateResult, nodeId, errors }) {
  return produce(validateResult, (draft) => {
    draft[nodeId] = {};

    if (!errors) {
      draft[nodeId] = {};
      return;
    }

    for (const error of errors) {
      draft[nodeId][error.field] = {
        state: ENUM_VALIDATE_STATE.ERROR,
        message: error.message,
      };
    }
  });
}
