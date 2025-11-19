import { memo, useCallback } from "react";
import {
  useComponentState,
  useComponentStateDispatch,
} from "@/components/form-engine/context/component-state";
import { ENUM_COMPONENT_STATE_ACTION_TYPE } from "@/components/form-engine/action/constants";

export default function withComponentWrap(WrappedComponent) {
  const Wrapped = function ComponentWrapHOC({ mode, componentId }) {
    const componentState = useComponentState(componentId) || {};
    const componentStateDispatch = useComponentStateDispatch(componentId);

    const style = componentState.style || {};
    const { position, top, left } = style;

    const handleClick = useCallback(() => {
      componentStateDispatch({
        type: ENUM_COMPONENT_STATE_ACTION_TYPE.SET_ACTIVE,
        payload: {
          componentId,
          active: true,
        },
      });
    }, [componentStateDispatch, componentId]);

    return (
      <div
        data-component-id={componentId}
        className={`fe-render__material-wrap ${
          componentState.active ? "active" : ""
        }`}
        style={{
          position,
          left: left !== undefined ? `${left}px` : undefined,
          top: top !== undefined ? `${top}px` : undefined,
        }}
        onClick={handleClick}
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
