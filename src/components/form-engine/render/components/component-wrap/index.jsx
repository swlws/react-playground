export default function ComponentWrap({ mode, schema, children }) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${schema.position.x}px`,
        top: `${schema.position.y}px`,
      }}
    >
      {children}
    </div>
  );
}
