import {
  ENUM_ATTR_VALUE_OPERATION_TYPE,
  ENUM_ATTR_VALUE_TYPE,
  ENUM_MATERIAL_CATEGORY,
} from "@fe/constants";

export default {
  componentName: "fe-input",
  /** 输入框物料 */
  category: ENUM_MATERIAL_CATEGORY.FORM_ELEMENT,
  name: "输入框",
  configSchema: {
    id: {
      label: "ID",
      required: true,
      value: ENUM_ATTR_VALUE_TYPE.TEXT,
      operation: ENUM_ATTR_VALUE_OPERATION_TYPE.ID,
    },
    /** 输入框占位符 */
    placeholder: {
      label: "占位符",
      required: false,
      value: ENUM_ATTR_VALUE_TYPE.STRING,
      operation: ENUM_ATTR_VALUE_OPERATION_TYPE.INPUT,
    },
    /** 输入框默认值 */
    defaultValue: {
      label: "默认值",
      required: false,
      value: ENUM_ATTR_VALUE_TYPE.STRING,
      operation: ENUM_ATTR_VALUE_OPERATION_TYPE.INPUT,
    },
  },
};
