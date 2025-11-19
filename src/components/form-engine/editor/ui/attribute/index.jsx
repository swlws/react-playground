import { useState } from "react";
import CustomAttribute from "./custom";
import EventAttribute from "./event";
import ListenerAttribute from "./listener";
import FeTabs from "@fe/components/fe-tabs";

export default function Attribute() {
  const [activeTabId, setActiveTabId] = useState("event");
  return (
    <article className="fe-editor-attribute">
      <header className="fe-editor-attribute__header">
        <CustomAttribute />
      </header>

      <section className="fe-editor-attribute__main">
        <header className="fe-editor-attribute__tabs">
          <FeTabs
            tabs={[
              { id: "event", label: "事件" },
              { id: "listener", label: "监听器" },
            ]}
            activeTabId={activeTabId}
            onChange={setActiveTabId}
          />
        </header>

        {activeTabId === "event" && <EventAttribute />}
        {activeTabId === "listener" && <ListenerAttribute />}
      </section>
    </article>
  );
}
