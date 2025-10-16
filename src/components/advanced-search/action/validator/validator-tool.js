import Schema from 'async-validator';

// https://github.com/yiminghe/async-validator
// const descriptor = {
//   roles: {
//     type: 'array',
//     required: true,
//     len: 3,
//     fields: {
//       0: { type: 'string', required: true },
//       1: { type: 'string', required: true },
//       2: { type: 'string', required: true },
//     },
//   },
// };

export function validateRulesWithData({ formData, rules, callback }) {
  const validator = new Schema(rules);
  validator.validate(formData, { firstFields: true }, callback);
}
