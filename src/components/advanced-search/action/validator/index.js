import { produce } from 'immer';
import { validateRulesWithData } from './validator-tool';
import { ensureComponentState } from './helper';

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

export function setComponentValidateResult({
  validateResult,
  nodeId,
  componentId,
  result,
}) {
  return produce(validateResult, (draft) => {
    const componentState = ensureComponentState(draft, nodeId, componentId);

    componentState.value = result;
  });
}
