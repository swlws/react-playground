import { memo } from "react";

import { schemaMapUI } from "@fe/components";
import { useComponentState } from "@/components/form-engine/context/component-state";

export default memo(function DyncComponent({ componentId }) {
  const componentState = useComponentState(componentId);
  const { componentName } = componentState;

  const ComponentUI = schemaMapUI[componentName];

  if (!ComponentUI) {
    console.warn(`未找到组件: ${componentName}`);
    return <div>未找到组件: {componentName}</div>;
  }

  return <ComponentUI key={componentId} />;
});
