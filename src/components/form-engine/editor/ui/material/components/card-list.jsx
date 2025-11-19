// 变量
import { KEY_DATA_TRANSFER } from "@fe/constants";

export default function CardList({ list }) {
  const handleDragStart = (e, item) => {
    // 设置拖拽数据
    e.dataTransfer.setData(KEY_DATA_TRANSFER, JSON.stringify(item));
    e.dataTransfer.effectAllowed = "copy";
  };

  return (
    <div className="form-editor__material-list">
      {list.map((item) => (
        <div
          key={item.componentName}
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
