import { produce } from "immer";

export function addComponent({ componentTree, componentId, parentId }) {
  return produce(componentTree, (draft) => {
    draft.push({
      id: componentId,
      parentId,
      children: [],
    });
  });
}
