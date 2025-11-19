import { createContext, useContext } from "react";
// import { useContextSelector } from "use-context-selector";

export const ComponentStateContext = createContext({});

/** 指定组件的状态 */
export const useComponentState = (componentId) => {
  return useContext(ComponentStateContext)?.[componentId] || {};
};

/** 获取当前激活的组件状态 */
export const useActiveComponentState = () => {
  const state = useContext(ComponentStateContext);
  return Object.values(state).find((item) => item.active) || {};
};

export const ComponentStateDispatchContext = createContext({});

export const useComponentStateDispatch = () => {
  return useContext(ComponentStateDispatchContext);
};
