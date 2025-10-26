import { useState } from "react";

// 组件
import FormRenderer from "@fe/render";

// 变量
import { ENUM_FORM_MODE } from "@/components/form-engine/constants";

export default function DrawBoard() {
  const [isDragging, setIsDragging] = useState(false);
  const [componentSchemaList, setComponentSchemaList] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    try {
      // 获取拖拽的物料数据
      const materialData = JSON.parse(
        e.dataTransfer.getData("application/json")
      );

      if (materialData) {
        // 计算放置位置
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 添加新组件到画板
        setComponentSchemaList((prev) => [
          ...prev,
          {
            ...materialData,
            componentId: `${materialData.id}__${crypto.randomUUID()}`,
            position: { x, y },
          },
        ]);
      }
    } catch (error) {
      console.error("拖拽数据解析失败:", error);
    }
  };

  return (
    <div
      className={`form-editor__draw-board ${isDragging ? "dragging" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {componentSchemaList.length === 0 ? (
        <div className="form-editor__draw-board-placeholder">
          <h2>将物料拖拽到此处</h2>
        </div>
      ) : (
        <div className="form-editor__draw-board-content">
          <FormRenderer
            componentSchemaList={componentSchemaList}
            mode={ENUM_FORM_MODE.EDIT}
          />
        </div>
      )}
    </div>
  );
}
