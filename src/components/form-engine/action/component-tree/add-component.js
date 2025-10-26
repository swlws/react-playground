import { produce } from "immer";

export function addComponent({ componentId, parentId }) {
  return produce((draft) => {
    draft.push({
      id: componentId,
      parentId,
      children: [],
    });
  });
}
