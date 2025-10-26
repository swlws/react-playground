import { memo } from "react";

import { schemaMapUI } from "@/components/form-engine/material";

export default memo(function DyncComponent({ componentId, componentState }) {
  const { componentName } = componentState;

  const ComponentUI = schemaMapUI[componentName];

  if (!ComponentUI) {
    return <div>未找到组件: {componentName}</div>;
  }

  return <ComponentUI key={componentId} componentState={componentState} />;
});
