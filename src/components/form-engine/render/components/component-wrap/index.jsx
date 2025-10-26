import { useComponentState } from "@/components/form-engine/context/component-state";

export default function ComponentWrap({ mode, componentId, children } = {}) {
  console.log("======", componentId, "+++++");
  const componentState = useComponentState(componentId);
  console.log("======", componentState);

  const { position } = componentState.style;
  return (
    <div
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {children}
    </div>
  );
}
