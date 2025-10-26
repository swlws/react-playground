import {
  ENUM_ATTR_VALUE_OPERATION_TYPE,
  ENUM_ATTR_VALUE_TYPE,
  ENUM_MATERIAL_TYPE,
} from "@fe/constants";

export default {
  /** 输入框物料 */
  type: ENUM_MATERIAL_TYPE.FORM_ELEMENT,
  name: "选择框",
  configSchema: {
    id: {
      label: "ID",
      required: true,
      value: ENUM_ATTR_VALUE_TYPE.TEXT,
      operation: ENUM_ATTR_VALUE_OPERATION_TYPE.ID,
    },
    /** 选择框选项 */
    options: {
      label: "选项",
      value: ENUM_ATTR_VALUE_TYPE.ARRAY,
      operation: ENUM_ATTR_VALUE_OPERATION_TYPE.ENUM,
      required: true,
    },
    multiple: {
      label: "多选",
      value: ENUM_ATTR_VALUE_TYPE.BOOLEAN,
      operation: ENUM_ATTR_VALUE_OPERATION_TYPE.CHECKBOX,
      options: [
        { label: "多选", value: true },
        { label: "单选", value: false },
      ],
      required: false,
    },
    /** 选择框默认值 */
    defaultValue: {
      label: "默认值",
      value: ENUM_ATTR_VALUE_TYPE.ARRAY,
      operation: ENUM_ATTR_VALUE_OPERATION_TYPE.SELECT,
      required: false,
    },
  },
};
