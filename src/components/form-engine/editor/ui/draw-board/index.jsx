import { schemaMapUI } from "@/components/form-engine/components";
import { useState } from "react";

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

      console.log(materialData);

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

  const dyncRenderComponent = (componentSchema) => {
    // 从schemaMapUI中获取对应的UI组件
    const ComponentUI = schemaMapUI[componentSchema.id];

    // 如果找不到对应的UI组件，返回一个提示信息
    if (!ComponentUI) {
      console.warn(`未找到组件: ${componentSchema.id}`);
      return <div>未找到组件: {componentSchema.name}</div>;
    }

    // 传递必要的属性给组件
    return (
      <ComponentUI
        key={componentSchema.id}
        schema={componentSchema}
        value={componentSchema.defaultValue}
      />
    );
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
          {componentSchemaList.map((componentSchema) => (
            <div
              key={componentSchema.componentId}
              className="form-editor__draw-board-component"
              style={{
                position: "absolute",
                left: `${componentSchema.position.x}px`,
                top: `${componentSchema.position.y}px`,
              }}
            >
              {dyncRenderComponent(componentSchema)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
