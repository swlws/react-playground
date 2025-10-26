import { useComponentState } from "@/components/form-engine/context/component-state";

export default function ComponentWrap({ mode, componentId, children } = {}) {
  const componentState = useComponentState(componentId);
  const { position, top, left } = componentState.style;
  return (
    <div
      style={{
        position: position,
        left: `${left}px`,
        top: `${top}px`,
      }}
    >
      {children}
    </div>
  );
}
