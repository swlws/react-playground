export default function CardList({ list }) {
  return (
    <div className="form-editor__material-list">
      {list.map((item) => (
        <div key={item.id} className="form-editor__material-list-item">
          {item.name}
        </div>
      ))}
    </div>
  );
}
