import {
  ENUM_ATTR_VALUE_OPERATION_TYPE,
  ENUM_ATTR_VALUE_TYPE,
  ENUM_MATERIAL_TYPE,
} from "@fe/constants";

export default {
  /** 输入框物料 */
  type: ENUM_MATERIAL_TYPE.FORM_ELEMENT,
  name: "输入框",
  configSchema: {
    id: {
      value: ENUM_ATTR_VALUE_TYPE.STRING,
      operation: ENUM_ATTR_VALUE_OPERATION_TYPE.INPUT,
    },
    /** 输入框占位符 */
    placeholder: {
      value: ENUM_ATTR_VALUE_TYPE.STRING,
      operation: ENUM_ATTR_VALUE_OPERATION_TYPE.INPUT,
    },
    /** 输入框默认值 */
    defaultValue: {
      value: ENUM_ATTR_VALUE_TYPE.STRING,
      operation: ENUM_ATTR_VALUE_OPERATION_TYPE.INPUT,
    },
  },
};
