import { memo } from "react";

import { schemaMapUI } from "@fe/components";

export default memo(function DyncComponent({ schema, value }) {
  // 从schemaMapUI中获取对应的UI组件
  const ComponentUI = schemaMapUI[schema.componentName];

  // 如果找不到对应的UI组件，返回一个提示信息
  if (!ComponentUI) {
    console.warn(`未找到组件: ${schema.componentName}`);
    return <div>未找到组件: {schema.name}</div>;
  }

  // 传递必要的属性给组件
  return (
    <ComponentUI key={schema.componentName} schema={schema} value={value} />
  );
});
