import { memo } from "react";
import { useComponentState } from "@/components/form-engine/context/component-state";

export default function withComponentWrap(WrappedComponent) {
  const Wrapped = function ComponentWrapHOC({ mode, componentId }) {
    const componentState = useComponentState(componentId) || {};
    const style = componentState.style || {};
    const { position, top, left } = style;

    return (
      <div
        style={{
          position,
          left: left !== undefined ? `${left}px` : undefined,
          top: top !== undefined ? `${top}px` : undefined,
        }}
      >
        <WrappedComponent
          mode={mode}
          componentId={componentId}
          componentState={componentState}
        />
      </div>
    );
  };

  Wrapped.displayName = `WithComponentWrap(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;
  return memo(Wrapped);
}
