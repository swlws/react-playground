import { produce } from "immer";

export function initComponentState({ componentState, ...restParams }) {
  return produce(componentState, (draft) => {
    const { componentId } = restParams;

    draft[componentId] = {
      ...restParams,
    };
  });
}
