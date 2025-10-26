/** 表单模式枚举 */
export const ENUM_FORM_MODE = {
  /** 编辑模式 */
  EDIT: "edit",
  /** 查看模式 */
  VIEW: "view",
};

/**
 * 数据传输键
 */
export const KEY_DATA_TRANSFER = "application/json";

/**
 * 物料类型枚举
 */
export const ENUM_MATERIAL_CATEGORY = {
  /** 布局物料 */
  LAYOUT: "layout",
  /** 表单元素物料 */
  FORM_ELEMENT: "form_element",
  /** 容器物料 */
  CONTAINER: "container",
};

export const ENUM_MATERIAL_CATEGORY_NAME = {
  [ENUM_MATERIAL_CATEGORY.LAYOUT]: "布局",
  [ENUM_MATERIAL_CATEGORY.FORM_ELEMENT]: "表单",
  [ENUM_MATERIAL_CATEGORY.CONTAINER]: "容器",
};

/** 属性值类型枚举 */
export const ENUM_ATTR_VALUE_TYPE = {
  /** 字符串类型 */
  STRING: "string",
  /** 数字类型 */
  NUMBER: "number",
  /** 布尔类型 */
  BOOLEAN: "boolean",
  /** 数组类型 */
  ARRAY: "array",
  /** 对象类型 */
  OBJECT: "object",
};

export const ENUM_ATTR_VALUE_OPERATION_TYPE = {
  /** ID操作 */
  ID: "id",
  /** 文本操作 */
  TEXT: "text",
  /** 输入操作 */
  INPUT: "input",
  /** 枚举操作 */
  ENUM: "enum",
  /** 选择操作 */
  SELECT: "select",
  /** 复选框操作 */
  CHECKBOX: "checkbox",
  /** 单选框操作 */
  RADIO: "radio",
};
