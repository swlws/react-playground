/**
 * 获取组件值
 * @param {*} param0
 * @returns
 */
export function getFormData({ nodeData }) {
  const model = {};
  nodeData.forEach((node) => {
    const { id, value } = node;
    if (id) {
      model[id] = value;
    }
  });
  console.log('model', model);
  return model;
}

/**
 * 获取校验规则
 * @param {*} param0
 */
export function getValidateRules({ nodeData }) {
  const rules = {};
  nodeData.forEach((node) => {
    const { id } = node;
    rules[id] = {
      type: 'array',
      required: true,
      fields: {
        0: { type: 'string', required: true },
      },
    };
  });
  console.log('rules', rules);
  return rules;
}
