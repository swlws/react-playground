import { produce } from "immer";

export function initComponentState({ componentState, ...restParams }) {
  return produce(componentState, (draft) => {
    const { componentId } = restParams;

    draft[componentId] = {
      ...restParams,
    };
  });
}

export function setComponentActive({ componentState, componentId, active }) {
  return produce(componentState, (draft) => {
    Object.keys(draft).forEach((key) => {
      draft[key].active = false;
    });

    draft[componentId].active = active;
  });
}
