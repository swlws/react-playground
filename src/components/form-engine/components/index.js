import {
  ENUM_MATERIAL_CATEGORY,
  ENUM_MATERIAL_CATEGORY_NAME,
} from "../constants";
import { UI as InputUI, schema as InputSchema } from "./input";
import { UI as SelectUI, schema as SelectSchema } from "./select";

const schemaList = [InputSchema, SelectSchema];

function makeMaterial(schemaList) {
  const tree = [
    {
      type: ENUM_MATERIAL_CATEGORY.LAYOUT,
      name: ENUM_MATERIAL_CATEGORY_NAME[ENUM_MATERIAL_CATEGORY.LAYOUT],
      children: [],
    },
    {
      type: ENUM_MATERIAL_CATEGORY.FORM_ELEMENT,
      name: ENUM_MATERIAL_CATEGORY_NAME[ENUM_MATERIAL_CATEGORY.FORM_ELEMENT],
      children: [],
    },
    {
      type: ENUM_MATERIAL_CATEGORY.CONTAINER,
      name: ENUM_MATERIAL_CATEGORY_NAME[ENUM_MATERIAL_CATEGORY.CONTAINER],
      children: [],
    },
  ];

  schemaList.forEach((schema) => {
    const { category } = schema;
    const obj = tree.find((item) => item.type === category);
    if (!obj) {
      return;
    }
    obj.children.push(schema);
  });

  return tree;
}

// 物料列表
export const materialList = makeMaterial(schemaList);

// UI 映射
export const schemaMapUI = {
  [InputSchema.id]: InputUI,
  [SelectSchema.id]: SelectUI,
};
