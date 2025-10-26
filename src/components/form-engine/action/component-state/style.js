import { produce } from "immer";

export function setComponentStyle({ componentState, componentId, style }) {
  return produce(componentState, (draft) => {
    // 检查组件是否存在
    if (!draft[componentId]) {
      draft[componentId] = {};
    }

    const oldStyle = draft[componentId].style || {};
    draft[componentId].style = {
      ...oldStyle,
      ...style,
    };
  });
}
