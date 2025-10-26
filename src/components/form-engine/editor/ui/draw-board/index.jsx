import { useState } from "react";

// 组件
import FormRenderer from "@fe/render";

// 方法
import { useComponentTreeDispatch } from "@/components/form-engine/context/component-tree";
import { useComponentStateDispatch } from "@/components/form-engine/context/component-state";

// 变量
import { ENUM_FORM_MODE, KEY_DATA_TRANSFER } from "@fe/constants";
import {
  ENUM_COMPONENT_STATE_ACTION_TYPE,
  ENUM_COMPONENT_TREE_ACTION_TYPE,
} from "@/components/form-engine/action/constants";

export default function DrawBoard() {
  const [isDragging, setIsDragging] = useState(false);

  const componentStateDispatch = useComponentStateDispatch();
  const componentTreeDispatch = useComponentTreeDispatch();

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
        e.dataTransfer.getData(KEY_DATA_TRANSFER)
      );

      if (materialData) {
        // 计算放置位置
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const { componentName } = materialData;
        const componentId = `${componentName}__${crypto.randomUUID()}`;
        // 触发组件状态更新
        componentStateDispatch({
          type: ENUM_COMPONENT_STATE_ACTION_TYPE.SET_STYLE,
          payload: {
            componentId,
            style: { position: "absolute", top: y, left: x },
          },
        });

        componentTreeDispatch({
          type: ENUM_COMPONENT_TREE_ACTION_TYPE.ADD_COMPONENT,
          payload: {
            componentId,
            componentName,
            parentId: null,
          },
        });
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
      <div className="form-editor__draw-board-content">
        <FormRenderer mode={ENUM_FORM_MODE.EDIT} />
      </div>
    </div>
  );
}
