export default function CardList({ list }) {
  const handleDragStart = (e, item) => {
    // 设置拖拽数据
    e.dataTransfer.setData("application/json", JSON.stringify(item));
    e.dataTransfer.effectAllowed = "copy";
  };

  return (
    <div className="form-editor__material-list">
      {list.map((item) => (
        <div
          key={item.id}
          className="form-editor__material-list-item"
          draggable="true"
          onDragStart={(e) => handleDragStart(e, item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
