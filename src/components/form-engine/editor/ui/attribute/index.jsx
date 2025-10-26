import CustomAttribute from "./custom";
import EventAttribute from "./event";
import ListenerAttribute from "./listener";

export default function Attribute() {
  return (
    <article className="fe-editor-attribute">
      <header className="fe-editor-attribute__header">
        <CustomAttribute />
      </header>

      <section className="fe-editor-attribute__main">
        <EventAttribute />
        <ListenerAttribute />
      </section>
    </article>
  );
}
