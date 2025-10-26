import { useActiveComponentState } from "@/components/form-engine/context/component-state";

export default function CustomAttribute() {
  const activeComponent = useActiveComponentState();

  return (
    <section className="fe-editor-attribute__custom">
      <header className="fe-editor-attribute__custom__header">通用属性</header>

      <main className="fe-editor-attribute__custom__main">
        ID: {activeComponent.componentId}
      </main>
    </section>
  );
}
